import { useCallback, useEffect } from "react";
import { useForm } from "react-hook-form";
import { Button, Input, Select, RTE } from ".";
import { service } from "../appwrite/database";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export const PostForm = ({ post }) => {
  const {
    register,
    handleSubmit,
    watch,
    setValue,
    control,
    getValues,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: post?.title || "",
      slug: post?.$id || "",
      content: post?.content || "",
      status: post?.status || "active",
    },
  });

  const navigate = useNavigate();
  const userData = useSelector((state) => state.auth.userData);

  const submit = async (data) => {
    if (post) {
      try {
        const file = data.image[0]
          ? await service.uploadFile(data.image[0])
          : null;

        if (file) {
          await service.deleteFile(post.featuredImage);
        }

        const updatedPost = await service.updatePost(post.$id, {
          ...data,
          featuredImage: file ? file.$id : undefined,
        });

        if (updatedPost) {
          navigate(`/post/${updatedPost.$id}`);
        }
      } catch (error) {
        console.error("Error updating post:", error);
        // Handle error and provide feedback to the user
      }
    } else {
      try {
        const file = data.image[0]
          ? await service.uploadFile(data.image[0])
          : null;

        if (file) {
          data.featuredImage = file.$id;
        }

        const newPost = await service.createPost({
          ...data,
          userId: userData.$id,
        });

        if (newPost) {
          navigate(`/post/${newPost.$id}`);
        }
      } catch (error) {
        console.error("Error creating post:", error);
        // Handle error and provide feedback to the user
      }
    }
  };

  const slugTransform = useCallback((value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-z0-9\s-]/g, "") // Remove invalid characters
        .replace(/\s+/g, "-") // Replace spaces with hyphens
        .replace(/-+/g, "-"); // Remove consecutive hyphens
    }
    return "";
  }, []);

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <form
      onSubmit={handleSubmit(submit)}
      className="flex flex-wrap"
    >
      <div className="w-2/3 px-2">
        <Input
          label="Title:"
          placeholder="Title"
          className="mb-4"
          {...register("title", { required: true })}
        />
        {errors.title && (
          <span className="text-red-600">Title is required.</span>
        )}
        <Input
          label="Slug:"
          placeholder="Slug"
          className="mb-4"
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
          {...register("slug", { required: true })}
        />
        {errors.slug && <span className="text-red-600">Slug is required.</span>}
        <RTE
          label="Content:"
          name="content"
          control={control}
          defaultValue={getValues("content")}
        />
      </div>
      <div className="w-1/3 px-2">
        <Input
          label="Featured Image:"
          type="file"
          className="mb-4"
          accept="image/png, image/jpg, image/jpeg, image/gif"
          {...register("image", { required: !post })}
        />
        {post && (
          <div className="w-full mb-4">
            <img
              src={service.previewFile(post.featuredImage)}
              alt={post.title}
              className="rounded-lg"
            />
          </div>
        )}
        <Select
          options={["active", "inactive"]}
          label="Status"
          className="mb-4"
          {...register("status", { required: true })}
        />
        {errors.status && (
          <span className="text-red-600">Status is required.</span>
        )}
        <Button
          type="submit"
          bgColor={post ? "bg-green-500" : undefined}
          className="w-full"
        >
          {post ? "Update" : "Create"}
        </Button>
      </div>
    </form>
  );
};

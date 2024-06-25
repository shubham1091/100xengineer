import { Editor } from "@tinymce/tinymce-react";
import { Controller } from "react-hook-form";
import { config } from "../config";

export const RTE = ({ name, control, label, defaultValue = "" }) => {
  return (
    <div className="w-full">
      {label && <label className="inline-block mb-1 pl-1">{label}</label>}
      <Controller
        name={name || "content"}
        control={control}
        render={({ field: { onChange, value } }) => (
          <Editor
            initialValue={defaultValue}
            value={value}
            apiKey={config.tinyMceKey}
            init={{
              height: 500,
              menubar: true,
              plugins: [
                "image",
                "advlist",
                "autolink",
                "lists",
                "link",
                "charmap",
                "preview",
                "anchor",
                "searchreplace",
                "visualblocks",
                "code",
                "fullscreen",
                "insertdatetime",
                "media",
                "table",
                "code",
                "help",
                "wordcount",
                "anchor",
              ],
              toolbar:
                "undo redo | formatselect | bold italic forecolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | help",
              content_style:
                "body { font-family: Helvetica, Arial, sans-serif; font-size: 14px; }",
            }}
            onEditorChange={onChange}
          />
        )}
      />
    </div>
  );
};

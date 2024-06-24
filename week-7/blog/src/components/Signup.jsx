import { useState } from "react";
import { authService } from "../appwrite/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Input, Logo } from ".";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { login } from "../store/authSlice";

export const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const { register, handleSubmit } = useForm();

  const create = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const data = await authService.getCurrentUser();
        if (data) {
          dispatch(login(data));
          navigate("/");
        }
      }
    } catch (error) {
      setError(error.message);
    }
  };
  return (
    <div className="flex items-center justify-center ">
      <div
        className={`mx-auto w-full max-w-lg bg-gray-100 rounded-xl p-10 border border-black/10`}
      >
        <div className="mb-2 flex justify-center">
          <span className="inline-block w-full max-w-[100px]">
            <Logo width="100%" />
          </span>
        </div>
        <p className="mt-2 text-center textbase text-black/60">
          Already have an account?&nbsp;
          <Link
            to="/login"
            className="font-medium text-primary transition-all duration-200 hover:underline"
          >
            Sign In
          </Link>
        </p>
        {error && <p className="text-red-600 mt-8 text-center">{error}</p>}
        <form
          onSubmit={handleSubmit(create)}
          className="mt-8"
        >
          <div className="space-y-5">
            <Input
              label="Name:"
              placeholder="Enter your name"
              {...register("name", { required: true })}
            />
            <Input
              label="Email:"
              type="email"
              placeholder="Enter your email"
              {...register("email", { required: true })}
            />
            <Input
              label="Password:"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: true })}
            />
            <Button
              type="subit"
              className="w-full"
            >
              Sing up
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

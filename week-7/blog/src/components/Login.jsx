import { Link, useNavigate } from "react-router-dom";
import { login as authLogin } from "../store/authSlice";
import { Button, Input, Logo } from ".";
import { useDispatch } from "react-redux";
import { authService } from "../appwrite/auth";
import { useForm } from "react-hook-form";
import { useState } from "react";

export const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { register, handleSubmit } = useForm();

  const onSubmit = async (data) => {
    setError("");
    try {
      const session = await authService.login(data);
      if (session) {
        const userData = await authService.getCurrentUser();
        if (userData) {
          dispatch(authLogin(userData));
        }
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 text-gray-100">
      <div className="w-full max-w-md bg-gray-800 rounded-lg shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="flex justify-center">
            <Logo width="100px" />
          </div>
          <h2 className="text-center text-2xl font-bold mt-4 mb-6">
            Sign in to your account
          </h2>
          <p className="text-center text-sm text-gray-400 mb-4">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-primary hover:underline"
            >
              Sign Up
            </Link>
          </p>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Email"
              type="email"
              placeholder="Enter your email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
                  message: "Email address must be valid",
                },
              })}
              className="mb-4"
            />
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="mb-6"
            />
            <Button
              type="submit"
              className="w-full"
            >
              Sign in
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

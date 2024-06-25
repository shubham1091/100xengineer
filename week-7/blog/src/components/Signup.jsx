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
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    setError("");
    try {
      const userData = await authService.createAccount(data);
      if (userData) {
        const currentUser = await authService.getCurrentUser();
        if (currentUser) {
          dispatch(login(currentUser));
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
            Create your account
          </h2>
          <p className="text-center text-sm text-gray-400 mb-4">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-primary hover:underline"
            >
              Sign In
            </Link>
          </p>
          {error && <p className="text-red-600 text-center mb-4">{error}</p>}
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              label="Full Name"
              type="text"
              placeholder="Enter your full name"
              {...register("name", { required: true })}
              className="mb-4"
            />
            {errors.name && (
              <span className="text-red-600">Full Name is required.</span>
            )}
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
            {errors.email && (
              <span className="text-red-600">{errors.email.message}</span>
            )}
            <Input
              label="Password"
              type="password"
              placeholder="Enter your password"
              {...register("password", { required: "Password is required" })}
              className="mb-6"
            />
            {errors.password && (
              <span className="text-red-600">Password is required.</span>
            )}
            <Button
              type="submit"
              className="w-full"
            >
              Sign up
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

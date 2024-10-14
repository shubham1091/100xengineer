"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useAuthStore } from "@/store/Auth";
import Link from "next/link";
import { FormEvent, useState } from "react";

export const LoginPage = () => {
  const { login } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // collect data
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // validate data
    if (!email || !password) {
      setError("Please fill all the fields");
      return;
    }

    // call the store
    setIsLoading(true);
    setError("");

    const res = await login(email, password);

    if (res.error) {
      setError(() => res.error!.message);
    }

    setIsLoading(false);
  };
  return (
    <div>
      <h2>Login to Segment slip</h2>
      <p>
        If you don&apos;t have an account,{" "}
        <Link
          href="/register"
          className="underline"
        >
          register
        </Link>{" "}
        with segment slip
      </p>

      {error && <p>{error}</p>}
      <form onSubmit={handleSubmit}>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            name="email"
            placeholder="projectmayhem@fc.com"
            type="email"
          />
        </div>
        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            className="text-black"
            id="password"
            name="password"
            placeholder="••••••••"
            type="password"
          />
        </div>

        <Button
          type="submit"
          disabled={isLoading}
        >
          Log in &rarr;
        </Button>

        <div>
          <Button disabled={isLoading}>Google</Button>
          <Button disabled={isLoading}>GitHub</Button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

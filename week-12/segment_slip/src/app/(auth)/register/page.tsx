"use client";
import { useAuthStore } from "@/store/Auth";
import { FormEvent, useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const RegisterPage = () => {
  const { createAccount, login } = useAuthStore();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // collect data
    const formData = new FormData(e.currentTarget);
    const firstName = formData.get("fisstname") as string;
    const lastName = formData.get("lastname") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // validate data
    if (!firstName || !lastName || !email || !password) {
      setError("Please fill all the fields");
      return;
    }

    // call the store
    setIsLoading(true);
    setError("");

    const res = await createAccount(
      `${firstName} ${lastName}`,
      email,
      password
    );

    if (res.error) {
      setError(() => res.error!.message);
    } else {
      const loginRes = await login(email, password);

      if (loginRes.error) {
        setError(loginRes.error!.message);
      }
    }

    setIsLoading(false);
  };
  return (
    <div>
      <h2>Welcome to Segment slip</h2>
      <p>
        If you already have an account, <Link href="/login">login</Link> to
        segment slip
      </p>

      {error && <p>{error}</p>}
      <form
        className="my-8"
        onSubmit={handleSubmit}
      >
        <div>
          <div>
            <Label htmlFor="firstname">First name</Label>
            <Input
              className="text-black"
              id="firstname"
              name="firstname"
              placeholder="Tyler"
              type="text"
            />
          </div>
          <div>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              className="text-black"
              id="lastname"
              name="lastname"
              placeholder="Durden"
              type="text"
            />
          </div>
        </div>
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            className="text-black"
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
          Sign up &rarr;
        </Button>

        <div>
          <Button disabled={isLoading}>Google</Button>
          <Button disabled={isLoading}>GitHub</Button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

"use client";

import { AuthFormSchema, authFormSchema } from "@/lib/schemas";
import { Lock, Mail, User } from "lucide-react";
import { Google, Facebook } from 'iconsax-reactjs'
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

interface LoginRegisterFormProps {
  content: {
    type: string;
    formHeading: string;
    formHint: string;
    btnText: string;
  };
  submitHandler: (arg: AuthDataType) => void;
}

const LoginRegisterForm = ({
  content,
  submitHandler,
}: LoginRegisterFormProps) => {
  const router = useRouter();

  const formSchema: z.ZodSchema = authFormSchema(content.type);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AuthFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (data: AuthFormSchema) => {
    console.log("Form data:", data);
    try {
      if (content.type === "login") {
        submitHandler({
          firstName: "",
          lastName: "",
          email: data.email,
          password: data.password,
        });
      } else if (content.type === "register") {
        submitHandler({
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full max-w-md p-6 bg-white dark:bg-brand-light-green/5 shadow-md rounded-lg">
      <div className="flex flex-col items-center gap-6">
        <Link href="/" className="flex flex-col gap-4 w-full mb-6">
          <Image
            src="/images/shelfee.svg"
            alt="logo"
            width={60}
            height={60}
            className="size-20"
          />
        </Link>

        <div className="flex flex-col gap-4 mb-6 w-full">
          <h2 className="text-2xl font-semibold text-brand-green">
            {content.formHeading}
          </h2>
          <p className="text-sm text-gray-600 dark:text-brand-cream">{content.formHint}</p>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 w-full">
          {content.type === "register" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="md:col-span-1">
                <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                  <User className="text-gray-400 dark:text-brand-cream" />
                  <input
                    type="text"
                    placeholder="First name"
                    className="w-full h-full outline-none text-sm placeholder:text-gray-400 dark:placeholder:text-brand-cream/20 text-gray-700 dark:text-brand-cream"
                    {...register("firstName")}
                  />
                </div>
                {errors.username && (
                  <span className="text-brand-red text-sm">
                    {errors.username?.message}
                  </span>
                )}
              </div>

              <div className="md:col-span-1">
                <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                  <User className="text-gray-400 dark:text-brand-cream" />
                  <input
                    type="text"
                    placeholder="Last name"
                    className="w-full h-full outline-none text-sm placeholder:text-gray-400 dark:placeholder:text-brand-cream/20 text-gray-700 dark:text-brand-cream"
                    {...register("lastName")}
                  />
                </div>
                {errors.username && (
                  <span className="text-brand-red text-sm">
                    {errors.username?.message}
                  </span>
                )}
              </div>
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 border rounded-md px-3 py-2">
              <Mail className="text-gray-400 dark:text-brand-cream" />
              <input
                type="email"
                placeholder={content.type === "login" ? "Your email" : "Email"}
                className="w-full h-full outline-none text-sm placeholder:text-gray-400 dark:placeholder:text-brand-cream/20 text-gray-700 dark:text-brand-cream"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <span className="text-brand-red text-sm">
                {errors.email?.message}
              </span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 border rounded-md px-3 py-2">
              <Lock className="text-gray-400 dark:text-brand-cream" />
              <input
                type="password"
                placeholder={
                  content.type === "login" ? "Your password" : "Password"
                }
                className="w-full h-full outline-none text-sm placeholder:text-gray-400 dark:placeholder:text-brand-cream/20 text-gray-700 dark:text-brand-cream"
                {...register("password")}
              />
            </div>
            {errors.password && (
              <span className="text-brand-red text-sm">
                {errors.password?.message}
              </span>
            )}
          </div>

          <div>
            {content.type === "register" && (
              <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                <Lock className="text-gray-400 dark:text-brand-cream" />
                <input
                  type="password"
                  placeholder="Password Confirmation"
                  className="w-full h-full outline-none text-sm placeholder:text-gray-400 dark:placeholder:text-brand-cream/20 text-gray-700 dark:text-brand-cream"
                  {...register("confirmPassword")}
                />
              </div>
            )}
            {errors.confirmPassword && (
              <span className="text-brand-red text-sm">
                {errors.confirmPassword?.message}
              </span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-brand-green text-white font-semibold rounded-md hover:bg-brand-purple/90 transition cursor-pointer"
          >
            {content.btnText}
          </button>
        </form>

        <div className="flex flex-col items-center gap-4 mt-4 w-full">
          <div className="w-full flex items-center">
            <div className="flex-grow border-t"></div>
            <span className="px-2 text-gray-500 dark:text-brand-cream/50">or continue with</span>
            <div className="flex-grow border-t"></div>
          </div>
          <div className="flex gap-4 w-full">
            <button
              onClick={() => {}}
              className="w-full py-2 px-4 border rounded-md flex items-center justify-center gap-2 cursor-pointer text-gray-600 dark:text-brand-cream"
            >
              <Google size="32" variant="Bold" className="h-5 w-5" />
              Google
            </button>
            <button
              onClick={() => {}}
              className="w-full py-2 px-4 border rounded-md flex items-center justify-center gap-2 cursor-pointer text-gray-600 dark:text-brand-cream"
            >
              <Facebook size="32" variant="Bold" className="h-5 w-5" />
              Facebook
            </button>
          </div>
        </div>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-gray-600 dark:text-brand-cream">
            {content.type === "login"
              ? "Don't have an account?"
              : "Already have an account?"}
          </span>
          <button
            onClick={() => {
              if (content.type === "login") {
                router.push("/sign-up");
              } else {
                router.push("/sign-in");
              }
            }}
            className="text-brand-blue hover:scale-105 transition-transform duration-500 cursor-pointer"
          >
            {content.type === "login" ? "Register" : "Login"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;

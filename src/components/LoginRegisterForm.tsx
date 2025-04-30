'use client';

import { AuthFormSchema, authFormSchema } from '@/utils/schemas';
import { Lock, Mail, User } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from 'zod';

interface LoginRegisterFormProps {
  content: {
    type: string;
    formHeading: string;
    formHint: string;
    btnText: string;
  };
  submitHandler: (arg: AuthDataType) => void;
}

const LoginRegisterForm = ({ content, submitHandler }:LoginRegisterFormProps) => {
  const router = useRouter();

  const formSchema: z.ZodSchema = authFormSchema(content.type);
  const { register, handleSubmit, formState: { errors } } = useForm<AuthFormSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const onSubmit = async (data: AuthFormSchema) => {
    console.log("Form data:", data);
    try {
      if (content.type === "login") {
        submitHandler({
          username: "",
          email: data.email,
          password: data.password,
        });
      } else if (content.type === "register") {
        submitHandler({
          username: data.username,
          email: data.email,
          password: data.password,
        });
      }
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen w-full max-w-md p-6 bg-white shadow-md rounded-lg">
      <div className="flex flex-col items-center gap-6">
        <Link href='/' className="flex flex-col gap-4 w-full mb-6">
          <Image
            src="/images/shelfee.svg"
            alt="logo"
            width={60}
            height={60}
            className="size-20"
          />
        </Link>

        <div className="flex flex-col gap-4 mb-6 w-full">
          <h2 className="text-2xl font-semibold text-brand-green">{content.formHeading}</h2>
          <p className="text-sm text-gray-600">{content.formHint}</p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4 w-full"
        >
          {content.type === 'register' && (
            <div>
              <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                <User className="text-gray-400" />
                <input
                  type="text"
                  placeholder="Username"
                  className="w-full h-full outline-none text-sm placeholder:text-gray-400 text-gray-700"
                  {...register("username")}
                />
              </div>
              {errors.username && (
                <span className='text-brand-red text-sm'>{errors.username?.message}</span>
              )}
            </div>
          )}

          <div>
            <div className="flex items-center gap-2 border rounded-md px-3 py-2">
              <Mail className="text-gray-400" />
              <input
                type="email"
                placeholder={content.type === 'login' ? 'Your email' : 'Email'}
                className="w-full h-full outline-none text-sm placeholder:text-gray-400 text-gray-700"
                {...register("email")}
              />
            </div>
            {errors.email && (
              <span className='text-brand-red text-sm'>{errors.email?.message}</span>
            )}
          </div>

          <div>
            <div className="flex items-center gap-2 border rounded-md px-3 py-2">
              <Lock className="text-gray-400" />
              <input
                type="password"
                placeholder={content.type === 'login' ? 'Your password' : 'Password'}
                className="w-full h-full outline-none text-sm placeholder:text-gray-400 text-gray-700"
                {...register("password")}
              />
            </div>
            {errors.password && (
              <span className='text-brand-red text-sm'>{errors.password?.message}</span>
            )}
          </div>
          
          <div>
            {content.type === 'register' && (
              <div className="flex items-center gap-2 border rounded-md px-3 py-2">
                <Lock className="text-gray-400" />
                <input
                  type="password"
                  placeholder="Password Confirmation"
                  className="w-full h-full outline-none text-sm placeholder:text-gray-400 text-gray-700"
                  {...register("confirmPassword")}
                />
              </div>
            )}
            {errors.confirmPassword && (
              <span className='text-brand-red text-sm'>{errors.confirmPassword?.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-brand-green text-white font-semibold rounded-md hover:bg-brand-purple/90 transition cursor-pointer"
          >
            {content.btnText}
          </button>
        </form>

        <div className="flex items-center gap-2 mt-4">
          <span className="text-sm text-gray-600">
            {content.type === 'login' ? "Don't have an account?" : 'Already have an account?'}
          </span>
          <button
            onClick={() => {
              if (content.type === 'login') {
                router.push('/sign-up');
              } else {
                router.push('/sign-in');
              }
            }}
            className="text-brand-blue hover:scale-105 transition-transform duration-500 cursor-pointer"
          >
            {content.type === 'login' ? 'Register' : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginRegisterForm;

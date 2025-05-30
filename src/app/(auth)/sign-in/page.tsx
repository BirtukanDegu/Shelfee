'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import { toast } from 'sonner';
import { useLoginMutation } from '@/redux/services/authApiSlice';

const content = {
  type: 'login',
  formHeading: 'Welcome Back!',
  formHint: 'Enter your credentials to access your account.',
  btnText: 'Sign In',
};

const SignIn = () => {
  const router = useRouter();
  const [login, { isLoading }] = useLoginMutation();


  async function handleLogin(data: AuthDataType) {
    const requestTimeout = setTimeout(() => {
      toast.warning("Your internet connection seems slow");
    }, 5000);

    const userData = {
      email: data.email,
      password: data.password,
    };

    try {
      await login(userData).unwrap();
      clearTimeout(requestTimeout);
      router.push('/my-shelf');
      toast.success("You have successfully logged in.");
    } catch {
      clearTimeout(requestTimeout);
    }
  }

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <LoginRegisterForm content={content} submitHandler={handleLogin} isLoading={isLoading}/>
    </div>
  );
};

export default SignIn;
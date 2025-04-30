'use client'

import React from 'react';
import { useRouter } from 'next/navigation';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import { AuthDataType } from '@/types';

const content = {
  type: 'login',
  formHeading: 'Welcome Back!',
  formHint: 'Enter your credentials to access your account.',
  btnText: 'Sign In',
};

const SignIn = () => {
  const router = useRouter();

  function handleLogin(data: AuthDataType) {
    router.push('/profile');
    console.log("Login data:", data);
  }

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <LoginRegisterForm content={content} submitHandler={handleLogin} />
    </div>
  );
};

export default SignIn;
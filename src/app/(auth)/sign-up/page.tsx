'use client';

import React from 'react';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import { AuthDataType } from '@/types';
import { useRouter } from 'next/navigation';

const content = {
  type: 'register',
  formHeading: 'Welcome!',
  formHint: 'Register to access to all features of Shelfee.',
  btnText: 'Sign Up',
};

const SignUp = () => {
  const router = useRouter();

  function handleRegister(data: AuthDataType) {
    router.push('/profile');
    console.log("Registration data:", data);
  }

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <LoginRegisterForm content={content} submitHandler={handleRegister} />
    </div>
  );
};

export default SignUp;
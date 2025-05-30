'use client'

import React from 'react';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import { toast } from 'sonner';
import { useForgotPasswordMutation } from '@/redux/services/authApiSlice';

const content = {
  type: 'forgotPassword',
  formHeading: 'Forgot password?',
  formHint: "Don't worry we've got your back. Enter your email below and we'll send you a passwword reset link.",
  btnText: 'Continue',
};

const ForgotPassword = () => {
  const [forgotPassword, { isLoading }] = useForgotPasswordMutation();

  async function handleForgotPassword(data: AuthDataType) {
    const requestTimeout = setTimeout(() => {
      toast.warning("Your internet connection seems slow");
    }, 5000);

    const userData = {
      email: data.email,
    };

    try {
      await forgotPassword(userData).unwrap();
      clearTimeout(requestTimeout);
      toast.success("Password reset link sent to your email!");
    } catch {
      clearTimeout(requestTimeout);
    }
  }

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <LoginRegisterForm content={content} submitHandler={handleForgotPassword} isLoading={isLoading}/>
    </div>
  );
};

export default ForgotPassword;
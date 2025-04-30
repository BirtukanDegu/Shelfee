import React from 'react';
import LoginRegisterForm from '@/components/LoginRegisterForm';

const content = {
  type: 'login',
  formHeading: 'Welcome Back!',
  formHint: 'Enter your credentials to access your account.',
  btnText: 'Sign In',
};

const SignIn = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <LoginRegisterForm content={content} />
    </div>
  );
};

export default SignIn;
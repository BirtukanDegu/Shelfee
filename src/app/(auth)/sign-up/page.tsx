import React from 'react';
import LoginRegisterForm from '@/components/LoginRegisterForm';

const content = {
  type: 'register',
  formHeading: 'Welcome!',
  formHint: 'Register to access to all features of Shelfee.',
  btnText: 'Sign Up',
};

const SignIn = () => {
  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <LoginRegisterForm content={content} />
    </div>
  );
};

export default SignIn;
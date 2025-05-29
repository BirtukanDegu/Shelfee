'use client';

import React from 'react';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';
import { useRegisterMutation } from '@/redux/services/authApiSlice';

const content = {
  type: 'register',
  formHeading: 'Welcome!',
  formHint: 'Register to access to all features of Shelfee.',
  btnText: 'Sign Up',
};

const SignUp = () => {
  const router = useRouter();
  const [registerUser, { isLoading }] = useRegisterMutation();

  async function handleRegister(data: AuthDataType) {
    const requestTimeout = setTimeout(() => {
      toast.warning("Your internet connection seems slow");
    }, 5000);
    
    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      email: data.email,
      password: data.password,
    };

    try {
      const data = await registerUser(userData).unwrap();
      clearTimeout(requestTimeout);

      toast.success("You have successfully registered. Please check your email to activate your account.");
      router.push("/sign-in");
      
    } catch (err) {
      clearTimeout(requestTimeout);
    }
  }

  return (
    <div className='flex items-center justify-center h-screen w-full'>
      <LoginRegisterForm content={content} submitHandler={handleRegister} isLoading={isLoading}/>
    </div>
  );
};

export default SignUp;
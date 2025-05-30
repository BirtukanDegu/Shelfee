'use client';

import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import { useRouter, useSearchParams } from 'next/navigation';
import { Loader } from 'lucide-react';
import LoginRegisterForm from '@/components/LoginRegisterForm';
import {
  useChangePasswordMutation,
  useCheckResetPasswordMutation,
} from '@/redux/services/authApiSlice';

const content = {
  type: 'resetPassword',
  formHeading: 'Reset password.',
  formHint: "Enter your new password below. Make sure it's strong and secure.",
  btnText: 'Continue',
};

export default function UpdatePassword() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const hash = searchParams.get('hash');

  const [isHashValid, setIsHashValid] = useState(false);
  const [isHashChecked, setIsHashChecked] = useState(false);

  const [checkHash, { isLoading: isCheckingHash }] =
    useCheckResetPasswordMutation();

  const [
    changePassword,
    { isLoading: isChangingPassword, error: changePasswordError },
  ] = useChangePasswordMutation();

  useEffect(() => {
    async function validateHash() {
      if (!hash) {
        router.replace('/forgot-password');
        return;
      }

      try {
        await checkHash({ hash }).unwrap();
        setIsHashValid(true);
      } catch (err) {
        setIsHashValid(false);
        setTimeout(() => {
          router.replace('/forgot-password');
        }, 5000);
      } finally {
        setIsHashChecked(true);
      }
    }

    validateHash();
  }, [hash, checkHash, router]);

  async function handleResetPassword(data: AuthDataType) {
    const requestTimeout = setTimeout(() => {
      toast.warning('Your internet connection seems slow');
    }, 5000);

    try {
      await changePassword({ password: data.password, hash: hash }).unwrap();
      clearTimeout(requestTimeout);
      toast.success('Password changed successfully!');
      router.push('/sign-in');
    } catch (err) {
      clearTimeout(requestTimeout);
    }
  }

  if (isCheckingHash || !isHashChecked) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <Loader className="animate-spin h-8 w-8 text-gray-500" />
      </div>
    );
  }

  return (
    <div className="p-6 flex-center min-h-screen">
      {isHashValid && (
        <LoginRegisterForm
          content={content}
          submitHandler={handleResetPassword}
          isLoading={isChangingPassword}
        />
      )}
    </div>
  );
}

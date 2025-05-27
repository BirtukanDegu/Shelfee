"use client";

import { useEffect, useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Loader } from "lucide-react";
import LoginRegisterForm from "@/components/LoginRegisterForm";
import { useChangePasswordMutation, useCheckResetPasswordQuery } from "@/redux/services/authApiSlice";

const content = {
  type: 'resetPassword',
  formHeading: 'Reset password.',
  formHint: "Enter your new password below to reset your account. Make sure it's strong and secure.",
  btnText: 'Continue',
};

export default function UpdatePassword({ params }: { params: Promise<{ id: string }> }) {
  const router = useRouter();
  const [unwrappedParams, setUnwrappedParams] = useState<{ id: string } | null>(null);
  const [resetPassword, { isLoading }] = useChangePasswordMutation();

  useEffect(() => {
    params.then((resolvedParams) => {
      setUnwrappedParams(resolvedParams);
    });
  }, [params]);

  const {
    data: checkData,
    error,
    isLoading: isCheckingLoading,
    refetch,
  } = useCheckResetPasswordQuery(unwrappedParams?.id || '');

  // useEffect(() => {
  //   if (error) {
  //     router.push("/not-found");
  //   }
  // }, [isCheckingLoading, error, router]);

  async function handleResetPassword(data: AuthDataType) {
    const requestTimeout = setTimeout(() => {
      toast.warning("Your internet connection seems slow");
    }, 5000);

    console.log("dataa:", data)

    const userData = {
      password: data.password,
    };

    try {
      const data = await resetPassword(userData).unwrap();
      clearTimeout(requestTimeout);
      toast.success(data.message)
      router.push("/my-shelf")
    } catch (err) {
      clearTimeout(requestTimeout);
    }
  }  

  return (
    <div className="p-6 flex-center min-h-screen">

          <LoginRegisterForm content={content} submitHandler={handleResetPassword} isLoading={isLoading}/>

    </div>
  );
}
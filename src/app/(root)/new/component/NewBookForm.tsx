"use client";
import Image from "next/image";
import { BookDataPreview } from "@/app/(root)/new/component/BookDataPreview";
import { useForm, FormProvider } from "react-hook-form";
import { useEffect, useState } from "react";
import { UserInputForm } from "@/components/bookDetail/form/userInputForm";
import { FormSteps } from "@/components/bookDetail/form/step/fromSteps";
import Link from "next/link";

export const NewBookForm = () => {
  const methods = useForm();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsClient(true);
      try {
        const step = localStorage.getItem("step");
        if (!(step && typeof +step === "number"))
          localStorage.setItem("step", "1");
      } catch (e) {
        localStorage.setItem("step", "1");
        console.error("Error setting step in localStorage", e);
      }
    }
  }, []);

  return (
    <>
      {isClient ? (
        <FormProvider {...methods}>
          <div className="max-w-lg min-h-screen w-full h-full p-4 md:p-12 border-r border-dashed flex flex-col justify-between">
            <div>
              <Link href="/" className="flex gap-2 items-center">
                <Image
                  src="/images/shelfee.svg"
                  width={80}
                  height={80}
                  className="rounded-lg"
                  alt="logo"
                />
                {/* <div>
                  <p className="font-semibold">Shelfee</p>
                  <p className="text-brand-orange text-sm">By B</p>
                </div> */}
              </Link>
              <UserInputForm />
            </div>
            <FormSteps />
          </div>
          <div className="relative min-h-screen h-full w-full flex justify-center items-center p-4 md:p-0">
            <div className="absolute inset-0 -z-10 h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#33322C_1px,transparent_1px)] [background-size:16px_16px]"></div>
            <BookDataPreview />
          </div>
        </FormProvider>
      ) : (
        <div />
      )}
    </>
  );
};

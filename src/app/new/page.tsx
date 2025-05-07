import { NewBookForm } from "@/app/new/component/NewBookForm";
import { Suspense } from "react";

const Page = () => (
  <div className="min-h-screen overflow-y-auto h-full flex items-center md:flex-row flex-col-reverse">
    <Suspense>
      <NewBookForm />
    </Suspense>
  </div>
);

export default Page;

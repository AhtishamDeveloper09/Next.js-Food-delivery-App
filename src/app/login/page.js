import Image from "next/image";
import Link from "next/link";
import React from "react";

function LoginPage() {
  return (
    <div className="p-4 h-screen md:h-[calc(100vh-9rem)] flex flex-col items-center justify-center">
      {/* Box */}
      <div className="h-full md:h-[80%] flex flex-col md:flex-row shadow-2xl rounded-md md:w-full lg:w-[65%] 2xl:w-1/2">
        {/* Image */}
        <div className="relative h-1/3 w-full md:h-full md:w-1/2">
          <Image src="/loginBg.png" fill className="object-cover" alt="" />
        </div>
        {/* Form */}
        <div className="flex flex-col gap-4 md:gap-5 p-6 h-2/3 md:h-full md:w-1/2">
          <h1 className="font-bold text-xl lg:text-2xl">Welcome</h1>
          <p>Login to your account or create a new one using social buttons</p>
          <button className="flex gap-4 p-4 ring-1 ring-orange-100 items-center rounded-md">
            <Image src="/google.png" height={20} width={20} className="object-contain" alt="" />
            <span>Sign in with Google</span>
          </button>
          <button className="flex gap-4 p-4 ring-1 ring-blue-100 items-center rounded-md">
            <Image src="/facebook.png" height={20} width={20} className="object-contain" alt="" />
            <span>Sign in with Facebook</span>
          </button>
          <p className="text-sm">
            Have a problem? <Link className="underline" href="/">Contact us</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;

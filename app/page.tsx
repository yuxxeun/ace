"use client"

import { Spotlight } from '@/components/ui/Spotlight';
import React from "react";
import Demo from '@/components/Demo';

const Page = () => {
  return (
    <>
      <div className="h-[40rem] w-full rounded-md flex md:items-center md:justify-center bg-black/[0.96] antialiased bg-grid-white/[0.02] relative overflow-hidden">
        {/* Tambahkan konten lain yang Anda inginkan di sini */}
        <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
          <p className="mt-4 font-normal text-base text-neutral-300 max-w-lg text-center mx-auto">
          <Demo/>
          </p>
        </div>
      </div>
    </>
  );
};

export default Page;

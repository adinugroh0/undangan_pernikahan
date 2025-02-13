"use client";
import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function Coba() {
  const router = useRouter();
  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[url(/background.png)] bg-cover w-full h-screen gap-10 p-10">
        <div className="flex justify-center items-center ">
          <Image src="/judul.png" alt="Image" width={400} height={400} />{" "}
        </div>
        <div className="flex flex-col justify-center items-center font-poppins gap-20 ">
          <h1 className=" font-bold text-white text-center">
            Tanpa Mengurangi Rasa Hormat,
            <br /> Kami Mengundang
          </h1>
          <button
            onClick={() => router.push("/Utama")}
            className="relative px-8 py-3 font-bold text-[17px] rounded-lg overflow-hidden bg-[#66ff66] text-black transition-all duration-400 hover:text-white">
            <span className="relative z-10 transition-colors duration-400">
              BUKA UNDANGAN
            </span>
          </button>
        </div>
      </div>
    </>
  );
}

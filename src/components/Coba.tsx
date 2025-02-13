"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Coba() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [namaTamu, setNamaTamu] = useState("Tamu Undangan");

  useEffect(() => {
    const namaDariURL = searchParams.get("nama");
    if (namaDariURL) {
      setNamaTamu(namaDariURL);
    }
  }, [searchParams]);

  // Fungsi untuk memperbarui nama tamu di URL
  const handleNamaChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newNama = event.target.value;
    setNamaTamu(newNama);
    const currentUrl = new URL(window.location.href);
    currentUrl.searchParams.set("nama", newNama);
    router.push(currentUrl.toString(), { scroll: false });
  };

  return (
    <>
      <div className="flex flex-col justify-center items-center bg-[url(/background.png)] bg-cover w-full h-screen gap-10 p-10">
        {/* Gambar Header */}
        <div className="flex justify-center items-center ">
          <Image src="/judul.png" alt="Image" width={400} height={400} />
        </div>

        {/* Nama Tamu & Undangan */}
        <div className="flex flex-col justify-center items-center font-poppins gap-4">
          <h2 className="text-lg text-white text-center">Kepada Yth.</h2>

          {/* Input untuk Edit Nama */}
          <input
            type="text"
            value={namaTamu}
            onChange={handleNamaChange}
            className="text-center text-black font-bold text-xl border rounded-md px-4 py-2"
            placeholder="Masukkan Nama"
          />

          <h1 className="font-bold text-white text-center mt-4">
            Tanpa Mengurangi Rasa Hormat, Kami Mengundang
            <br /> Bapak/Ibu/Saudara/i untuk Hadir di Acara Kami.
          </h1>

          {/* Tombol Buka Undangan */}
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

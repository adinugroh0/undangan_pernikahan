"use client";
import { motion } from "framer-motion";
import React from "react";
import { ImagesSlider } from "@/components/ui/images-slider";
import Image from "next/image";
import Timer from "./Timer";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Musik from "./Musik";

export function ImagesSliderDemo() {
  const [isFlipped, setIsFlipped] = useState(false);
  const router = useRouter();
  const images = ["/1.jpg", "/2.jpg", "/3.jpg"];
  return (
    <>
      <Musik />
      <ImagesSlider className="h-screen" images={images}>
        <motion.div
          initial={{
            opacity: 1,
            y: -80,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          className="z-50 flex flex-col justify-center items-center">
          <div className="flex justify-center  -top-36">
            <Image
              src="/fotopernikahan.png"
              alt="Background Image"
              width={400}
              height={400}
              className="w-1/2 md:w-1/3"
            />
          </div>
          <motion.p className="font-bold text-xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
            Pernikahan
          </motion.p>
          <div className="flex justify-center  -top-36">
            <Image
              src="/judul.png"
              alt="Background Image"
              width={400}
              height={400}
              className="w-1/2 md:w-1/3"
            />
          </div>
          <Timer />
        </motion.div>
      </ImagesSlider>
      {/* doa*/}
      <div className="flex flex-col items-center bg-[url(/background.png)] bg-cover w-full min-h-screen bg-lime-300/40">
        <motion.div
          className="p-10 text-center max-w-2xl"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}>
          <p className="font-semibold text-white">
            Atas Rahmat Tuhan Yang Maha Esa, kami bermaksud menyelenggarakan
            Upacara Pernikahan. Merupakan suatu kehormatan dan kebahagiaan bagi
            kami sekeluarga, apabila Bapak/Ibu/Saudara/i berkenan hadir dan
            memberikan doa restu pada
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center "
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.5 }}>
          <Image
            src="/gambar2.png"
            alt="Background Image"
            width={400}
            height={400}
            className="w-1/2 md:w-1/3"
          />
        </motion.div>

        <motion.div
          className="flex flex-col justify-center items-center text-white pt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 1 }}>
          <p className="text-center italic">
            &quot;Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
            menciptakan pasangan-pasangan untukmu dari jenismu sendiri, agar
            kamu cenderung dan merasa tenteram kepadanya, dan Dia menjadikan di
            antaramu rasa kasih dan sayang. Sungguh, pada yang demikian itu
            benar-benar terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
            berpikir&quot;
          </p>
          <div className="flex justify-center pt-5 w-full h-full">
            <p className="flex justify-center rounded-md  bg-[#05624F] w-1/2 h-full">
              QS. Ar-Rum Ayat 21
            </p>
          </div>
        </motion.div>
      </div>
      {/* mempelai*/}
      <div className="flex flex-col items-center w-full bg-[url(/background.png)] bg-cover min-h-screen">
        {/* Pengantin Pria */}
        <motion.div
          className="flex justify-center items-center flex-col p-10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}>
          <div className="w-64 h-full backdrop-blur-sm rounded-[15px] p-4 border flex flex-col items-center">
            {/* Border Top */}
            <div className="w-[60%] h-[3%] bg-[#6b64f3] rounded-b-[15px]"></div>

            {/* Avatar Placeholder */}
            <div className="w-[70px] h-[80px] bg-[url(/mas.png)] bg-cover rounded-[15px] mt-[25px]"></div>

            {/* Nama */}
            <span className="font-semibold text-white text-center pt-2 text-[16px]">
              🤵 PENGANTIN PRIA
            </span>

            {/* Pekerjaan */}
            <span className="text-white text-center text-[12px] font-normal pt-1">
              Nama Lengkap : Dedy Setiyawan <br />
              Nama Panggilan : Dedy <br />
              Putra dari keluarga <br />
              Bapak Suyadi & Ibu Sri Agustina
            </span>
          </div>
        </motion.div>

        {/* Pengantin Wanita */}
        <motion.div
          className="flex justify-center items-center flex-col p-5"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1, delay: 0.3 }}>
          <div className="w-64 h-full backdrop-blur-sm rounded-[15px] border p-4 flex flex-col items-center">
            {/* Border Top */}
            <div className="w-[60%] h-[3%] bg-[#6b64f3] rounded-b-[15px]"></div>

            {/* Avatar Placeholder */}
            <div className="w-[70px] h-[80px] bg-[url(/mbak.png)] bg-cover rounded-[15px] mt-[25px]"></div>

            {/* Nama */}
            <span className="font-semibold text-white text-center pt-2 text-[16px]">
              👰 PENGANTIN WANITA
            </span>

            {/* Pekerjaan */}
            <span className="text-white text-center text-[12px] font-normal pt-1">
              Nama Lengkap : Sumi Adinda Valentina <br />
              Nama Panggilan : Sumi <br />
              Putri dari keluarga <br />
              Bapak Jumeri & Ibu Ningsih
            </span>
          </div>
        </motion.div>
      </div>
      {/* informasi tempat */}
      <div className="flex flex-col items-center justify-center bg-[url(/lokasi.png)] bg-cover w-full min-h-screen bg-lime-300/40">
        <motion.div
          className="flex flex-col justify-center items-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 1 }}>
          {/* Gambar Tanggal */}
          <motion.div
            className="flex justify-center items-center"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.3 }}>
            <Image
              src="/date.png"
              alt="Background Image"
              width={400}
              height={400}
              className="w-1/2 md:w-1/3"
            />
          </motion.div>

          <motion.div
            className="flex flex-col justify-center items-center w-80 border backdrop-blur-sm rounded-lg p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.6 }}>
            <div className="flex flex-col justify-center text-white items-center">
              <h1 className="font-bold text-2xl"> 💕 AKAD NIKAH 🤝🏻</h1>
              <div className="flex flex-col justify-center items-center pt-5">
                <h2>Sabtu, 22 Februari 2025</h2>
                <p>Pukul 08:00 Sampai Selesai</p>
              </div>
              <h2 className="text-center">
                Ngelo, Tegalwaton, Kec.Tengaran <br /> Kab. Semarang
              </h2>
            </div>
          </motion.div>

          {/* Tombol Lokasi */}
          <motion.div
            className="flex relative -top-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.9 }}>
            <button
              onClick={() =>
                router.push("https://maps.app.goo.gl/2GzPURKoiLeYbSDr5")
              }
              className="px-8 py-2 rounded-lg font-semibold bg-[#05624F] border-none font-inherit text-center text-white cursor-pointer transition duration-400 hover:shadow-[7px_5px_56px_-14px_#C3D900] active:scale-95 active:shadow-[7px_5px_56px_-10px_#C3D900]">
              Lokasi Acara
            </button>
          </motion.div>
          {/* Informasi Acara */}
          <motion.div
            className="flex flex-col justify-center items-center w-80 border backdrop-blur-sm rounded-lg p-10"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1, delay: 0.6 }}>
            <div className="flex flex-col justify-center text-white items-center">
              <h1 className="font-bold text-2xl">Resepsi Pernikahan</h1>
              <div className="flex flex-col justify-center items-center pt-5">
                <h2>Sabtu, 22 Februari 2025</h2>
                <p>Pukul 13:00 Sampai Selesai</p>
              </div>
              <h2 className="text-center">
                Ngelo, Tegalwaton, Kec.Tengaran <br /> Kab. Semarang
              </h2>
            </div>
          </motion.div>

          {/* Tombol Lokasi */}
          <motion.div
            className="flex relative -top-5"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, delay: 0.9 }}>
            <button
              onClick={() =>
                router.push("https://maps.app.goo.gl/2GzPURKoiLeYbSDr5")
              }
              className="px-8 py-2 rounded-lg font-semibold bg-[#05624F] border-none font-inherit text-center text-white cursor-pointer transition duration-400 hover:shadow-[7px_5px_56px_-14px_#C3D900] active:scale-95 active:shadow-[7px_5px_56px_-10px_#C3D900]">
              Lokasi Acara
            </button>
          </motion.div>
        </motion.div>
      </div>
      {/* card */}
      <div>
        <div className="flex flex-col justify-center items-center w-full h-screen bg-[url(/lokasi.png)] bg-cover p-10 gap-10">
          <Image
            src="/titip.png"
            alt="Background Image"
            width={400}
            height={400}
            className="w-1/2 md:w-1/3"
          />
          {/* Outer Container with 3D Perspective */}
          <div
            className="relative w-[240px] h-[154px] [perspective:1000px] text-white cursor-pointer"
            onMouseEnter={() => setIsFlipped(true)}
            onMouseLeave={() => setIsFlipped(false)}>
            {/* Inner Card Wrapper that rotates */}
            <div
              className={`absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                isFlipped ? "rotate-y-180" : ""
              }`}>
              {/* ---------------- FRONT SIDE ---------------- */}
              <div
                className="absolute w-full h-full bg-[#171717] shadow-lg rounded-xl
                       flex flex-col justify-center items-center
                       [backface-visibility:hidden]">
                {/* Bank Name */}
                <p className="absolute top-[10px] right-[10px] text-xs tracking-wide">
                  BNI
                </p>

                {/* Logo */}
                <div className="relative w-full h-full">
                  <svg
                    className="absolute top-[50px] right-[60px]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="36"
                    height="36"
                    viewBox="0 0 48 48">
                    <path
                      fill="#ff9800"
                      d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
                    <path
                      fill="#d50000"
                      d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
                    <path
                      fill="#ff3d00"
                      d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                  </svg>
                </div>

                {/* Chip */}
                <div className="absolute top-[15px] left-[15px] w-8 h-5 bg-gray-400 rounded-md"></div>

                {/* Contactless Icon */}
                <div className="absolute top-[30px] right-[20px] text-base">
                  📶
                </div>

                {/* Card Number */}
                <p className="absolute font-bold text-sm bottom-[50px] left-[15px]">
                  0827583389
                </p>

                {/* Expiration Date */}
                <p className="absolute font-bold text-xs bottom-[30px] left-[60px]">
                  12/24
                </p>

                {/* Name */}
                <p className="absolute font-bold text-xs bottom-[10px] left-[15px]">
                  DEDY SETIYAWAN
                </p>
              </div>
            </div>
          </div>
          <div>
            <div
              className="relative w-[240px] h-[154px] [perspective:1000px] text-white cursor-pointer"
              onMouseEnter={() => setIsFlipped(true)}
              onMouseLeave={() => setIsFlipped(false)}>
              {/* Inner Card Wrapper that rotates */}
              <div
                className={`absolute w-full h-full transition-transform duration-700 [transform-style:preserve-3d] ${
                  isFlipped ? "rotate-y-180" : ""
                }`}>
                {/* ---------------- FRONT SIDE ---------------- */}
                <div
                  className="absolute w-full h-full bg-[#171717] shadow-lg rounded-xl
                       flex flex-col justify-center items-center
                       [backface-visibility:hidden]">
                  {/* Bank Name */}
                  <p className="absolute top-[10px] right-[10px] text-xs tracking-wide">
                    DANA
                  </p>

                  {/* Logo */}
                  <div className="relative w-full h-full">
                    <svg
                      className="absolute top-[50px] right-[60px]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="36"
                      height="36"
                      viewBox="0 0 48 48">
                      <path
                        fill="#ff9800"
                        d="M32 10A14 14 0 1 0 32 38A14 14 0 1 0 32 10Z"></path>
                      <path
                        fill="#d50000"
                        d="M16 10A14 14 0 1 0 16 38A14 14 0 1 0 16 10Z"></path>
                      <path
                        fill="#ff3d00"
                        d="M18,24c0,4.755,2.376,8.95,6,11.48c3.624-2.53,6-6.725,6-11.48s-2.376-8.95-6-11.48 C20.376,15.05,18,19.245,18,24z"></path>
                    </svg>
                  </div>

                  {/* Chip */}
                  <div className="absolute top-[15px] left-[15px] w-8 h-5 bg-gray-400 rounded-md"></div>

                  {/* Contactless Icon */}
                  <div className="absolute top-[30px] right-[20px] text-base">
                    📶
                  </div>

                  {/* Card Number */}
                  <p className="absolute font-bold text-sm bottom-[50px] left-[15px]">
                    087780234135
                  </p>

                  {/* Expiration Date */}
                  <p className="absolute font-bold text-xs bottom-[30px] left-[60px]">
                    12/24
                  </p>

                  {/* Name */}
                  <p className="absolute font-bold text-xs bottom-[10px] left-[15px]">
                    DEDY SETIYAWAN
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default ImagesSliderDemo;

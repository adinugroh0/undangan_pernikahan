/* eslint-disable react-hooks/exhaustive-deps */
"use client";
import { useState, useEffect } from "react";

export default function CountdownTimer() {
  const targetDate = new Date("2025-02-22T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  function calculateTimeLeft() {
    const now = new Date().getTime();
    const difference = targetDate - now;

    if (difference <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      ),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000),
    };
  }

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center  text-white">
      <h1 className="text-3xl font-bold mb-4">22 Februari 2024</h1>
      <div className="flex space-x-4 text-4xl font-bold">
        <div className="p-4 backdrop-blur-sm rounded-lg text-center">
          <span>{timeLeft.days}</span>
          <p className="text-sm">Hari</p>
        </div>
        <div className="p-4 backdrop-blur-sm rounded-lg text-center">
          <span>{timeLeft.hours}</span>
          <p className="text-sm">Jam</p>
        </div>
        <div className="p-4 backdrop-blur-sm rounded-lg text-center">
          <span>{timeLeft.minutes}</span>
          <p className="text-sm">Menit</p>
        </div>
        <div className="p-4 backdrop-blur-sm rounded-lg text-center">
          <span>{timeLeft.seconds}</span>
          <p className="text-sm">Detik</p>
        </div>
      </div>
    </div>
  );
}

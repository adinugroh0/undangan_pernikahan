"use client";

import { useRef } from "react";

export default function FlipCardWithMusic() {
  const audioRef = useRef<HTMLAudioElement>(null);

  return (
    <div className="relative flex flex-col items-center justify-center  backdrop-blur-sm text-white">
      {/* Header */}

      {/* Musik Latar */}
      <audio ref={audioRef} autoPlay loop>
        <source src="/musik.mp3" type="audio/mp3" />
        Your browser does not support the audio element.
      </audio>
    </div>
  );
}

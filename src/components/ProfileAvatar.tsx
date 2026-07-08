"use client";

import Image from "next/image";
import { useState } from "react";

export default function ProfileAvatar() {
  const [hasPhoto, setHasPhoto] = useState(true);

  return (
    <div className="mx-auto mb-6 flex h-28 w-28 items-center justify-center overflow-hidden rounded-2xl border border-white/15 bg-slate-900/80 shadow-2xl shadow-cyan-950/30 lg:mx-0">
      {hasPhoto ? (
        <Image
          src="/profile-oguz.jpg"
          alt="Oguz Kaan Dere"
          width={112}
          height={112}
          className="h-full w-full object-cover"
          priority
          onError={() => setHasPhoto(false)}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(34,211,238,0.32),transparent_35%),linear-gradient(135deg,#0f172a,#111827_45%,#312e81)] text-3xl font-bold tracking-tight text-white">
          OKD
        </div>
      )}
    </div>
  );
}

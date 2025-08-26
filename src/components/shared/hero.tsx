'use client'

import { cn } from "@/lib/utils";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";

interface Props {
  className?: string;
}

export const Hero: React.FC<Props> = ({ className }) => {
  const images = ['/3.jpg'];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 7000);
    return () => clearInterval(interval);
  }, []);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.play().catch((err) => {
        console.error('Autoplay failed:', err);
      });
    }
  }, []);

  return (
    <section className={cn('relative w-full aspect-7/3 overflow-hidden flex flex-col items-center z-0', className)}>
      {images.map((src, index) => (
        <Image
          key={src}
          src={src}
          alt={`Hero Background ${index}`}
          fill
          priority
          className={cn(
            'absolute object-cover duration-500 ease-in-out',
            index === currentIndex ? 'opacity-100' : 'opacity-0')
          }
        />
      ))}
    </section>
  );
};

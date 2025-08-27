'use client'

import { cn } from "@/lib/utils";
import Image from 'next/image';
import { useEffect, useRef, useState } from "react";
import { Button } from "../ui/button";

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
    <section className={cn('relative w-full aspect-7/8 sm:aspect-7/6 md:aspect-7/4 lg:aspect-7/3 overflow-hidden flex flex-col items-center z-0', className)}>
      <div className="absolute w-full h-full bg-linear-to-t from-foreground/90 via-foreground/70 to-foreground/10 z-10" />
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
      <div className="absolute w-full z-10 p-4 max-w-2xl space-y-4 md:space-y-5 text-center top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-background">Lorem, ipsum dolor sit amet consectetur.</h1>
        <h3 className="text-background sm:text-lg xl:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem sit explicabo et commodi ipsum reprehenderit maiores.</h3>
        <div className="flex gap-2 justify-center">
          <Button variant={"secondary"}>About us</Button>
          <Button>Contact us</Button>
        </div>
      </div>
    </section>
  );
};

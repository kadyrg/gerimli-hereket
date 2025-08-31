'use client'

import { Carousel, CarouselContent, CarouselItem } from '@/components/ui/carousel';
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import React from "react"

const data = [
  {image: "/1.jpg"},
  {image: "/2.jpg"},
]

export function AboutCarousel() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  )

  return (
    <Carousel opts={{align: "start", loop: true}} plugins={[plugin.current]} className="rounded-xl max-w-5xl mx-auto overflow-hidden border-1">
      <CarouselContent>
        {data.map((item, index) => (
          <CarouselItem key={index}>
            <Image src={item.image} width={1500} height={0} className='w-full aspect-2/1 md:aspect-3/1 object-cover rounded-xl overflow-hidden' alt="image" />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
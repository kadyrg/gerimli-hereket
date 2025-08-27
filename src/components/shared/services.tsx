import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Image from 'next/image'

export function Services() {
  return (
    <section>
        <Carousel
          opts={{
            align: "start",
          }}
          className="w-full py-5"
        >
          <div className="px-3">
            <div className="flex w-full flex justify-between items-center max-w-7xl mx-auto">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold">Services</h1>
              <div className="flex gap-2">
                <CarouselPrevious className="static top-0 -left-0 -translate-y-0" />
                <CarouselNext className="static top-0 -right-0 -translate-y-0" />
              </div>
            </div>
          </div>
          <CarouselContent className="max-w-7xl mx-auto py-3 px-3 xl:px-0">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pl-0 pr-4 basis-4/7 sm:basis-3/7 md:basis-2/7 hover:scale-102 transition-[scale] duration-500">
                <div className="relative aspect-3/5 rounded-4xl overflow-hidden ">
                  <Image src={"/1.jpg"} width={400} height={800} alt={""} className="w-full h-full object-cover" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          
        </Carousel>
    </section>
  )
}

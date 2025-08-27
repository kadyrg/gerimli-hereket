import Image from 'next/image'
import { Button } from '../ui/button'

export function Partner() {
  return (
    <section className="px-3">
      <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 py-6 sm:py-7">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center max-w-xl mx-auto px-3 font-semibold">Your Logistics Partner for the Future</h1>
        <div className='group relative rounded-4xl aspect-5/5 sm:aspect-5/4 md:aspect-5/3 lg:aspect-2/1 overflow-hidden'>
          <Image src={'/1.jpg'} width={1920} height={1080} alt={'Partner'} className='object-cover h-full' />
          <div className='absolute z-10 top-0 right-0 p-6 flex flex-col gap-3 items-end sm:items-start max-w-3/4'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-background'>Service consulting</h1>
            <h2 className='text-right sm:text-left text-sm sm:text-base md:text-lg text-background font-semibold max-w-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
            <Button variant={"secondary"} className='rounded-full'>Contact us</Button>
          </div>
          <div className='absolute bottom-0 left-0 text-background p-10 hidden md:flex max-w-lg'>
            <h1 className='text-2xl sm:text-3xl md:text-4xl font-semibold text-background z-10'>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</h1>
          </div>
          <div className='h-full bg-radial-[at_50%_75%] from-transparent via-foreground/10 to-foreground/50 group-hover:from-foreground/20 group-hover:via-foreground/40 group-hover:to-foreground/70 transition-colors duration-500 absolute top-0 w-full' />
        </div>
      </div>
    </section>
  )
}
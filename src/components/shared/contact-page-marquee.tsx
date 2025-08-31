'use client';

import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/ui/shadcn-io/marquee';

export function ContactPageMarquee() {
  return (
    <div className='flex size-full items-center justify-center'>
      <Marquee>
        <MarqueeFade side="left" />
        <MarqueeFade side="right" />
        <MarqueeContent>
          {new Array(10).fill(null).map((_, index) => (
            <MarqueeItem className="h-32 w-32" key={index}>
              dfreghertgrw
            </MarqueeItem>
          ))}
        </MarqueeContent>
      </Marquee>
    </div>
  )
}

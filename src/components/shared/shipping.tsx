import Image from 'next/image'

const data = [
  {title: "Air shipping", image: '/air.jpg'},
  {title: "Sea shipping", image: '/ship.jpg'},
  {title: "Train shipping", image: '/train.jpeg'},
]

export function Shipping() {
  return (
    <section className="px-3">
      <div className="max-w-7xl mx-auto space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 py-6 sm:py-7">
        <h1 className="text-center text-3xl sm:text-4xl md:text-5xl px-3 font-semibold max-w-lg mx-auto">Shipping & Logistics Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-5">
          {data.map((item, index) => (
            <div
              key={index}
              className="relative aspect-7/8 hover:scale-102 rounded-4xl transition-[scale] duration-[0.3s] overflow-hidden"
            >
              <Image src={item.image} width={1000} height={1000} alt={item.title} className='object-cover h-full' />
              <span style={{ textShadow: "4px 4px 4px rgba(0,0,0,0.2)" }} className='absolute top-0 text-background font-bold text-3xl p-6'>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
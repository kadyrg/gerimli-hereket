import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export async function TransportServices() {
  const t = await getTranslations("HomePage");

  const data = [
    {title: t("airT"), image: '/airT.webp'},
    {title: t("seaT"), image: '/seaT.webp'},
    {title: t("railwayT"), image: '/railwayT.webp'},
    {title: t("roadT"), image: '/roadT.webp'},
  ]

  return (
    <section className="px-3">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 py-6 sm:py-7">
        <h1 className="text-center text-3xl sm:text-4xl px-3 font-semibold max-w-lg mx-auto">{t("transportServices")}</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
          {data.map((item, index) => (
            <div key={index} className="relative aspect-8/5 hover:scale-102 rounded-4xl transition-[scale] duration-[0.3s] overflow-hidden">
              <Image src={item.image} width={1000} height={1000} alt={item.title} className='object-cover h-full' />
              <span className='absolute top-0 text-gray-700 font-bold text-2xl p-6'>{item.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
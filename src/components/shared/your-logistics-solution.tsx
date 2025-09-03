import Image from 'next/image'
import { Button } from '../ui/button'
import { getTranslations } from 'next-intl/server'

export async function YourLogisticsSolution() {
  const t = await getTranslations("HomePage")

  return (
    <section className="px-3">
      <div className="max-w-6xl mx-auto space-y-5 sm:space-y-6 md:space-y-7 lg:space-y-8 xl:space-y-9 py-6 sm:py-7">
        <h1 className="text-3xl sm:text-4xl text-center max-w-xl mx-auto px-3 font-semibold">{t("yourLogisticsSolution")}</h1>
        <div className='group relative rounded-4xl aspect-5/5 sm:aspect-5/4 md:aspect-5/3 lg:aspect-2/1 overflow-hidden'>
          <Image src={'/partner.webp'} width={1920} height={1080} alt={'Partner'} className='object-cover h-full' />
          <div className='absolute z-10 top-0 right-0 p-6 flex flex-col gap-3 items-end'>
            <h1 className='text-2xl md:text-3xl font-bold text-gray-800'>{t("logisticsSolutionTitle")}</h1>
            <Button variant={"secondary"} className='rounded-full'>{t("contact")}</Button>
          </div>
          <div className='absolute bottom-0 left-0 text-background p-10 hidden md:flex max-w-md'>
            <h1 className='text-2xl sm:text-2xl md:text-3xl font-semibold text-background z-10'>{t("logisticsSolutionDescription")}</h1>
          </div>
        </div>
      </div>
    </section>
  )
}
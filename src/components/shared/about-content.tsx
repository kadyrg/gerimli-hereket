import { getTranslations } from 'next-intl/server'
import Image from 'next/image'

export async function AboutContent() {
  const t = await getTranslations("AboutPage")

  return (
    <section className="px-4 py-6">
      <div className="max-w-5xl p-4 mx-auto rounded-xl bg-background shadow-[0_0_20px_rgba(0,0,0,0.08)] space-y-4 md:space-y-8 md:p-10 xl:px-15">
        <h1 className="px-4 text-center font-semibold text-2xl md:text-3xl xl:text-4xl">
          {t("aboutContentTitle")}
        </h1>
        <div className='flex flex-col md:flex-row gap-4 items-center'>
          <h3 className="md:text-lg text-center md:text-left flex-1">
            {t("aboutContentDescription")}
          </h3>
          <Image src={'/6209999.jpg'} alt={''} width={200} height={100} className='flex-1 w-full' />
        </div>
      </div>
    </section>
  )
}

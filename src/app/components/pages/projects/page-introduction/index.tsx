import { Link } from '@/app/components/link'
import { SectionTitle } from '@/app/components/section-title'
import { HiArrowCircleLeft } from 'react-icons/hi'

export const PageIntroduction = () => {
  return (
    <section className="w-full h-[450px] lg:h-[630px] bg-hero-image bg-cover bg-center bg-no-repeat flex flex-col items-center justify-content px-2 py-32">
      <SectionTitle
        subtitle="projetos"
        title="Meus Projetos"
        className="text-center items-center [&>h3]:text-4xl"
      />
      <div className="flex flex-col items-center">
        <p className="text-gray-400 text-center max-w-[640px] my-6 text-sm sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          blanditiis fugiat nostrum enim explicabo vitae quae commodi dolorem
          neque exercitationem vero reiciendis sapiente nemo qui sequi odio
          deserunt, tempora cum!
        </p>
        <Link href="/">
          <HiArrowCircleLeft size={20} />
          Voltar para Home
        </Link>
      </div>
    </section>
  )
}

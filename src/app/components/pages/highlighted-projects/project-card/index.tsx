import { Link } from '@/app/components/link'
import { TechBadge } from '@/app/components/tech-badge'
import Image from 'next/image'
import { HiArrowNarrowRight } from 'react-icons/hi'

export const ProjectCard = () => {
  return (
    <div className="flex gap-6 lg:gap-12 flex-col lg:flex-row">
      <div className="w-full h-full">
        <Image
          width={420}
          height={304}
          src="/images/next-thumb.png"
          alt="thumbnail do projeto x"
          className="w-full h-[200px] sm:h-[300px] lg:w-[420px] lg:min-h-full  object-cover rounded-lg"
        />
      </div>
      <div>
        <h3 className="font-medium text-lg text-gray-50">BookWise</h3>
        <p className="text-gray-400 my-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis ea
          fugiat voluptatum voluptatem accusantium. Atque, sint error. Ipsa
          tenetur.
        </p>
        <div className="flex gap-x-2 gap-y-3 flex-wrap mb-8 lg:max-w-[350px]">
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
          <TechBadge name="Next.js" />
        </div>

        <Link href="/projects/book-wise">
          Ver projeto <HiArrowNarrowRight />
        </Link>
      </div>
    </div>
  )
}

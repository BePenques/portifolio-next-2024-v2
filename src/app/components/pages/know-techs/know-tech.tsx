import { ReactNode } from 'react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type KnowTechProps = {
  tech: {
    icon: ReactNode
    name: string
    startDate: string
  }
}

export const KnowTech = ({ tech }: KnowTechProps) => {
  return (
    <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
      <div className="flex items-center justify-between">
        <p className="font-medium">{tech.name}</p>
        {tech.icon}
      </div>
      <span>
        <p>
          {formatDistanceToNow(new Date(tech.startDate), {
            locale: ptBR,
            addSuffix: false,
          })}{' '}
          de experiência
        </p>
      </span>
    </div>
  )
}

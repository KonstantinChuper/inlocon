import React from 'react'
import InfiniteCards from './infinite-cards'
import GradientLine from './gradient-line'

export default function PartnersSection() {
  const partnerCards = [
    {
      imgUrl: 'db-logo.svg'
    },
    {
      imgUrl: 'Knauf.svg'
    },
    {
      imgUrl: 'Schindlerlogo.svg'
    },
    {
      imgUrl: 'Siemens-logo.svg'
    },
    {
      imgUrl: 'Strabag_SE_Logo_2008.svg'
    }
  ]

  return (
    <div className="py-20 max-w-7xl mx-auto px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl md:text-5xl font-extrabold text-primary mb-4">
          Branchenführer vertrauen uns
        </h2>
        <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
          Mehr als 500 Unternehmen vertrauen bereits auf unsere Lösungen für öffentliche
          Ausschreibungen und Geschäftskontakte
        </p>
      </div>
      <GradientLine />
      <div className="h-max rounded-md flex flex-col antialiased bg-white dark:bg-background dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <InfiniteCards items={partnerCards} />
      </div>
      <GradientLine />
    </div>
  )
}

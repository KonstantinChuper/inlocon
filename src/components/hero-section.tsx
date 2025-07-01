import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { MousePointerClick } from 'lucide-react'
import construction from '@/assets/construction.jpg'

export default function HeroSection() {
  return (
    <section className="mx-auto px-4 max-w-7xl py-36">
      <div className="flex items-center justify-center gap-4">
        <div>
          <h1 className="text-7xl font-bold mb-8 text-primary max-w-[400px]">
            Willkommen bei Inlocon
          </h1>
          <p className="text-xl">Öffentliche Ausschreibungen, Aufträge & Geschäftskontakte.</p>
          <p className="mb-12 text-xl">Alles aus einer Quelle!</p>
          <Button size="lg" className="text-white group">
            Jetzt starten
            <MousePointerClick className="text-secondary group-hover:text-primary transition-colors duration-200 ml-1 !w-6 !h-6" />
          </Button>
        </div>
        <Image src={construction} alt="Construction" height={400} />
      </div>
    </section>
  )
}

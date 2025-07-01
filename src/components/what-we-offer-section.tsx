import { Search, FileText, Filter, Target, FileCheck, Users, Star, Bell } from 'lucide-react'
import { Button } from './ui/button'
import { Phone } from 'lucide-react'

export default function WhatWeOfferSection() {
  return (
    <section className="bg-white py-20 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-5xl font-extrabold text-center mb-12 text-primary">
        Was bieten wir Ihnen?
      </h2>

      <div className="mb-16 mx-auto">
        <h3 className="text-3xl font-semibold mb-4 text-primary">Ausschreibungsrecherche</h3>
        <p className="text-gray-800 mb-6 text-lg leading-relaxed">
          Durch ein personalisiertes Suchprofil erhalten Sie für Sie zugeschnittene Informationen
          über Ausschreibungen und vergebene Aufträge.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-lg">
          <li className="flex items-start space-x-3">
            <Search className="text-secondary mt-1 w-6 h-6 flex-shrink-0" />
            <span>Individualisierte Suche nach geplanten Projekten und vergebenen Aufträgen</span>
          </li>
          <li className="flex items-start space-x-3">
            <FileText className="text-secondary mt-1 w-6 h-6 flex-shrink-0" />
            <span>Öffentliche Ausschreibungen VOB/VOL/VOF</span>
          </li>
          <li className="flex items-start space-x-3">
            <Filter className="text-secondary mt-1 w-6 h-6 flex-shrink-0" />
            <span>Private Ausschreibungen</span>
          </li>
          <li className="flex items-start space-x-3">
            <Target className="text-secondary mt-1 w-6 h-6 flex-shrink-0" />
            <span>Einfache Kontaktierung von Herstellern, Händlern und Subunternehmern</span>
          </li>
        </ul>
      </div>

      <div className="mb-16 mx-auto">
        <h3 className="text-3xl font-semibold mb-8 text-primary">
          Themengerechte Aufbereitung & Benachrichtigung bei neuen Projekten
        </h3>
        <p className="text-gray-700 mb-8 leading-relaxed text-xl max-w-4xl">
          Enorme Zeitersparnis – Sie sparen wertvolle Arbeitszeit und haben dadurch mehr Freiraum
          für andere Dinge, die Ihnen wichtig sind, z.B. durch:
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-gray-800 text-lg">
          <li className="flex items-start space-x-3">
            <FileCheck className="text-secondary mt-1 w-6 h-6 flex-shrink-0" />
            <span>Direkten Zugriff auf Vergabeunterlagen</span>
          </li>
          <li className="flex items-start space-x-3">
            <Users className="text-secondary mt-1 w-6 h-6 flex-shrink-0" />
            <span>Im Fokus von potenziellen Auftraggebern</span>
          </li>
          <li className="flex items-start space-x-3">
            <Star className="text-secondary mt-1 w-6 h-6 flex-shrink-0" />
            <span>Präsentation von beliebig vielen Referenzen</span>
          </li>
          <li className="flex items-start space-x-3">
            <Bell className="text-secondary mt-1 w-6 h-6 flex-shrink-0" />
            <span>Benachrichtigung bei neuen Projekten</span>
          </li>
        </ul>
      </div>

      <div className="mb-16 mx-auto border-l-4 border-primary pl-6">
        <h3 className="text-3xl font-semibold text-primary mb-6">Hoher Detaillierungsgrad</h3>
        <p className="text-gray-700 mb-4 text-lg leading-relaxed">
          Wir recherchieren Ausschreibungen in beispielloser Präzision mit einzigartigem
          3-Wege-Filter für Sie.
        </p>
        <ul className="list-disc list-inside text-gray-700 text-lg space-y-2">
          <li>aus ca. 8000 Gewerkeprofilen</li>
          <li>eigene Keywords im Bekanntmachungstext und im Leistungsverzeichnis</li>
          <li>100 % Trefferquote für Ihren Erfolg</li>
        </ul>
      </div>

      <div className='text-center'>
        <Button size="lg" className="text-background group">
          Jetzt anfragen
          <Phone className="text-secondary group-hover:text-primary transition-colors duration-200 ml-1 !w-6 !h-6" />
        </Button>
      </div>
    </section>
  )
}

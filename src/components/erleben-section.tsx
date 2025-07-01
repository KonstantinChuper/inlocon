import React from 'react'

export default function ErlebenSection() {
  return (
    <div className="bg-primary w-full mx-auto bg-[url('/bg1.jpg')] bg-cover bg-no-repeat bg-right py-12 text-background">
      <h2 className="text-6xl font-bold pt-8 md:pt-20 text-center px-4">
        Was Unternehmen ohne Inlocon erleben
      </h2>

      <div className="hidden md:flex flex-row justify-center items-center py-8 relative h-[450px]">
        <div
          className="min-h-[340px] h-auto w-[35%] absolute backdrop-blur-xs bg-black/30 left-0 text-center"
          style={{ clipPath: 'polygon(0 0, 100% 0, 77% 100%, 0 100%)' }}
        >
          <div className="p-6 pr-26 pl-10 flex flex-col items-center h-full">
            <div className="px-10 py-6 rounded-full border border-secondary text-5xl font-medium">
              1
            </div>
            <h3 className="font-semibold text-2xl pt-6">
              Tausende Aufträge – aber keine Übersicht
            </h3>
            <p className="max-w-md pt-4 text-xl">
              Täglich erscheinen hunderte neue Ausschreibungen – doch die relevanten zu finden, ist mühsam und zeitraubend.
            </p>
          </div>
        </div>
        <div
          className="min-h-[340px] h-auto w-[45%] absolute backdrop-blur-xs bg-black/30 text-center"
          style={{ clipPath: 'polygon(18% 0, 100% 0, 82% 100%, 0 100%)' }}
        >
          <div className="py-6 px-26 flex flex-col items-center h-full">
            <div className="px-9 py-6 rounded-full border border-secondary text-5xl font-medium">
              2
            </div>
            <h3 className="font-semibold text-2xl pt-6">Wichtige Projekte werden übersehen</h3>
            <p className="max-w-md pt-4 text-xl">
              Ohne klare Struktur und Filter gehen viele passende Aufträge einfach unter – und
              bleiben unentdeckt.
            </p>
          </div>
        </div>
        <div
          className="min-h-[340px] h-auto w-[35%] bg-black/30 backdrop-blur-xs absolute right-0"
          style={{ clipPath: 'polygon(23% 0, 100% 0, 100% 100%, 0 100%)' }}
        >
          <div className="p-6 pl-22 pr-10 flex flex-col items-center h-full text-center">
            <div className="px-9 py-6 rounded-full border border-secondary text-5xl font-medium">
              3
            </div>
            <h3 className="font-semibold text-2xl pt-6">Hoher Zeitaufwand bei der Recherche</h3>
            <p className="max-w-md pt-4 text-xl">
              Stundenlanges Durchforsten von Plattformen und PDFs gehört für viele Unternehmen zum Alltag.
            </p>
          </div>
        </div>
      </div>

      <div className="md:hidden flex flex-col space-y-6 px-4 py-8">
        <div className="bg-black/30 backdrop-blur-xs rounded-lg p-6">
          <div className="flex flex-col items-center text-center">
            <div className="px-6 py-3 rounded-full border border-secondary text-3xl font-medium">
              1
            </div>
            <h3 className="font-semibold text-xl pt-4">Ausschreibungsrecherche</h3>
            <p className="pt-3 text-base">
              Durch ein personalisiertes Suchprofil erhalten Sie für Sie zugeschnittene
              Informationen über Ausschreibungen und vergebene Aufträge.
            </p>
          </div>
        </div>
        <div className="bg-black/30 backdrop-blur-xs rounded-lg p-6">
          <div className="flex flex-col items-center text-center">
            <div className="px-6 py-3 rounded-full border border-secondary text-3xl font-medium">
              2
            </div>
            <h3 className="font-semibold text-xl pt-4">Hoher Detaillierungsgrad</h3>
            <p className="pt-3 text-base">
              Wir recherchieren Ausschreibungen in beispielloser Präzision mit einzigartigem
              3-Wege-Filter für Sie.
            </p>
          </div>
        </div>
        <div className="bg-black/30 backdrop-blur-xs rounded-lg p-6">
          <div className="flex flex-col items-center text-center">
            <div className="px-6 py-3 rounded-full border border-secondary text-3xl font-medium">
              3
            </div>
            <h3 className="font-semibold text-xl pt-4">Ausschreibungsrecherche</h3>
            <p className="pt-3 text-base">
              Durch ein personalisiertes Suchprofil erhalten Sie für Sie zugeschnittene
              Informationen über Ausschreibungen und vergebene Aufträge.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

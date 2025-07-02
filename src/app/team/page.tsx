import React from 'react'
import { Github, Mail, Phone, ExternalLink } from 'lucide-react'

export default function TeamPage() {
  return (
    <div className="max-w-4xl mx-auto p-8 md:p-12">
      <div className="space-y-8">
        <header className="text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Über dieses Projekt</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto"></div>
        </header>

        <div className="prose prose-lg max-w-none">
          <section className="bg-gray-50 rounded-lg p-6 mb-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">🚀 Direkter Code-Ansatz</h2>
            <p className="text-gray-700 leading-relaxed">
              Da ich Webentwickler bin, habe ich mich entschieden, die Landingpage direkt in Code
              umzusetzen, anstatt zunächst ein Design in Figma zu erstellen. So konnte ich meine
              Ideen sofort realisieren und die Zeit effizienter nutzen.
            </p>
            <p className="text-gray-600 text-sm mt-3">
              Ein Figma-Prototyp wäre natürlich ebenfalls möglich gewesen, war in diesem Fall aber
              nicht notwendig.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-gray-800 mb-6">🎯 Besondere Fokuspunkte</h2>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 border-l-4 border-primary p-4 rounded-r-lg">
                <h3 className="font-semibold text-primary mb-2">Markenidentität</h3>
                <p className="text-gray-700 text-sm">
                  Verwendung der Inlocon-Farben (Blau und Hellgrün) zur Wahrung der Markenidentität
                </p>
              </div>

              <div className="bg-green-50 border-l-4 border-secondary p-4 rounded-r-lg">
                <h3 className="font-semibold text-secondary mb-2">Visuelle Hierarchie</h3>
                <p className="text-gray-700 text-sm">
                  Klare visuelle Hierarchie und aufgeräumte Struktur zur besseren Orientierung der
                  Nutzer
                </p>
              </div>

              <div className="bg-purple-50 border-l-4 border-purple-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-purple-600 mb-2">Call-to-Action</h3>
                <p className="text-gray-700 text-sm">
                  Strategisch platzierte Call-to-Action-Elemente, um die Conversion zu fördern
                </p>
              </div>

              <div className="bg-orange-50 border-l-4 border-orange-500 p-4 rounded-r-lg">
                <h3 className="font-semibold text-orange-600 mb-2">Nutzererlebnis</h3>
                <p className="text-gray-700 text-sm">
                  Lesbare Typografie und stimmige Abstände für ein angenehmes Nutzererlebnis
                </p>
              </div>
            </div>
          </section>

          <section className="bg-gradient-to-r from-primary/5 to-secondary/5 rounded-lg p-6 mt-8">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📝 Content-Strategie</h2>
            <p className="text-gray-700 leading-relaxed">
              Inhalte der bestehenden Website wurden gezielt gestrafft und sinnvoll neu gruppiert,
              um die wichtigsten Informationen hervorzuheben. Ich habe mich dabei am realen Content
              orientiert und eine Landingpage aufgebaut, die nicht nur informativ, sondern auch
              handlungsorientiert ist.
            </p>
          </section>

          <section className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm my-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
              <Github className="w-6 h-6 mr-2" />
              GitHub Repository
            </h2>
            <p className="text-gray-700 mb-4">
              Der vollständige Quellcode dieser Landingpage ist öffentlich auf GitHub verfügbar:
            </p>
            <a
              href="https://github.com/KonstantinChuper/inlocon"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-gray-900 text-white px-4 py-2 rounded-lg hover:bg-gray-800 transition-colors"
            >
              <Github className="w-4 h-4 mr-2" />
              Repository ansehen
              <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </section>

          {/* Kontakt Sektion */}
          <section className="bg-gradient-to-r from-blue-50 to-green-50 rounded-lg p-6 border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">📞 Kontakt</h2>
            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center mr-3">
                  <span className="text-lg font-semibold text-primary">KC</span>
                </div>
                <div>
                  <p className="font-semibold">Kostiantyn Chuper</p>
                  <p className="text-sm text-gray-600">Frontend Developer</p>
                </div>
              </div>

              <div className="flex items-center text-gray-700 ml-13">
                <Mail className="w-4 h-4 mr-2 text-primary" />
                <a
                  href="mailto:konstantyn.chuper@gmail.com"
                  className="hover:text-primary transition-colors"
                >
                  konstantyn.chuper@gmail.com
                </a>
              </div>

              <div className="flex items-center text-gray-700 ml-13">
                <Phone className="w-4 h-4 mr-2 text-primary" />
                <a href="tel:+4916095002249" className="hover:text-primary transition-colors">
                  +49 160 95002249
                </a>
              </div>
            </div>
          </section>

          <footer className="text-center mt-12 p-6 border-t border-gray-200">
            <p className="text-gray-600 italic">
              &ldquo;Eine effektive Landingpage verbindet Information mit Aktion&rdquo;
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

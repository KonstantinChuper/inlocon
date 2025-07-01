import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Facebook, Twitter, Linkedin, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react'
import logo from '@/assets/logo.png'

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-background">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          <div className="lg:col-span-2">
            <Image src={logo} alt="Inlocon Logo" width={150} height={120} className="mb-4" />
            <p className="text-gray-300 mb-6 max-w-md">
              Ihr vertrauensvoller Partner für öffentliche Ausschreibungen, Aufträge und
              Geschäftskontakte. Mehr als 500 Unternehmen vertrauen bereits auf unsere Lösungen.
            </p>
            <div className="space-y-2">
              <div className="flex items-center text-gray-300">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Musterstraße 123, 10115 Berlin</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Phone className="w-4 h-4 mr-2" />
                <span>+49 (0) 30 12345678</span>
              </div>
              <div className="flex items-center text-gray-300">
                <Mail className="w-4 h-4 mr-2" />
                <span>info@inlocon.de</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Unternehmen</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Über uns
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Karriere
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Presse
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Partner
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-300 hover:text-white transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Folgen Sie uns</h3>
            <div className="flex flex-col space-y-3">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-400 transition-colors group"
              >
                <Facebook className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>Facebook</span>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-blue-600 transition-colors group"
              >
                <Linkedin className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>LinkedIn</span>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-sky-400 transition-colors group"
              >
                <Twitter className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>Twitter</span>
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-pink-400 transition-colors group"
              >
                <Instagram className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>Instagram</span>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-gray-300 hover:text-red-500 transition-colors group"
              >
                <Youtube className="w-5 h-5 mr-3 group-hover:scale-110 transition-transform" />
                <span>YouTube</span>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Datenschutz
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Impressum
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                AGB
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">
                Cookie-Einstellungen
              </a>
            </div>
            <p className="text-gray-400 text-sm">© 2024 Inlocon. Alle Rechte vorbehalten.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

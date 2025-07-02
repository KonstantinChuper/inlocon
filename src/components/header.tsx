import Image from 'next/image'
import logo from '@/assets/logo.png'
import { Button } from '@/components/ui/button'
import GradientLine from './gradient-line'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-background">
      <div className="p-6">
        <div className="w-full flex items-center justify-between">
          <div className="flex items-center gap-14">
            <Image src={logo} alt="Logo" width={120} height={100} />
            <nav className="flex gap-4 text-xl text-primary">
              <li>
                <Link href="/" className="hover:underline underline-offset-4">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:underline underline-offset-4">
                  Über uns
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:underline underline-offset-4">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:underline underline-offset-4">
                  Kontakt
                </Link>
              </li>
              <li>
                <Link href="/portale" className="hover:underline underline-offset-4">
                  Portale
                </Link>
              </li>
            </nav>
          </div>
          <div>
            <Link href="/team" target="_blank" rel="noopener noreferrer">
              <Button variant="link">Für das Inlocon-Team: Beschreibung der Aufgabenlösung</Button>
            </Link>
            <Button variant="outline" className="mr-4">
              Anmelden
            </Button>
            <Button className="uppercase">Jetzt testen</Button>
          </div>
        </div>
      </div>
      <GradientLine />
    </header>
  )
}

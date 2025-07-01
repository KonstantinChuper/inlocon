import { Phone, User } from 'lucide-react'
import { Button } from './ui/button'

const testimonials = [
  {
    name: 'Anna Müller',
    company: 'Baukonzept GmbH',
    quote:
      'Dank Inlocon sparen wir jeden Monat viele Stunden bei der Projektrecherche. Die Treffer sind extrem relevant.'
  },
  {
    name: 'Thomas Schneider',
    company: 'Planwerk AG',
    quote:
      'Wir erhalten genau die Ausschreibungen, die zu uns passen. Der Filter spart unglaublich viel Zeit.'
  },
  {
    name: 'Sabine Köhler',
    company: 'Köhler & Partner',
    quote:
      'Inlocon hat unsere Effizienz deutlich gesteigert – wir verpassen keine wichtigen Aufträge mehr.'
  }
]

export default function TestimonialsSection() {
  return (
    <section className="bg-white py-5 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-primary mb-12">Was unsere Kunden sagen</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="bg-gray-50 p-6 rounded-2xl shadow-md flex flex-col items-start space-y-4"
          >
            <User className="text-secondary w-8 h-8" />
            <p className="text-gray-700 italic">„{t.quote}“</p>
            <div>
              <p className="font-semibold text-gray-900">{t.name}</p>
              <p className="text-sm text-gray-500">{t.company}</p>
            </div>
          </div>
        ))}
      </div>

      <Button size="lg" className="text-background group mt-10">
        Kostenlose Beratung
        <Phone className="text-secondary group-hover:text-primary transition-colors duration-200 ml-1 !w-6 !h-6" />
      </Button>
    </section>
  )
}

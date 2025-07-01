export default function StatsSection() {
  const stats = [
    { label: 'Ausschreibungen', value: '2,620,000' },
    { label: 'Leistungsverzeichnisse', value: '684,000' },
    { label: 'Auftragsvergaben', value: '354,000' },
    { label: 'Auftragnehmer', value: '82,000' },
    { label: 'Gewerke', value: '8,000' },
    { label: 'Jahre an Erfahrung', value: '24' }
  ]

  return (
    <section className="bg-gradient-to-br from-green-50 via-green-100 to-white py-20 px-6 md:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold text-primary mb-4">
          In Zahlen beeindruckend
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Seit über zwei Jahrzehnten analysieren wir täglich neue Aufträge und bereiten sie
          themengerecht für Sie auf.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center">
          {stats.map((stat, idx) => (
            <div key={idx} className="flex flex-col items-center">
              <span className="text-3xl font-bold text-secondary">{stat.value}</span>
              <span className="text-gray-600 mt-1 text-lg">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

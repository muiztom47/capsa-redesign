const items = [
  { title: 'Encryption', body: 'Data encrypted at rest and in transit with independently audited key management.' },
  { title: 'Access control', body: 'Role-based permissions down to the deal level, with a full audit trail of every view and edit.' },
  { title: 'Compliance', body: 'SOC 2 Type II audited annually. Reports available under NDA to prospective customers.' },
  { title: 'Data residency', body: 'Configurable regional hosting for firms with jurisdiction-specific data requirements.' },
]

export default function Security() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="text-sm text-accent mb-3">Security</p>
      <h1 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
        Built to the standard your compliance team already holds you to.
      </h1>
      <p className="mt-6 text-muted max-w-xl leading-relaxed">
        Capsa handles data rooms, cap tables, and diligence materials your firm couldn't
        afford to expose. Security isn't a feature here — it's the starting constraint.
      </p>

      <div className="mt-20 grid sm:grid-cols-2 gap-x-12 gap-y-12">
        {items.map((item) => (
          <div key={item.title} className="border-t border-line pt-6">
            <h2 className="text-lg text-paper mb-2">{item.title}</h2>
            <p className="text-muted leading-relaxed">{item.body}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

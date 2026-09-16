const modules = [
  {
    name: 'Sourcing',
    body: 'Centralize inbound and outbound deal flow, score it against your live mandates, and route it to the right partner automatically.',
  },
  {
    name: 'Underwriting',
    body: 'Turn a data room into a first-pass memo in your own template, with every figure traceable back to its source document.',
  },
  {
    name: 'Portfolio monitoring',
    body: 'Track covenants, KPIs, and reporting cadence across every holding from a single view, with alerts before issues reach the board.',
  },
]

export default function Product() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="text-sm text-accent mb-3">Product</p>
      <h1 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
        Three parts of the deal lifecycle, one system of record.
      </h1>
      <p className="mt-6 text-muted max-w-xl leading-relaxed">
        Most firms run sourcing, underwriting, and monitoring in three disconnected tools.
        Capsa keeps them in one workspace, so context never gets lost between stages.
      </p>

      <div className="mt-20 space-y-16">
        {modules.map((m, i) => (
          <div key={m.name} className="grid md:grid-cols-[auto_1fr] gap-6 md:gap-16 border-t border-line pt-10">
            <span className="text-muted text-sm">{String(i + 1).padStart(2, '0')}</span>
            <div className="max-w-2xl">
              <h2 className="font-serif text-2xl mb-3">{m.name}</h2>
              <p className="text-muted leading-relaxed">{m.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

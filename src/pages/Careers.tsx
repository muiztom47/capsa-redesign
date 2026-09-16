const roles = [
  { title: 'Senior Product Engineer', team: 'Engineering', location: 'Remote (US/EU)' },
  { title: 'Credit Analyst, Product', team: 'Product', location: 'New York' },
  { title: 'Product Designer', team: 'Design', location: 'Remote (US/EU)' },
]

export default function Careers() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="text-sm text-accent mb-3">Careers</p>
      <h1 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl">Help investment teams spend less time on data entry.</h1>
      <p className="mt-6 text-muted max-w-xl leading-relaxed">
        Small team, direct customer contact, and a product where every improvement has a
        visible effect on how a deal gets underwritten.
      </p>

      <div className="mt-16 max-w-2xl divide-y divide-line">
        {roles.map((role) => (
          <div key={role.title} className="py-6 flex items-center justify-between gap-6">
            <div>
              <h2 className="text-lg text-paper">{role.title}</h2>
              <p className="text-sm text-muted mt-1">{role.team}</p>
            </div>
            <span className="text-sm text-muted whitespace-nowrap">{role.location}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

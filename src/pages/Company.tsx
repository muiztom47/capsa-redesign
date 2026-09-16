export default function Company() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28">
      <p className="text-sm text-accent mb-3">Company</p>
      <h1 className="font-serif text-4xl md:text-5xl leading-tight max-w-2xl">
        We build for the way investment teams actually work, not how software vendors imagine it.
      </h1>
      <div className="mt-14 grid md:grid-cols-2 gap-16">
        <p className="text-muted leading-relaxed max-w-md">
          Capsa was started by operators who spent years underwriting deals by hand — stitching
          together spreadsheets, data rooms, and half-finished CRM records. The product exists
          because that process should never have taken as long as it did.
        </p>
        <p className="text-muted leading-relaxed max-w-md">
          Today the team is spread across engineering, credit and equity research, and design,
          working directly with the investment teams using the product every day.
        </p>
      </div>

      <div className="mt-20 border-t border-line pt-10 grid sm:grid-cols-3 gap-10">
        <div>
          <p className="font-serif text-3xl">2023</p>
          <p className="mt-2 text-sm text-muted">Founded</p>
        </div>
        <div>
          <p className="font-serif text-3xl">38</p>
          <p className="mt-2 text-sm text-muted">People on the team</p>
        </div>
        <div>
          <p className="font-serif text-3xl">$18M</p>
          <p className="mt-2 text-sm text-muted">Series A raised</p>
        </div>
      </div>
    </div>
  )
}

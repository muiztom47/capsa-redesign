export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20 md:py-28 grid lg:grid-cols-2 gap-16">
      <div>
        <p className="text-sm text-accent mb-3">Contact</p>
        <h1 className="font-serif text-4xl md:text-5xl leading-tight max-w-md">
          Bring a live deal. We'll show you Capsa on it.
        </h1>
        <p className="mt-6 text-muted max-w-md leading-relaxed">
          Tell us a bit about your team and we'll set up a working session, not a slide deck.
        </p>
      </div>

      <form className="space-y-5 max-w-md" onSubmit={(e) => e.preventDefault()}>
        <div>
          <label htmlFor="name" className="block text-sm text-muted mb-2">Full name</label>
          <input
            id="name"
            type="text"
            className="w-full bg-panel border border-line rounded-sm px-4 py-3 text-paper placeholder:text-muted focus:outline-none focus:border-accent"
            placeholder="Jane Doe"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm text-muted mb-2">Work email</label>
          <input
            id="email"
            type="email"
            className="w-full bg-panel border border-line rounded-sm px-4 py-3 text-paper placeholder:text-muted focus:outline-none focus:border-accent"
            placeholder="jane@firm.com"
          />
        </div>
        <div>
          <label htmlFor="firm" className="block text-sm text-muted mb-2">Firm</label>
          <input
            id="firm"
            type="text"
            className="w-full bg-panel border border-line rounded-sm px-4 py-3 text-paper placeholder:text-muted focus:outline-none focus:border-accent"
            placeholder="Firm name"
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm text-muted mb-2">What are you underwriting right now?</label>
          <textarea
            id="message"
            rows={4}
            className="w-full bg-panel border border-line rounded-sm px-4 py-3 text-paper placeholder:text-muted focus:outline-none focus:border-accent"
            placeholder="A word or two on the deal type is enough"
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center rounded-sm bg-accent px-6 py-3.5 text-[15px] font-medium hover:bg-[#3457FF] transition-colors"
        >
          Request a demo
        </button>
      </form>
    </div>
  )
}

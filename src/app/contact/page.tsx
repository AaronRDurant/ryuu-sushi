export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 pt-24 pb-20 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-heading mb-6">Contact Ryuu</h1>

      <p className="text-lg text-white/80 font-sans mb-8 leading-relaxed">
        Visit us in the heart of Grosse Pointe for fresh, artfully crafted sushi
        and Japanese cuisine. Whether you’re planning a night out or just
        looking for something unforgettable, we’d love to hear from you.
      </p>

      <div className="text-white/90 space-y-6 font-sans text-base md:text-lg">
        <div>
          <p className="font-semibold uppercase text-sm tracking-wide text-white/60 mb-1">
            Address
          </p>
          <p>
            17051 Kercheval Ave
            <br />
            Grosse Pointe, MI
          </p>
        </div>

        <div>
          <p className="font-semibold uppercase text-sm tracking-wide text-white/60 mb-1">
            Phone
          </p>
          <a href="tel:13133325230" className="hover:underline">
            (313) 332-5230
          </a>
        </div>

        <div>
          <p className="font-semibold uppercase text-sm tracking-wide text-white/60 mb-1">
            Email
          </p>
          <a
            href="mailto:ryuusushilounge@gmail.com"
            className="hover:underline"
          >
            ryuusushilounge@gmail.com
          </a>
        </div>

        <div>
          <p className="font-semibold uppercase text-sm tracking-wide text-white/60 mb-1">
            Tag Us
          </p>
          <p>#RyuuSushiGP</p>
        </div>
      </div>
    </main>
  );
}

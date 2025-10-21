export default function ContactPage() {
  return (
    <main className="min-h-screen px-4 pt-24 pb-20 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-heading mb-6">Contact Ryuu</h1>

      <p className="text-lg text-white/80 font-sans mb-8 leading-relaxed">
        Questions, feedback, or special requests? Send us a note and we’ll get
        back to you. For addresses, phones, hours, and reservations, visit our{" "}
        <a href="/locations" className="underline hover:text-white">
          Locations
        </a>{" "}
        page.
      </p>

      <div className="text-white/90 space-y-8 font-sans text-base md:text-lg">
        {/* Email */}
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
      </div>
    </main>
  );
}

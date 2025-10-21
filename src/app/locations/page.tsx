export default function LocationsPage() {
  return (
    <main className="min-h-screen px-4 pt-24 pb-20 max-w-2xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-heading mb-6">Ryuu Locations</h1>

      <p className="text-lg text-white/80 font-sans mb-8 leading-relaxed">
        Two locations. One unforgettable sushi experience.
        <br className="hidden md:inline" /> Visit Ryuu Sushi Lounge in Grosse
        Pointe or our new location in downtown Plymouth.
      </p>

      <div className="text-white/90 space-y-12 font-sans text-base md:text-lg text-left">
        {/* Grosse Pointe */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Grosse Pointe</h2>

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
            <a href="tel:13134169083" className="hover:underline">
              (313) 416-9083
            </a>
          </div>

          <div>
            <p className="font-semibold uppercase text-sm tracking-wide text-white/60 mb-1">
              Hours
            </p>
            <p>Tuesday – Sunday: 4–10 pm</p>
          </div>

          <div>
            <p className="font-semibold uppercase text-sm tracking-wide text-white/60 mb-1">
              Reservations
            </p>
            <a
              href="https://www.opentable.com/r/ryuu-sushi-reservations-grosse-pointe?restref=1457776&lang=en-US&ot_source=Restaurant%20website"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold text-sm px-4 py-2 rounded-md mt-1"
            >
              Reserve on OpenTable
            </a>
          </div>
        </div>

        {/* Plymouth */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-white">Plymouth</h2>

          <div>
            <p className="font-semibold uppercase text-sm tracking-wide text-white/60 mb-1">
              Address
            </p>
            <p>
              340 N. Main St
              <br />
              Plymouth, MI
            </p>
          </div>

          <div>
            <p className="font-semibold uppercase text-sm tracking-wide text-white/60 mb-1">
              Hours
            </p>
            <p>
              Tue–Thu &amp; Sun: 4–10 pm
              <br />
              Fri–Sat: 4–11 pm
            </p>
          </div>
        </div>

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

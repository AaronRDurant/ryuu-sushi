import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Visit Ryuu Sushi Lounge in downtown Plymouth. Open daily 4–10 pm. Address, email, and contact.",
};

export default function ContactPage() {
  return (
    <main
      id="main"
      className="min-h-screen px-4 pt-24 pb-20 max-w-2xl mx-auto text-center"
    >
      <h1 className="text-4xl md:text-5xl font-heading mb-6">Contact</h1>

      <p className="text-lg text-white/80 font-sans mb-10 leading-relaxed">
        Visit us in downtown Plymouth or send a note. We&apos;d love to hear
        from you.
      </p>

      <div className="text-white/90 space-y-10 font-sans text-base md:text-lg text-left">
        <section className="space-y-4">
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
            <p>Daily: 4–10 pm</p>
          </div>
        </section>

        <section className="space-y-2 pt-4 border-t border-white/10">
          <p className="font-semibold uppercase text-sm tracking-wide text-white/60 mb-1">
            Email
          </p>
          <a
            href="mailto:ryuusushilounge@gmail.com"
            className="text-white hover:underline inline-block"
          >
            ryuusushilounge@gmail.com
          </a>
          <p className="text-white/70 text-sm mt-2">
            Questions, reservations, or special requests — we&apos;ll get back
            to you.
          </p>
        </section>
      </div>
    </main>
  );
}

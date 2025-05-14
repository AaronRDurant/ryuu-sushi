import Link from "next/link";

export default function MenuHighlight() {
  return (
    <section className="relative h-96 w-full border-y border-white/10 shadow-inner overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat bg-fixed"
        style={{ backgroundImage: "url('/images/Ryuu-Sushi-menu.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-wider mb-4 drop-shadow-md">
          Explore Our Menu
        </h2>
        <Link
          href="/menu"
          className="bg-white text-black px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-neutral-200 transition font-heading"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
}

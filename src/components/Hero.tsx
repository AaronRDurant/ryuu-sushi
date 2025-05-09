import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/hero-placeholder.jpg"
        alt="Sushi Platter"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-6 py-24 sm:py-32">
        <h1 className="text-4xl md:text-6xl font-heading font-semibold mb-4 drop-shadow-sm">
          A Modern Sushi Experience
        </h1>
        <p className="text-lg md:text-xl text-white/70 max-w-xl mb-6 leading-relaxed font-sans">
          Premium ingredients, artistic presentation, and unforgettable flavor.
        </p>
        <Link
          href="/menu"
          className="bg-white text-black px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-neutral-200 transition-all duration-200 font-heading"
        >
          View Menu
        </Link>
      </div>
    </section>
  );
}

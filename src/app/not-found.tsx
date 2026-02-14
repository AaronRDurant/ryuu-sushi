import Link from "next/link";

export default function NotFound() {
  return (
    <main
      id="main"
      className="min-h-screen px-4 pt-32 pb-20 flex flex-col items-center justify-center text-center"
    >
      <h1 className="text-4xl md:text-6xl font-heading font-semibold mb-4 uppercase tracking-wide">
        Page not found
      </h1>
      <p className="text-white/70 text-lg mb-8 max-w-md font-sans">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link
        href="/"
        className="bg-white text-black px-6 py-3 rounded-full text-sm uppercase tracking-wider hover:bg-neutral-200 transition font-heading focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-black"
      >
        Back to home
      </Link>
    </main>
  );
}

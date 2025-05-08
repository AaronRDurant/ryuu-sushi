export default function MenuHighlight() {
  return (
    <section
      className="relative h-96 bg-center bg-cover bg-no-repeat"
      style={{ backgroundImage: "url('/images/menu-placeholder.jpg')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <h2 className="text-2xl md:text-3xl font-serif mb-4">
          Explore Our Menu
        </h2>
        <a
          href="/menu"
          className="bg-white text-black px-6 py-2 rounded-full text-sm uppercase tracking-wide"
        >
          View Menu
        </a>
      </div>
    </section>
  );
}

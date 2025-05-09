import Image from "next/image";

export default function PhotoGrid() {
  return (
    <section className="py-20 px-4">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 max-w-6xl mx-auto">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="overflow-hidden">
            <Image
              src="/images/split-placeholder.jpg"
              alt={`Gallery ${i + 1}`}
              width={600}
              height={400}
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL="/images/split-placeholder.jpg"
              priority={i === 0}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

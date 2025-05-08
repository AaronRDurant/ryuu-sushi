import Image from "next/image";

export default function PhotoGrid() {
  return (
    <section className="py-12 px-4 max-w-6xl mx-auto">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[1, 2, 3, 4, 5, 6].map((n) => (
          <div
            key={n}
            className="aspect-square bg-gray-800 rounded-lg overflow-hidden"
          >
            <Image
              src={`/images/photo${n}.jpg`}
              alt={`Sushi ${n}`}
              width={400}
              height={400}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

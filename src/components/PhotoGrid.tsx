import Image from "next/image";

export default function PhotoGrid() {
  return (
    <section className="py-16 px-4">
      <div className="flex flex-col md:flex-row gap-3 max-w-4xl mx-auto">
        {/* Left: Portrait image */}
        <div className="w-full md:w-1/2 h-[28rem]">
          <Image
            src="/images/Ryuu-Sushi-entrance.jpg"
            alt="Ryuu Sushi Grosse Point restaurant entrance doors"
            width={600}
            height={850}
            className="w-full h-full object-cover"
            placeholder="blur"
            blurDataURL="/images/Ryuu-Sushi-entrance.jpg"
            priority
          />
        </div>

        {/* Right: Two stacked horizontal images */}
        <div className="w-full md:w-1/2 flex flex-col gap-3 h-[28rem]">
          <div className="h-1/2">
            <Image
              src="/images/Ryuu-Sushi-cocktail.jpg"
              alt="Cocktail at Ryuu Sushi Grosse Point bar"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL="/images/Ryuu-Sushi-entrance.jpg"
            />
          </div>
          <div className="h-1/2">
            <Image
              src="/images/Ryuu-Sushi-opening.jpg"
              alt="Ryuu Sushi meal at sneak peek event"
              width={800}
              height={400}
              className="w-full h-full object-cover"
              placeholder="blur"
              blurDataURL="/images/Ryuu-Sushi-entrance.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

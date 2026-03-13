import Image from "next/image";

export default function PhotoGrid() {
  return (
    <section
      className="w-full py-12 md:py-16"
      aria-label="Food and drink at Ryuu Sushi Lounge"
    >
      <div className="grid w-full grid-cols-1 gap-0 md:grid-cols-3">
        <figure className="relative aspect-[3/4] w-full overflow-hidden bg-black">
          <Image
            src="/images/Ryuu-Sushi-menu-options.jpg"
            alt="Assortment of sushi rolls and sashimi at Ryuu Sushi Lounge"
            fill
            sizes="(max-width: 768px) 100vw, 33.33vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="/images/Ryuu-Sushi-menu-options.jpg"
            priority
          />
        </figure>
        <figure className="relative aspect-[3/4] w-full overflow-hidden bg-black">
          <Image
            src="/images/Ryuu-Sushi-cocktails-martini.jpg"
            alt="Cocktail at Ryuu Sushi Lounge"
            fill
            sizes="(max-width: 768px) 100vw, 33.33vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="/images/Ryuu-Sushi-cocktails-martini.jpg"
          />
        </figure>
        <figure className="relative aspect-[3/4] w-full overflow-hidden bg-black">
          <Image
            src="/images/Ryuu-Sushi-cocktails-bar.jpg"
            alt="Cocktails at Ryuu Sushi Lounge"
            fill
            sizes="(max-width: 768px) 100vw, 33.33vw"
            className="object-cover object-center"
            placeholder="blur"
            blurDataURL="/images/Ryuu-Sushi-cocktails-bar.jpg"
          />
        </figure>
      </div>
    </section>
  );
}

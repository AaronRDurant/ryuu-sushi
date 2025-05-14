import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen px-4 pt-24 pb-20 max-w-3xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-heading mb-8 text-center">
        Chef James Lee
      </h1>

      {/* Chef Image */}
      <div className="relative w-full h-[22rem] md:h-[28rem] mb-10 rounded-lg overflow-hidden">
        <Image
          src="/images/Ryuu-Sushi-Chef-James-Lee.jpg"
          alt="Chef James Lee"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Bio */}
      <div className="space-y-6 text-white/90 font-sans leading-relaxed text-base md:text-lg">
        <p>
          With over 15 years of experience in top sushi kitchens across the
          country, Chef James Lee brings an elite level of craftsmanship and
          creativity to Ryuu Sushi in Grosse Pointe. From the vibrant flavors of
          Milwaukee to the refined kitchens of Ann Arbor and the raw beauty of
          Anchorage, Chef Lee has honed a style all his own — one rooted in
          tradition, yet fearless in innovation.
        </p>

        <p>
          His passion for sushi is matched only by his passion for people. Chef
          Lee specializes in Omakase, the revered Japanese dining experience
          where each dish is a surprise, a story, and a signature. Every plate
          is a bold expression of seasonality, artistry, and soul.
        </p>

        <p>
          At Ryuu, you're not just eating sushi — you're witnessing the work of
          a true sushi artist who takes pride in transforming fresh ingredients
          into unforgettable culinary moments.
        </p>
      </div>
    </main>
  );
}

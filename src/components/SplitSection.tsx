import Image from "next/image";

interface SplitSectionProps {
  title: string;
  text: string;
  image?: string;
  reverse?: boolean;
}

export default function SplitSection({
  title,
  text,
  image = "/images/split-placeholder.jpg",
  reverse,
}: SplitSectionProps) {
  return (
    <section className="py-24 px-4">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center max-w-6xl mx-auto gap-10`}
      >
        {/* Image */}
        <div className="md:w-1/2 w-full">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-auto object-cover shadow-md"
            priority
          />
        </div>

        {/* Text */}
        <div className="md:w-1/2 w-full text-center md:text-left max-w-md">
          <h2 className="text-3xl md:text-4xl font-heading uppercase tracking-wider mb-4">
            {title}
          </h2>
          <p className="text-white/70 leading-relaxed text-base md:text-lg font-sans">
            {text}
          </p>
        </div>
      </div>
    </section>
  );
}

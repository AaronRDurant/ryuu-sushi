import Image from "next/image";

interface SplitSectionProps {
  title: string;
  text: string;
  image: string;
  reverse?: boolean;
}

export default function SplitSection({
  title,
  text,
  image,
  reverse,
}: SplitSectionProps) {
  return (
    <section className="py-12">
      <div
        className={`flex flex-col md:flex-row ${
          reverse ? "md:flex-row-reverse" : ""
        } items-center max-w-6xl mx-auto gap-8 px-4`}
      >
        <div className="md:w-1/2">
          <Image
            src={image}
            alt={title}
            width={800}
            height={600}
            className="w-full h-auto rounded-lg object-cover"
          />
        </div>
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-serif mb-4">{title}</h2>
          <p className="text-gray-300">{text}</p>
        </div>
      </div>
    </section>
  );
}

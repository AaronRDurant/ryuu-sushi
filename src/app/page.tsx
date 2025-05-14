import Hero from "../components/Hero";
import SplitSection from "../components/SplitSection";
import MenuHighlight from "../components/MenuHighlight";
import PhotoGrid from "../components/PhotoGrid";

export default function Home() {
  return (
    <main>
      <Hero />
      <SplitSection
        title="A Curated Dining Experience"
        text="From our signature rolls to handcrafted appetizers, every dish is designed to impress — visually and flavorfully."
        image="/images/Ryuu-Sushi-presentation.jpg"
      />
      <SplitSection
        title="Obsessively Selected Ingredients"
        text="Our bluefin, hamachi, and salmon are sourced for quality and freshness — plated raw, seared, or tempura-battered with precision."
        image="/images/Ryuu-Sushi-flame-presentation.jpg"
        reverse
      />
      <MenuHighlight />
      <PhotoGrid />
    </main>
  );
}

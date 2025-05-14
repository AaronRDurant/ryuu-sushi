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
        text="From Lobster Cigars to the Empire Heat roll, every dish is crafted for visual impact and unforgettable flavor."
        image="/images/Ryuu-Sushi-presentation.jpg"
      />
      <SplitSection
        title="Obsessively Selected Ingredients"
        text="We source premium bluefin, hamachi, and salmon for our sashimi, signature rolls, and flame-finished creations."
        image="/images/Ryuu-Sushi-flame-presentation.jpg"
        reverse
      />
      <MenuHighlight />
      <PhotoGrid />
    </main>
  );
}

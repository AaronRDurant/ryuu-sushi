import Hero from "../components/Hero";
import SplitSection from "../components/SplitSection";
import MenuHighlight from "../components/MenuHighlight";
import PhotoGrid from "../components/PhotoGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <SplitSection
        title="A Curated Dining Experience"
        text="Everything from the ambiance to the fish is obsessively crafted."
        image="/images/experience.jpg"
      />
      <SplitSection
        title="Our Ingredients"
        text="We fly in the finest fish from Tokyo to LA daily. Nothing frozen."
        image="/images/ingredients.jpg"
        reverse
      />
      <MenuHighlight />
      <PhotoGrid />
    </>
  );
}

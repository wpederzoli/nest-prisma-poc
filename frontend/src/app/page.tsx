import { Footer, Toaster } from "@/components";
import { GallerySection } from "./GallerySection";
import { LandingSection } from "./LandingSection";

export default async function Home() {
  return (
    <div className="w-full h-screen md:h-screen overflow-auto no-scrollbar">
      <LandingSection />
      <GallerySection />
      <Footer />
      <Toaster text="A coffee with the same name already exists" />
    </div>
  );
}

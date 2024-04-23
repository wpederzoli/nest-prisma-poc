import { CoffeesSection } from "@/components";

const GallerySection: React.FC = async () => {
  const coffeeList = await fetch("http://localhost:5000/coffee", {
    cache: "no-store",
  });
  const coffees = await coffeeList.json();
  console.log("response: ", coffees);

  return (
    <div className="bg-gradient lg:pb-60 pb-40">
      <div className="text-white text-[32px] md:text-[50px] font-normal font-bebas text-center leading-[50px] md:pt-[150px]">
        MVST. EXCLUSIVE Coffee
      </div>
      <CoffeesSection initialList={coffees} />
    </div>
  );
};

export default GallerySection;

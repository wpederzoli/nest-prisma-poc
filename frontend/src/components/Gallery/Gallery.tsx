import { Coffee } from "@/types/coffee";
import { CoffeeCard } from "../CoffeeCard";

type GalleryProps = {
  coffees: Coffee[];
};

const Gallery: React.FC<GalleryProps> = ({ coffees }: GalleryProps) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 w-full xl:w-3/5 mt-7 md:mt-[68px] m-auto lg:gap-x-28 gap-y-10 justify-center items-center">
      {coffees.length &&
        coffees.map((item: Coffee) => {
          return <CoffeeCard key={item.id} coffee={item} />;
        })}
    </div>
  );
};

export default Gallery;

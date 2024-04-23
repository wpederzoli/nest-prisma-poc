import { CoffeType, Coffee } from "@/types/coffee";
import { Label } from "../Label";

type CoffeeCardProps = {
  coffee: Coffee;
  styles?: string;
};

const CoffeeCard: React.FC<CoffeeCardProps> = ({
  coffee,
  styles,
}: CoffeeCardProps) => {
  const { name, description, type, price, imageUrl } = coffee;
  styles = `relative bg-mvst_zinc rounded-md shadow-black/25 shadow-[10px_10px_20px_0_rgba(0,0,0,1.0)] w-[326px] h-[472px] lg:w-[390px] lg:h-[472px] m-auto ${styles}`;
  return (
    <div className={styles}>
      <div className="w-full h-full absolute top-0 left-0 grid grid-cols-1 justify-center items-center">
        <div className="relative">
          <img
            src={imageUrl}
            className="w-[289px] h-[216px] object-contain m-auto"
          />
          <Label
            text={type == CoffeType.Robusta ? "Robusta" : "Arabic"}
            className={`absolute top-0 left-5 text-[16px] font-normal text-base leading-tight ${type == CoffeType.Robusta ? "bg-neutral-700" : "bg-mvst_blue"
              }`}
          />
        </div>
        <div className="row-span-1 w-[180px] h-[86px] m-auto mt-0">
          <div className="w-full text-center text-orange-300 text-2xl font-semibold font-poppins leading-[20px]">
            {name}
          </div>
          <div className="text-center text-neutral-400 text-base font-medium font-poppins mt-3 mb-3 leading-[26px]">
            {description}
          </div>
          <div className="text-center text-white text-xl font-bold font-poppins leading-[26px]">
            {price.toFixed(2)} €
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;

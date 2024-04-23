import Link from "next/link";
import { Button } from "../Button";

type BannerProps = {
  title: string;
  text: string;
  btnText: string;
  styles?: string;
};

const Banner: React.FC<BannerProps> = ({
  title,
  text,
  btnText,
  styles,
}: BannerProps) => {
  styles = `justify-center items-center grid grid-cols-1 ${styles}`;

  return (
    <div className={styles}>
      <div className="text-white text-[130px] font-normal font-bebas leading-[130px]">
        {title}
      </div>
      <div className="text-stone-400 text-[20px] leading-9 font-normal font-poppins">
        {text}
      </div>
      <Link href="/create" className="w-min m-auto md:m-0">
        <Button
          text={btnText}
          className="w-[234px] h-[45px] inline-flex my-4 gap-2.5"
          fontStyle="text-white"
        />
      </Link>
    </div>
  );
};

export default Banner;

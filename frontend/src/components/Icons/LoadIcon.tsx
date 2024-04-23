import Image from "next/image";
import { IconProps } from "./types";

export const LoadIcon = ({ src, width, height, styles }: IconProps) => {
  return (
    <div>
      <Image
        priority
        src={src}
        height={height}
        width={width}
        alt="MVST Logo"
        className={styles}
      />
    </div>
  );
};

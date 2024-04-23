import Image from "next/image";

type LogoProps = {
  width: number;
  height: number;
};

export default async function Logo({ width, height }: LogoProps) {
  return (
    <div>
      <Image
        priority
        src="/logo.svg"
        height={height}
        width={width}
        alt="MVST Logo"
      />
    </div>
  );
}

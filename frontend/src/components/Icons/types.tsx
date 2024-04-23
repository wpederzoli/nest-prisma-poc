export type IconProps = {
  src: string;
  width: number;
  height: number;
  styles?: string;
  alt?: string;
};

export type GenericIcon = Omit<IconProps, "src">;

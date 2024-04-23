export enum CoffeType {
  Robusta = "ROBUSTA",
  Arabic = "ARABIC",
}

export type Coffee = {
  id: number;
  name: string;
  type: CoffeType;
  description: string;
  imageUrl: string;
  price: number;
};

export type WithoutId<T> = Omit<T, "id">;

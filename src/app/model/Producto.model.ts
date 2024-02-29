export interface IProduct{
  id:number;
  title:string;
  price:string;
  description:string;
  category:string;
  image:string;
  rating:rating;
}

export enum Category {
    Electronics = "electronics",
    Jewelery = "jewelery",
    MenSClothing = "men's clothing",
    WomenSClothing = "women's clothing",
}
export interface rating{
  rate:number;
  count:number;
} 
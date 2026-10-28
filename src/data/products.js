/**
 * Mock data for products (used by ProductCard).
 *
 * Shape of one product:
 *   id       - unique key
 *   name     - title shown on the card
 *   category - e.g. "Toy", "Cat Food"
 *   size     - optional, only some products have a size
 *   price    - number in VND
 *   image    - photo URL
 *   gift     - free gift text shown in the cream strip on the card
 */
import prod1 from "../assets/prod1.jpg";
import prod2 from "../assets/prod2.jpg";
import prod3 from "../assets/prod3.jpg";
import prod4 from "../assets/prod4.jpg";
import prod5 from "../assets/prod5.jpg";
import prod6 from "../assets/prod6.jpg";
import prod7 from "../assets/prod7.jpg";
import prod8 from "../assets/prod8.jpg";

export const products = [
  {
    id: "P01",
    name: "Reflex Plus Adult Cat Food Salmon",
    category: "Cat Food",
    size: "385gr",
    price: 140000,
    image: prod1,
    gift: "Free Toy & Free Shaker",
  },
  {
    id: "P02",
    name: "Reflex Plus Adult Cat Food Salmon",
    category: "Cat Food",
    size: "1.5kg",
    price: 165000,
    image: prod2,
    gift: "Free Toy & Free Shaker",
  },
  {
    id: "P03",
    name: "Cat scratching ball toy kitten sisal rope ball",
    category: "Toy",
    price: 1100000,
    image: prod3,
    gift: "Free Cat Food",
  },
  {
    id: "P04",
    name: "Cute Pet Cat Warm Nest",
    category: "Toy",
    price: 410000,
    image: prod4,
    gift: "Free Cat Food",
  },
  {
    id: "P05",
    name: "NaturVet Dogs - Omega-Gold",
    category: "Dog Food",
    size: "200gr",
    price: 350000,
    image: prod5,
    gift: "Free Toy & Free Shaker",
  },
  {
    id: "P06",
    name: "Costumes Fashion Pet Cowboy",
    category: "Costume",
    price: 500000,
    image: prod6,
    gift: "Free Toy & Free Shaker",
  },
  {
    id: "P07",
    name: "Costumes Chicken Drumstick Headband",
    category: "Costume",
    price: 400000,
    image: prod7,
    gift: "Free Cat Food",
  },
  { id: "P08", name: "Plush Pet Toy", category: "Toy", price: 250000, image: prod8, gift: "Free Cat Food" },
];

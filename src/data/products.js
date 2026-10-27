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
import { px } from "../utils/format";

export const products = [
  {
    id: "P01",
    name: "Reflex Plus Adult Cat Food Salmon",
    category: "Cat Food",
    size: "385gr",
    price: 140000,
    image: px(17309676),
    gift: "Free Toy & Free Shaker",
  },
  {
    id: "P02",
    name: "Reflex Plus Adult Cat Food Salmon",
    category: "Cat Food",
    size: "1.5kg",
    price: 165000,
    image: px(33514581),
    gift: "Free Toy & Free Shaker",
  },
  {
    id: "P03",
    name: "Cat scratching ball toy kitten sisal rope ball",
    category: "Toy",
    price: 1100000,
    image: px(16577552),
    gift: "Free Cat Food",
  },
  {
    id: "P04",
    name: "Cute Pet Cat Warm Nest",
    category: "Toy",
    price: 410000,
    image: px(27279130),
    gift: "Free Cat Food",
  },
  {
    id: "P05",
    name: "NaturVet Dogs - Omega-Gold",
    category: "Dog Food",
    size: "200gr",
    price: 350000,
    image: px(16577568),
    gift: "Free Toy & Free Shaker",
  },
  {
    id: "P06",
    name: "Costumes Fashion Pet Cowboy",
    category: "Costume",
    price: 500000,
    image: px(15006378),
    gift: "Free Toy & Free Shaker",
  },
  {
    id: "P07",
    name: "Costumes Chicken Drumstick Headband",
    category: "Costume",
    price: 400000,
    image: px(9660361),
    gift: "Free Cat Food",
  },
  { id: "P08", name: "Plush Pet Toy", category: "Toy", price: 250000, image: px(10914514), gift: "Free Cat Food" },
];

/**
 * Mock data for the "Our Pets" grid.
 *
 * Shape of one pet:
 *   id     - unique key
 *   name   - title shown on the card
 *   gender - "Male" | "Female"
 *   age    - display text
 *   price  - number in VND (formatted later with formatPrice)
 *   image  - photo URL
 *
 * To connect a real API later, replace this array with fetched data of the same shape.
 */
import { px } from "../utils/format";

export const pets = [
  {
    id: "MO231",
    name: "MO231 - Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: 6900000,
    image: px(6224657),
  },
  {
    id: "MO502",
    name: "MO502 - Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: 3900000,
    image: px(38987918),
  },
  {
    id: "MO102",
    name: "MO102 - Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: 4000000,
    image: px(33797797),
  },
  {
    id: "MO512",
    name: "MO512 - Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: 8900000,
    image: px(11053689),
  },
  {
    id: "MO231B",
    name: "MO231B - Pembroke Corgi Cream",
    gender: "Male",
    age: "02 months",
    price: 7900000,
    image: px(39849167),
  },
  {
    id: "MO502B",
    name: "MO502B - Pembroke Corgi Tricolor",
    gender: "Female",
    age: "02 months",
    price: 9000000,
    image: px(8384875),
  },
  {
    id: "MO128",
    name: "MO128 - Pomeranian Grey",
    gender: "Female",
    age: "02 months",
    price: 6500000,
    image: px(39477516),
  },
  {
    id: "MO512C",
    name: "MO512C - Poodle Tiny Dairy Cow",
    gender: "Male",
    age: "02 months",
    price: 5000000,
    image: px(34027685),
  },
];

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
import pet1 from "../assets/pet1.jpg";
import pet2 from "../assets/pet2.jpg";
import pet3 from "../assets/pet3.jpg";
import pet4 from "../assets/pet4.jpg";
import pet5 from "../assets/pet5.jpg";
import pet6 from "../assets/pet6.jpg";
import pet7 from "../assets/pet7.jpg";
import pet8 from "../assets/pet8.jpg";

export const pets = [
  {
    id: "MO231",
    name: "MO231 - Pomeranian White",
    gender: "Male",
    age: "02 months",
    price: 6900000,
    image: pet1,
  },
  {
    id: "MO502",
    name: "MO502 - Poodle Tiny Yellow",
    gender: "Female",
    age: "02 months",
    price: 3900000,
    image: pet2,
  },
  {
    id: "MO102",
    name: "MO102 - Poodle Tiny Sepia",
    gender: "Male",
    age: "02 months",
    price: 4000000,
    image: pet3,
  },
  {
    id: "MO512",
    name: "MO512 - Alaskan Malamute Grey",
    gender: "Male",
    age: "02 months",
    price: 8900000,
    image: pet4,
  },
  {
    id: "MO231B",
    name: "MO231B - Pembroke Corgi Cream",
    gender: "Male",
    age: "02 months",
    price: 7900000,
    image: pet5,
  },
  {
    id: "MO502B",
    name: "MO502B - Pembroke Corgi Tricolor",
    gender: "Female",
    age: "02 months",
    price: 9000000,
    image: pet6,
  },
  {
    id: "MO128",
    name: "MO128 - Pomeranian Grey",
    gender: "Female",
    age: "02 months",
    price: 6500000,
    image: pet7,
  },
  {
    id: "MO512C",
    name: "MO512C - Poodle Tiny Dairy Cow",
    gender: "Male",
    age: "02 months",
    price: 5000000,
    image: pet8,
  },
];

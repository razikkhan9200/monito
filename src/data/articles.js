/**
 * Mock data for the "Useful Pet Knowledge" cards.
 * Shape: { id, tag, title, excerpt, image }
 */
import art1 from "../assets/art1.png";
import art2 from "../assets/art2.png";
import art3 from "../assets/art3.png";

export const articles = [
  {
    id: "A1",
    tag: "Pet knowledge",
    title: "What is a Pomeranian? How to Identify Pomeranian Dogs",
    excerpt:
      "The Pomeranian, also known as the Pom dog, is in the small, cute companion breed group. Learn about their personality, daily care and fluffy coat.",
    image: art1,
  },
  {
    id: "A2",
    tag: "Pet knowledge",
    title: "Dog Diet You Need To Know",
    excerpt:
      "A balanced diet is the foundation of a happy, healthy dog. Discover what to feed your best friend for energy, growth and lifelong health.",
    image: art2,
  },
  {
    id: "A3",
    tag: "Pet knowledge",
    title: "Why Dogs Bite and Destroy Furniture and How to Prevent It?",
    excerpt:
      "Biting is a natural habit for young dogs. Find the right toys, gentle training and everyday routines to keep your home and your puppy happy.",
    image: art3,
  },
];

/**
 * PetCard - one puppy in the "Our Pets" grid.
 *
 * Props:
 *   pet         { id, name, gender, age, price, image } (see data/pets.js)
 *   withAction  show the "Meet this puppy" button under the price
 */
import { formatPrice } from "../../utils/format";
import { Button } from "../ui/Button";
import { Card } from "./Card";

export function PetCard({ pet, withAction = false }) {
  return (
    <Card image={pet.image} alt={pet.name}>
      {/* min-h keeps one-line and two-line titles the same height */}
      <h3 className="min-h-[2.5rem] text-sm font-bold leading-5 text-ink">{pet.name}</h3>

      <p className="text-[11px] text-muted">
        Gene: {pet.gender} <span className="mx-1">•</span> Age: {pet.age}
      </p>

      {/* mt-auto pushes the price (and button) to the bottom of the card */}
      <p className="mt-auto text-sm font-bold text-ink">{formatPrice(pet.price)}</p>

      {withAction && (
        <Button variant="outline" fullWidth className="mt-1 h-10">
          Meet this puppy
        </Button>
      )}
    </Card>
  );
}

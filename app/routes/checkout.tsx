import type { Route } from "./+types/checkout";
import { Stripe } from "../stripe/stripe";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Matrix Quotations" },
    { name: "description", content: "Checkout" },
  ];
}

export default function Checkout() {
  return <Stripe />;
}

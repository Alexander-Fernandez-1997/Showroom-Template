import { loadStripe } from "@stripe/stripe-js";
import React from "react";

export const StripeBtn = ({ slug }) => {
  if (slug === "") {
    return null;
  }

  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || ""
  );

  return (
    <form action={`/api/payments/stripe/${slug}`} method="POST">
      <input type="hidden" name="total" />
      <section>
        <button type="submit" role="link">
          Stripe
        </button>
      </section>
      <style jsx>
        {`
          section {
            background: #ffffff;
            display: flex;
            flex-direction: column;
            width: 100%;
            border-radius: 6px;
            justify-content: space-between;
          }
          button {
            height: 36px;
            background: #556cd6;
            border-radius: 4px;
            color: white;
            border: 0;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.2s ease;
            box-shadow: 0px 4px 5.5px 0px rgba(0, 0, 0, 0.07);
          }
          button:hover {
            opacity: 0.8;
          }
        `}
      </style>
    </form>
  );
};

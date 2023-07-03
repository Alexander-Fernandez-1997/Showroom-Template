import OrderConfirmation from "@/components/orders/OrderConfirmation";
import { simpleFetch } from "../../../../utils/simpleFetch";
import { ClearCart } from "@/components/orders/ClearCart";

interface Props {
  params: {
    slug: string;
  };
}

export default async function Home({ params }: Props) {
  console.log("this is the slug in the website", params.slug);
  const order = await simpleFetch(`orders/${params.slug}/completed`, "ssr");

  return (
    <div className="container mt-2 mb-4 m-md-5  p-md-5">
      <h1>Order confirmation:</h1>
      <ClearCart />
      <hr />
      <OrderConfirmation order={order} />
    </div>
  );
}

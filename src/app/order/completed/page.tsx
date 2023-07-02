import OrderConfirmation from "@/components/orders/OrderConfirmation";

export default async function Home() {
  return (
    <div className="container m-5 p-5">
      <h1>Order confirmation:</h1>
      <hr />
      <OrderConfirmation />
    </div>
  );
}

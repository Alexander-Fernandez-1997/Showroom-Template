import OrderConfirmation from "@/components/orders/OrderConfirmation";

export default async function Home() {
  return (
    <div className="container mt-2 mb-4 m-md-5  p-md-5">
      <h1>Order confirmation:</h1>
      <hr />
      <OrderConfirmation />
    </div>
  );
}

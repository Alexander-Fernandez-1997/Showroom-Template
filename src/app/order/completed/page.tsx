import OrderConfirmation from "@/components/orders/OrderConfirmation";
import "./completed.css";

export default async function Home() {
  return (
    <>
      <div className="mt-5 pt-5">
        <h1>this is a test</h1>
      </div>
      <OrderConfirmation />
    </>
  );
}

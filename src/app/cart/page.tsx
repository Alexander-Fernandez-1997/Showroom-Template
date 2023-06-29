import { CartTable } from "@/components/cart/CartTable";
import { MoneyInfo } from "@/components/cart/MoneyInfo";

export default async function Home() {
  return (
    <>
      <div className="pt-5 pb-5 container ">
        <div className="row pt-5 pb-5 justify-content-center">
          <div className="container">
            <section className="pt-5 pb-5">
              <div className="row">
                <div className="col-12 col-md-7 bor10 p-5">
                  <h2 className="text-dark">Carrito de compras</h2>
                  <hr></hr>
                  <CartTable></CartTable>
                </div>

                <MoneyInfo></MoneyInfo>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

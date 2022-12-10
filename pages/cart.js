import Link from "next/link";
import { simpleFetch } from "../utils/simpleFetch";
import { MoneyInfo } from "../components/cart/MoneyInfo";
import { CartTable } from "../components/cart/CartTable";

export default function Home({ store }) {
  return (
    <>
      <div className="pt-5 pb-5 container bg-light">
        <div className="row pt-5 pb-5 justify-content-center">
          <div className="container">
            <section className="pt-5 pb-5">
              <div className="row">
                <div className="col-12 col-md-7 bg-white p-5">
                  <h2 className="text-dark">Carrito de compras</h2>
                  <hr></hr>
                  <CartTable></CartTable>
                </div>

                <MoneyInfo></MoneyInfo>
              </div>
              {/* <div className="d-flex align-content-center justify-content-between mt-3">
                <Link href="/" className="btn btn-secondary ">
                  Seguir comprando
                </Link>
                <Link href="/cart" className="btn btn-dark ">
                  Ir al Checkout
                </Link>
              </div> */}
            </section>
          </div>
        </div>
      </div>
    </>
  );
}
export async function getStaticProps() {
  const store = await simpleFetch("store");

  return {
    props: {
      store,
    },
    revalidate: 600,
  };
}

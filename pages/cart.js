import useCart from "../store/store";
import { useEffect, useState } from "react";
import { Product } from "../components/cart/Product";
import Link from "next/link";
import { simpleFetch } from "../utils/simpleFetch";

export default function Home({ store }) {
  const total = useCart((state) => state.total);
  const cart = useCart((state) => state.cartContent);
  const [mycart, setCart] = useState([]);
  const [mytotal, setTotal] = useState();
  useEffect(() => {
    setCart(cart);
    setTotal(total);
  }, [cart, total]);
  return (
    <>
      <div className="pt-5 pb-5 container ">
        <div className="row pt-5 pb-5 justify-content-center">
          <div className="container">
            <section className="pt-5 pb-5">
              <div className="row w-100">
                <div className="col-lg-12 col-md-12 col-12">
                  <h3 className="display-5 mb-2 text-center">Shopping Cart</h3>
                  <p className="mb-5 text-center">
                    <i className="text-info font-weight-bold">
                      {mycart.length}
                    </i>{" "}
                    {mycart.length > 1 ? "items" : "item"} in your cart
                  </p>
                  <table
                    id="shoppingCart"
                    className="table table-condensed table-responsive"
                  >
                    <thead>
                      <tr>
                        <th style={{ width: "60%" }}>Producto</th>
                        <th style={{ width: "12%" }}>Precio</th>
                        <th style={{ width: "10%" }}>Cantidad</th>
                        <th style={{ width: "16%" }} />
                      </tr>
                    </thead>
                    <tbody>
                      {mycart.map((item, key) => (
                        <Product key={key} item={item}></Product>
                      ))}
                    </tbody>
                  </table>
                  <div className="float-right text-right">
                    <h4>Subtotal:</h4>
                    <h1>${mytotal}</h1>
                  </div>
                </div>
              </div>
              <div className="d-flex align-content-center justify-content-between mt-3">
                <Link href="/" className="btn btn-secondary ">
                  Seguir comprando
                </Link>
                <Link href="/cart" className="btn btn-dark ">
                  Ir al Checkout
                </Link>
              </div>
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

import useCart from "../store/store";
import { useEffect, useState } from "react";
import { Product } from "../components/cart/Product";

export default function Home() {
  const total = useCart((state) => state.total);
  const cart = useCart((state) => state.cartContent);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const [mycart, setCart] = useState([]);
  const [mytotal, setTotal] = useState();
  useEffect(() => {
    setCart(cart);
    setTotal(total);
  }, [cart]);
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
                        <th style={{ width: "60%" }}>Product</th>
                        <th style={{ width: "12%" }}>Price</th>
                        <th style={{ width: "10%" }}>Quantity</th>
                        <th style={{ width: "16%" }} />
                      </tr>
                    </thead>
                    <tbody>
                      {mycart.map((item, key) => (
                        <Product
                          key={key}
                          item={item}
                          remove={removeFromCart}
                        ></Product>
                      ))}
                    </tbody>
                  </table>
                  <div className="float-right text-right">
                    <h4>Subtotal:</h4>
                    <h1>${mytotal}</h1>
                  </div>
                </div>
              </div>
              <div className="row mt-4 d-flex align-items-center">
                <div className="col-sm-6 order-md-2 text-right">
                  <a
                    href="catalog.html"
                    className="btn btn-primary mb-4 btn-lg pl-5 pr-5"
                  >
                    Checkout
                  </a>
                </div>
                <div className="col-sm-6 mb-3 mb-m-1 order-md-1 text-md-left">
                  <a href="catalog.html">
                    <i className="fas fa-arrow-left mr-2" /> Continue Shopping
                  </a>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
}

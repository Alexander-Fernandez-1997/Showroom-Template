import { MoneyInfo } from "../components/cart/MoneyInfo";
import { BillingForm } from "../components/checkout/BillingForm";
import { ShippingForm } from "../components/checkout/ShippingForm";
import { ShippingOptions } from "../components/checkout/ShippingOptions";
import { simpleFetch } from "../utils/simpleFetch";

export default function Checkout() {
  return (
    <>
      <div className="pt-5 pb-5 container ">
        <div className="row pt-5 pb-5 justify-content-center">
          <div className="container">
            <section className="pt-5 pb-5">
              <div className="row">
                <div className="col-12 col-md-7">
                  <div className="col-12 bor10 p-5">
                    <h2 className="mb-3">1 - Shipping address</h2>
                    <ShippingForm></ShippingForm>
                    <h2 className="mb-3 mt-5">2 - Billing address</h2>
                    <BillingForm></BillingForm>
                    <button className="flex-c-m stext-101 cl0 size-101 bg3 hov-btn3 p-lr-15 trans-04 mt-5">
                      Continuar a metodo de envio
                    </button>
                  </div>
                  <div className="col-12 bor10 p-5 mt-3">
                    <h2 className="mb-3">3 - Shipping method</h2>
                    <ShippingOptions></ShippingOptions>
                  </div>
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

export async function getStaticProps() {
  const store = await simpleFetch("store");

  return {
    props: {
      store,
    },
    revalidate: 600,
  };
}

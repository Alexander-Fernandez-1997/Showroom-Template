"use client";
import { useState } from "react";
import { MoneyInfo } from "@/components/cart/MoneyInfo";
import { BillingForm } from "@/components/checkout/BillingForm";
import { SameAddress } from "@/components/checkout/SameAddress";
import { ShippingForm } from "@/components/checkout/ShippingForm";
import { ShippingOptions } from "@/components/checkout/ShippingOptions";
import { ShowProviders } from "@/components/checkout/ShowProviders";
import { PaymentOptions } from "@/components/checkout/PaymentOptions";
import { UnlockPaymentBtn } from "@/components/checkout/UnlockPaymentBtn";

export default function Checkout() {
  const [same, setSame] = useState(false);
  const [slug, setSlug] = useState("");
  // usar 1 form para shipping form , otro para billing form  , luego 1 state para el provider seleccionado; los otros 2 datos se pueden pasar por props
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
                    <SameAddress same={same} setSame={setSame}></SameAddress>
                    {!same && (
                      <>
                        <h2 className="mb-3 mt-5">2 - Billing address</h2>
                        <BillingForm></BillingForm>
                      </>
                    )}
                    <ShowProviders></ShowProviders>
                  </div>
                  <div className="col-12 bor10 p-5 mt-3">
                    <h2 className="mb-3">3 - Shipping method</h2>
                    <div className="d-none shippingList">
                      <ShippingOptions slug={slug}></ShippingOptions>
                      <UnlockPaymentBtn
                        same={same}
                        slug={slug}
                        setSlug={setSlug}
                      ></UnlockPaymentBtn>
                    </div>
                  </div>
                  <div className="col-12 bor10 p-5 mt-3">
                    <h2 className="mb-3">4 - Payment method</h2>
                    <PaymentOptions></PaymentOptions>
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

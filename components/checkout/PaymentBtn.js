import React from "react";
import useOrderInfo from "../../store/orderInfo";
import useCart from "../../store/store";

export const PaymentBtn = () => {
  const shippingAddress = useOrderInfo((state) => state.shipping_address);
  const billingAddress = useOrderInfo((state) => state.billing_address);
  const provider = useOrderInfo((state) => state.provider);
  const cartItems = useCart((state) => state.cartContent);
  const money = useCart((state) => state.total);

  console.log(shippingAddress);
  console.log(billingAddress);
  console.log(provider);
  console.log(cartItems);
  console.log(money);

  const handlePayment = () => {
    const url = `${window.location.origin}/api/orders/create`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        shipping_address: shippingAddress,
        billing_address: billingAddress,
        items: cartItems,
        provider: provider,
        money: money,
        client: "",
      }),
    };
    fetch(url, options)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        //here you can redirect to the payment provider
      })
      .catch((err) => console.log(err));
  };

  return (
    <button
      className="flex-c-m stext-101 cl0 size-101 bg3 hov-btn3 p-lr-15 trans-04 mt-5"
      onClick={handlePayment}
    >
      Continuar a metodo de pago
    </button>
  );
};

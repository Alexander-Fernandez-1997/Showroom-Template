import React, { useEffect, useState } from "react";
import useOrderInfo from "../../store/orderInfo";
import { ShippingOption } from "./ShippingOption";
import { providers } from "utils/shipping";

export const ShippingOptions = ({ slug = "" }) => {
  const [service, setService] = useState(providers[0]);
  const setProvider = useOrderInfo((state) => state.setProvider);

  useEffect(() => {
    setProvider(service);
    if (slug !== "") {
      document.querySelector(".paymentList")?.classList.add("d-none");
    }
  }, [service]);

  return (
    <div className="row gap-2 ">
      {providers.map((provider) => (
        <ShippingOption
          key={provider.name}
          provider={provider}
          setService={setService}
          service={service}
        />
      ))}
    </div>
  );
};

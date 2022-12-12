import React, { useEffect } from "react";
import { useForm } from "../../hooks/useForm";
import useOrderInfo from "../../store/orderInfo";
import { AdressFields } from "./AdressFields";

export const ShippingForm = () => {
  const [formValues, handleInputChange] = useForm({
    email: "",
    name: "",
    lastname: "",
    company: "",
    address: "",
    apartment: "",
    cp: "",
    city: "",
    country: "",
    state: "",
    phone: "",
  });

  const setShippingAddress = useOrderInfo((state) => state.setShippingAddress);

  useEffect(() => {
    setShippingAddress(formValues);
  }, [formValues]);

  return (
    <form className="row g-3 form-recto">
      <AdressFields handleInputChange={handleInputChange}></AdressFields>
    </form>
  );
};

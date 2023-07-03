import React from "react";

export const BodyAddress = ({ order }) => {
  const {
    firstName,
    lastName,
    address,
    shippingProviderName,
    shippingProviderType,
  } = order;
  const { street, apartment, city, state, country } = address;
  const fullName = `${firstName} ${lastName}`;
  const fullAddress = `${street} ${apartment}`;
  const shippingProvider = `${shippingProviderName} ${shippingProviderType}`;

  return (
    <div className="col-12 col-md-6">
      <h5 className="">Delivery</h5>
      <div className="my-2">
        <p className="text-small text-secondary">Address</p>
        <div className="flex flex-col">
          <span>{fullName}</span>
          <span>{fullAddress}</span>
          <span>
            {city} {state}
          </span>
          <span>{country}</span>
        </div>
      </div>
      <div className="my-2">
        <p className="text-small text-secondary">Delivery method</p>
        <span>{shippingProvider}</span>
      </div>
    </div>
  );
};

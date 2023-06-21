import React from "react";
import { TbRefresh, TbRotate, TbTruckDelivery } from "react-icons/tb";

export const ShippingInfoTab = () => {
  return (
    <div className="d-flex flex-column gap-2">
      <div>
        <TbTruckDelivery />
        <span className="text-caracteristic"> Fast delivery</span>
        <p className="tab-description">
          Your package will arrive in 3-5 business days at your pick up location
          or in the comfort of your home.
        </p>
      </div>
      <hr></hr>

      <div>
        <TbRefresh />
        <span className="text-caracteristic"> Simple exchanges</span>
        <p className="tab-description">
          Is the fit not quite right? No worries - we&apos;ll exchange your
          product for a new one.
        </p>
      </div>
      <hr></hr>

      <div>
        <TbRotate />
        <span className="text-caracteristic"> Easy returns</span>
        <p className="tab-description">
          Just return your product and we&apos;ll refund your money. No
          questions asked – we&apos;ll do our best to make sure your return is
          hassle-free.
        </p>
      </div>
      <hr></hr>
    </div>
  );
};

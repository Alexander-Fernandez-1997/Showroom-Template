import React from "react";

export const Body = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10 border-b border-gray-200">
      <div className="text-base-regular">
        <h2 className="text-base-semi">Delivery</h2>
        <div className="my-2">
          <h3 className="text-small-regular text-gray-700">Address</h3>
          <div className="flex flex-col">
            <span>Alexander Fernandez</span>
            <span>Camargo 936</span>
            <span>Villa Crespo, Capital Federal 1414</span>
            <span>IT</span>
          </div>
        </div>
        <div className="my-2">
          <h3 className="text-small-regular text-gray-700">Delivery method</h3>
          <div>
            <div>PostFake Standard</div>
          </div>
        </div>
      </div>
      <div>
        <h2 className="text-base-semi">Order Summary</h2>
        <div className="text-small-regular text-gray-700 my-2">
          <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
            <span>Subtotal</span>
            <span>€19.50</span>
          </div>
          <div className="flex flex-col gap-y-1">
            <div className="flex items-center justify-between">
              <span>Shipping</span>
              <span>€10.00</span>
            </div>
            <div className="flex items-center justify-between">
              <span>Taxes</span>
              <span />
            </div>
          </div>
          <div className="h-px w-full border-b border-gray-200 border-dashed my-4" />
          <div className="flex items-center justify-between text-base-regular text-gray-900 mb-2">
            <span>Total</span>
            <span>€29.50</span>
          </div>
        </div>
      </div>
    </div>
  );
};

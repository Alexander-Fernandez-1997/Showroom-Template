import React, { useState } from "react";
import { ShippingInfoTab } from "./tabs/ShippingInfoTab";
import { Specs } from "./tabs/Specs";

export const Info = () => {
  const [tab, setTab] = useState(true);

  const chooseTab = (state) => {
    setTab(state);
  };

  return (
    <>
      <div className="d-flex carousel-nav mt-4">
        <a
          onClick={() => chooseTab(true)}
          className={tab ? "nav-link active" : "nav-link"}
        >
          Product Information
        </a>

        <a
          onClick={() => chooseTab(false)}
          className={tab ? "nav-link" : "nav-link active"}
        >
          Shipping & Returns
        </a>
      </div>

      <div>
        <div
          className={
            tab ? "tab-pane fade show active p-3" : "tab-pane fade p-3 d-none"
          }
        >
          <Specs></Specs>
        </div>

        <div
          className={
            tab === false
              ? "tab-pane fade show active p-3"
              : "tab-pane fade p-3 d-none"
          }
        >
          <ShippingInfoTab></ShippingInfoTab>
        </div>
      </div>
    </>
  );
};

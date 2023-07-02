import React from "react";

export const Footer = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 p-10">
      <div>
        <h2 className="text-base-semi">Need help?</h2>
        <div className="text-base-regular my-2">
          <ul className="gap-y-2 flex flex-col">
            <li>
              <a href="/contact">Contact</a>
            </li>
            <li>
              <a href="/contact">Returns &amp; Exchanges</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

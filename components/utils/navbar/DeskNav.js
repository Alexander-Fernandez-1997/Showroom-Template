import React from "react";
import { AuthBtn } from "./AuthBtn";
import { CartIcon } from "./CartIcon";
import { MobileLink } from "./MobileLink";
import { NavLogo } from "./NavLogo";

export const DeskNav = ({ directions }) => {
  return (
    <div className="container-menu-desktop fix-menu-desktop ">
      <div className="wrap-menu-desktop">
        <nav className="limiter-menu-desktop container">
          <NavLogo></NavLogo>
          <div className="menu-desktop">
            <ul className="main-menu">
              {directions.map((direction) => (
                <MobileLink key={direction + direction} direction={direction} />
              ))}
              <CartIcon></CartIcon>
            </ul>
          </div>
          <div className="wrap-icon-header flex-w flex-r-m">
            <AuthBtn></AuthBtn>
          </div>
        </nav>
      </div>
    </div>
  );
};

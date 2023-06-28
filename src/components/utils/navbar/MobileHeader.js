import { AuthBtn } from "./AuthBtn";
import { HamburguerIcon } from "./HamburguerIcon";
import { NavLogo } from "./NavLogo";

export const MobileHeader = () => {
  return (
    <div className="wrap-header-mobile ">
      <div className="logo-mobile">
        <NavLogo></NavLogo>
      </div>
      <div className="wrap-icon-header flex-w flex-r-m m-r-15">
        <AuthBtn></AuthBtn>
      </div>
      <HamburguerIcon></HamburguerIcon>
    </div>
  );
};

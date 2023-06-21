import Link from "next/link";
import React, { useEffect, useState } from "react";
import useDetails from "../../../store/details";

export const NavLogo = () => {
  const { store } = useDetails();
  const [logo, setlogo] = useState("");
  useEffect(() => {
    setlogo(store.logo);
  }, [store]);

  return (
    <Link href="/" className="logo">
      <img src={logo} alt="IMG-LOGO" />
    </Link>
  );
};

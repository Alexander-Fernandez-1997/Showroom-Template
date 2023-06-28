"use client";
import React from "react";

export const HamburguerIcon = () => {
  const mobileMenu = () => {
    document.querySelector(".hamburger--squeeze").classList.toggle("is-active");
    const menu = document.querySelector(".mobile-transform");
    if (menu.style.display === "block") {
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
    }
  };

  return (
    <div
      onClick={mobileMenu}
      className="btn-show-menu-mobile hamburger hamburger--squeeze"
    >
      <span className="hamburger-box">
        <span className="hamburger-inner" />
      </span>
    </div>
  );
};

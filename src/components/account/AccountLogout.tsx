"use client";
import { signOut } from "next-auth/react";
import React from "react";

export const AccountLogout = () => {
  return (
    <a
      role="button"
      className="list-group-item text-dark"
      onClick={() => signOut({ callbackUrl: "/" })}
    >
      Logout
    </a>
  );
};

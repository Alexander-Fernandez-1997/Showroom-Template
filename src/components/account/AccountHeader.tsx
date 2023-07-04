"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

export const AccountHeader = () => {
  const { data: session, status } = useSession();
  const username = session?.user?.email?.split("@")[0];
  const router = useRouter();

  if (status === "unauthenticated") {
    router.push("/");
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h3>Hola {username}</h3>
      </div>
      <hr />
    </>
  );
};

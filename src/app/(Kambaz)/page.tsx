"use client";
import { redirect } from "next/navigation";
import { useSelector } from "react-redux";
import { useEffect } from "react";

export default function Kambaz() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  useEffect(() => {
    if (!currentUser) {
      redirect("/Account/Signin");
    } else {
      redirect("/Dashboard");
    }
  }, [currentUser]);

  return null;
}
import { redirect } from "next/navigation";
import Session from "./Account/Session";

export default function Kambaz() {
  redirect("/Account/Signin");
}
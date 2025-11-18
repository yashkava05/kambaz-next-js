"use client";
import { Provider } from "react-redux";
import store from "./store";
import Session from "./Account/Session";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <Session>{children}</Session>
    </Provider>
  );
}
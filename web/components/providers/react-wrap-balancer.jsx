import React from "react";
import { Provider } from "react-wrap-balancer";

export default function ReactWrapBalancer({ children }) {
  return <Provider>{children}</Provider>;
}

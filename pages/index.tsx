import * as React from "react";
import { render } from "react-dom";
import App from "../src/components/App";
import { StoreProvider } from "../src/components/Store";

export default function Index() {
  return(
  <StoreProvider>
    <App />
  </StoreProvider>
  )
  }

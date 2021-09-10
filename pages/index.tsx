import * as React from "react";
import { render } from "react-dom";
import App from "../components/App";
import { StoreProvider } from "../components/Store";

export default function Index() {
  return(
  <StoreProvider>
    <App />
  </StoreProvider>
  )
  }

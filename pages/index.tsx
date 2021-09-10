import * as React from "react";
import { render } from "react-dom";
import App from "./components/App";
import { StoreProvider } from "./components/Store";

export default function Index() {
  //ブラウザ実行時のみ
  if (process.browser) {
    //クッキーに値をセット
    document.cookie = "クッキー";
  }
  return(
  <StoreProvider>
    <App />
  </StoreProvider>
  )
  }

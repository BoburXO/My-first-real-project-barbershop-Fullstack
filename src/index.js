import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./i18n";
import { ContextProvider } from "./context/context";
import Loading from "./object/Loading";

ReactDOM.render(
  <ContextProvider>
    <React.StrictMode>
      <Suspense fallback={<Loading/>}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Suspense>
    </React.StrictMode>
  </ContextProvider>,
  document.getElementById("root")
);

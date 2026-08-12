import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";

import { store } from "./redux/store";
import "./index.css";
import App from "./App";
import GlobalImageLazyLoader from "./utils/GlobalImageLazyLoader.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>

        <GlobalImageLazyLoader>
          <App />
        </GlobalImageLazyLoader>

      </BrowserRouter>
    </Provider>
  </StrictMode>
);

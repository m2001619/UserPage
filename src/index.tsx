import React from "react";
import ReactDOM from "react-dom/client";
import App from "./ِApp/App";
import "./index.css";
import fontAwesomeIcons from "./FontAwesomeIcons/fontAwesomeIcons";
import { BrowserRouter } from "react-router-dom";

// Custom method help us to use Font Awesome Icons
fontAwesomeIcons();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

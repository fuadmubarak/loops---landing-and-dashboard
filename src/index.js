import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "../src/pages/landing-page/land.css";
import "../src/pages/dashboard/dash.css";
import "./index.css";
import "antd/dist/antd.min.css";
import "@assets/css/tailwind.css";
import "@assets/css/antd.less";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <>

            <BrowserRouter>
                <App />
            </BrowserRouter>

    </>
);

reportWebVitals();

import React from "react";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { ConfigProvider } from "antd";

import "./scss/app.scss";
import "./pages/Customer/Customer.css";
import "./pages/Dashboard/Dashboard.css";
// import "./pages/Dashboard/components/TableJarentry.css";

import antdTheme from "./theme/antdTheme";

import AppRoutes from "./routes";

import { AppLayout } from "./container";

const App = () => {
  return (
    <ConfigProvider theme={antdTheme}>
      <HelmetProvider>
        <div className="app-wrapper">
          <BrowserRouter>
            <AppLayout>
              <AppRoutes />
            </AppLayout>
          </BrowserRouter>
        </div>
      </HelmetProvider>
    </ConfigProvider>
  );
};

export default App;

import React, { Suspense } from "react";

import { Navigate, Route, Routes } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import _ from "lodash";

import * as routes from "./routes";
import { Loader } from "../shared/components";
import { _nav } from "../constants";

import { useAppSelector } from "../hooks";
import { selectUser } from "../features/auth/authSlice";

const renderRoutes = (nav) => {
  const result = [];

  _.map(nav, (route) => {
    if (!route.component) return;

    const RouteComponent = routes[route.component];

    if (!RouteComponent) return;

    result.push(
      <Route key={uuidv4()} path={route.route} element={<RouteComponent />} />
    );
  });

  return result;
};

const AppRoutes = () => {
  const user = useAppSelector(selectUser);

  let route = (
    <React.Fragment>
      {renderRoutes(_nav)}
      <Route
        key={uuidv4()}
        path="*"
        element={<Navigate to="/dashboard" replace />}
      />
    </React.Fragment>
  );

  let loaderHeight = 10;

  if (!user) {
    route = (
      <React.Fragment>
        <Route path="/" element={<routes.BusinessApp />} />
        <Route path="/login" element={<routes.Login />} />
        <Route path="/signup" element={<routes.Signup />} />
        <Route path="/storeregister" element={<routes.StoreRegistration />} />
        <Route path="/signupclient" element={<routes.Signupclient />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </React.Fragment>
    );
    loaderHeight = 100;
  }

  return (
    <Suspense fallback={<Loader height={loaderHeight} />}>
      <Routes>{route}</Routes>
    </Suspense>
  );
};

export default AppRoutes;

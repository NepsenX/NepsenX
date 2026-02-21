import React from "react";
import Home from "./components/home";
import Product from "./components/product";
import Profile from "./components/profile";
import Notification from "./components/notification";
import Settings from "./components/settings";
import Login from "./components/Login";

// NepsenX V2.0 Route Mapping Engine
// This handles the navigation logic and connects components to the server gateway
export const routes = {
  home: <Home />,
  product: <Product />,
  profile: <Profile />,
  notification: <Notification />,
  settings: <Settings />,
  login: <Login onLogin={() => {}} />,
};

export type RoutePath = keyof typeof routes;

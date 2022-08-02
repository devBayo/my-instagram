import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ServiceWorker.register();
//Cache cdn files and external links
workbox.routing.registerRoute(
  new RegExp("https:.*.(css|js|json|)"),
  new workbox.strategies.NetworkFirst({ cacheName: "external-cache" })
);

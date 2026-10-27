/**
 * Application entry point.
 * Mounts React into <div id="root"> (see index.html) and wraps the app with the router.
 */
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  // StrictMode runs extra development-only checks (double-invoked effects etc.)
  <StrictMode>
    {/*
      HashRouter keeps the route after a "#" (e.g. /#/design-system).
      We use it because the production build is ONE static index.html file:
      the server never needs rewrite rules, so refreshing a route still works.
      On a server with SPA rewrites you can swap this for <BrowserRouter>.
    */}
    <HashRouter>
      <App />
    </HashRouter>
  </StrictMode>,
);

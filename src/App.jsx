/**
 * Root component: global providers + the route table.
 */
import { Route, Routes } from "react-router-dom";
import { ShopProvider } from "./context/ShopContext";
import { PATHS } from "./routes/paths";
import HomePage from "./pages/HomePage";
import DesignSystemPage from "./pages/DesignSystemPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    // ShopProvider makes the cart state available to every component below
    <ShopProvider>
      <Routes>
        <Route path={PATHS.home} element={<HomePage />} />
        <Route path={PATHS.designSystem} element={<DesignSystemPage />} />
        {/* "*" matches anything not listed above -> 404 page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </ShopProvider>
  );
}

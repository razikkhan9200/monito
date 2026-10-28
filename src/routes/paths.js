/**
 * Single source of truth for route paths and the main menu.
 * Navbar and Logo import from here, so a path is only ever typed once.
 */

export const PATHS = {
  home: "/",
  designSystem: "/design-system",
};

/**
 * Main navigation links.
 *  - `label` : text shown in the menu (also used to mark the active link)
 *  - `to`    : the route to open
 *
 * Add a new page = add a route in App.jsx + one line here.
 */
export const NAV_LINKS = [
  { label: "Home", to: PATHS.home },
  { label: "Category", to: "/#pets" },
  { label: "About", to: "/#adopt" },
  { label: "Contact", to: "/#subscribe" },
];

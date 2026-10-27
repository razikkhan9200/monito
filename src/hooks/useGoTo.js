/**
 * useGoTo - navigate from code (e.g. inside a button onClick).
 *
 * Usage:
 *   const goTo = useGoTo();
 *   goTo("/design-system");
 *
 * For normal links prefer <Link to="..." />. Use this hook only for buttons.
 */
import { useNavigate } from "react-router-dom";

export function useGoTo() {
  const navigate = useNavigate();

  return (to) => navigate(to);
}

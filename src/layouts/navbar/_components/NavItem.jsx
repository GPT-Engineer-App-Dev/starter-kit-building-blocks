import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

export const NavItem = ({ to, children, className }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "transition-colors text-white",
        isActive
          ? "font-bold"
          : "hover:text-purple-200",
        className,
      )
    }
  >
    {children}
  </NavLink>
);

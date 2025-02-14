import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { tv } from "tailwind-variants";

const SidebarButton = ({ children, to }) => {
  const sidebar = tv({
    base: "flex items-center gap-2 rounded-lg px-1 py-1 lg:px-6 lg:py-3",
    variants: {
      color: {
        selected: "bg-brand-primary bg-opacity-15 text-brand-primary",
        unselected: "text-brand-dark-blue",
      },
    },
  });

  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        sidebar({ color: isActive ? "selected" : "unselected" })
      }
    >
      {children}
    </NavLink>
  );
};

SidebarButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["selected", "unselected"]),
  href: PropTypes.string,
};

export default SidebarButton;

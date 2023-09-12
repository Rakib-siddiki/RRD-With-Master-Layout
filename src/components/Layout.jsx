import {NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const Layout = ({children}) => {
  return (
    <>
      <div>
        <ul style={{ display: "flex", listStyle: "none" }}>
          <li style={{ marginLeft: "10px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/home"
            >
              Home
            </NavLink>
          </li>
          <li style={{ marginLeft: "10px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/about"
            >
              About
            </NavLink>
          </li>
          <li style={{ marginLeft: "10px" }}>
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/contact"
            >
              Contact
            </NavLink>
          </li>
        </ul>
        {children}
      </div>
    </>
  );
};

export default Layout;

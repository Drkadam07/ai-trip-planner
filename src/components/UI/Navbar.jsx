import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoSVG from "../../assets/svgs/logo.svg";

function Navbar() {
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState(pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <nav
      className="
      navbar flex gap-2 lg:gap-32 justify-between items-center w-full p-2 lg:p-4
      bg-[url('./assets/svgs/navbarWaveSVG.svg')]"
    >
      <div className="logo-div">
        <Link to="/">
          <img src={LogoSVG} />
        </Link>
      </div>
      <div className="nav-div flex justify-center items-center flex-grow rounded-full p-2 bg-neutral-50 shadow-inner">
        <ul className="nav-list flex w-fit gap-4 lg:gap-8">
          <NavItem
            name="New Trip"
            path="/app/new-trip"
            activePath={activePath}
          />
          <NavItem
            name="My Trips"
            path="/app/my-trips"
            activePath={activePath}
          />
        </ul>
      </div>
      <div className="end-button-div">
        {isLoggedIn ? (
          <EndButton name="Logout" path="/login" />
        ) : (
          <EndButton name="Login" path="/login" />
        )}
      </div>
    </nav>
  );
}

const NavItem = ({ name, path, activePath }) => {
  const isActiveItem = path === activePath;
  return (
    <li
      className={`nav-item underline-offset-4 ${
        isActiveItem ? "underline" : "underline-none"
      }`}
    >
      <Link to={path}>{name}</Link>
    </li>
  );
};

const EndButton = ({ name, path }) => {
  return (
    <Link
      to={path}
      className="rounded-full py-2 px-4 bg-neutral-800 text-white"
    >
      {name}
    </Link>
  );
};

export default Navbar;

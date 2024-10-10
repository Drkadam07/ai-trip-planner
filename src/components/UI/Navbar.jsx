import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoSVG from "../../assets/svgs/logo.svg";
import {
  MdCardTravel,
  MdOutlineFolder,
  MdLogin,
  MdLogout,
} from "react-icons/md";
import useMediaQuery from "@mui/material/useMediaQuery";

function Navbar() {
  const { pathname } = useLocation();
  const [activePath, setActivePath] = useState(pathname);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isMobileDevice = useMediaQuery("(max-width:768px)");
  const [isMobile, setIsMobile] = useState(isMobileDevice);

  useEffect(() => {
    setIsMobile(isMobileDevice);
  }, [isMobileDevice]);

  useEffect(() => {
    setActivePath(pathname);
  }, [pathname]);

  return (
    <nav
      className={`
      navbar flex gap-2 lg:gap-32 justify-between items-center w-full p-2 lg:p-4
      bg-[url('./assets/svgs/navbarWaveSVG.svg')]
      ${isMobile && "fixed bottom-0 left-0 z-50"}
      `}
    >
      <div className="logo-div">
        <Link to="/">
          <img src={LogoSVG} className={`${isMobile && "h-8"}`} />
        </Link>
      </div>
      <div
        className={`nav-div flex ${
          isMobile ? "" : "flex-grow"
        } justify-center items-center rounded-full p-2 bg-neutral-50 shadow-inner`}
      >
        <ul className="nav-list flex w-fit gap-16 px-8 md:gap-8 md:px-0 text-2xl md:text-sm">
          <NavItem
            name="New Trip"
            path="/app/new-trip"
            activePath={activePath}
            icon={<MdCardTravel />}
            isMobile={isMobile}
          />
          <NavItem
            name="My Trips"
            path="/app/my-trips"
            activePath={activePath}
            icon={<MdOutlineFolder />}
            isMobile={isMobile}
          />
        </ul>
      </div>
      <div className="end-button-div">
        <EndButton isLoggedIn={isLoggedIn} isMobile={isMobile} />
      </div>
    </nav>
  );
}

const NavItem = ({ name, path, activePath, isMobile, icon }) => {
  const isActiveItem = path === activePath;
  return (
    <li
      className={
        isMobile
          ? `nav-item rounded-full p-2 ${
              isActiveItem ? "bg-neutral-200" : "bg-none"
            }`
          : `nav-item underline-offset-4 ${
              isActiveItem ? "underline" : "underline-none"
            }`
      }
    >
      <Link to={path}>{isMobile ? icon : name}</Link>
    </li>
  );
};

const EndButton = ({ isMobile, isLoggedIn }) => {
  const icon = isLoggedIn ? <MdLogout /> : <MdLogin />;
  const name = isLoggedIn ? "Logout" : "Login";
  const path = isLoggedIn ? "/app/my-trips" : "/auth/login";

  return (
    <Link
      to={path}
      className={
        isMobile
          ? "end-button-mobile text-2xl"
          : "rounded-full py-2 px-4 bg-neutral-800 text-white"
      }
    >
      {isMobile ? icon : name}
    </Link>
  );
};

export default Navbar;

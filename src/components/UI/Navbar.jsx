import { Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import LogoSVG from "../../assets/svgs/logo.svg";
import {
  MdCardTravel,
  MdOutlineFolder,
  MdLogin,
  MdLogout,
} from "react-icons/md";
import { FaRegUserCircle, FaHome } from "react-icons/fa";
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
    <>
      <nav
        className={`
          navbar flex gap-2 lg:gap-32 justify-around items-center w-full p-2 lg:p-4 bg-contain
      fixed top-0 left-0 right-0
            ${
              isMobile
                ? "fixed bottom-0 left-0 right-0 bg-[url('./assets/svgs/navBarWaveMobile.svg')]"
                : " bg-[url('./assets/svgs/navbarWaveSVG.svg')]"
            }
      z-50
      `}
      >
        <div
          className={`logo-div text-2xl ${
            isMobile && "bg-white rounded-full p-2"
          }`}
        >
          <Link to="/">{isMobile ? <FaHome /> : <img src={LogoSVG} />}</Link>
        </div>
        <div
          className={`nav-div flex ${
            isMobile ? "" : "flex-grow"
          } justify-center items-center rounded-full p-2 bg-neutral-50 shadow-inner`}
        >
          <ul className="nav-list flex w-fit gap-8 px-8 md:gap-8 md:px-0 text-2xl md:text-sm">
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
            <NavItem
              name="Profile"
              path="/app/profile"
              activePath={activePath}
              icon={<FaRegUserCircle />}
              isMobile={isMobile}
            />
          </ul>
        </div>
        <div className="end-button-div grid place-items-center">
          <EndButton isLoggedIn={isLoggedIn} isMobile={isMobile} />
        </div>
      </nav>
    </>
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
  const path = isLoggedIn ? "/app/my-trips" : "/login";

  return (
    <Link
      to={path}
      className={
        isMobile
          ? "end-button-mobile text-2xl bg-white rounded-full p-2"
          : "rounded-full py-2 px-4 bg-neutral-800 text-white"
      }
    >
      {isMobile ? icon : name}
    </Link>
  );
};

export default Navbar;

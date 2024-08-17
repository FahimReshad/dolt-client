import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Navbar = () => {
  const {user, logOut} = useContext(AuthContext);
  console.log(user);
  const [dropDownState, setDropDownState] = useState(false);
  const dropDownMenuRef = useRef();

  const handleLogout = () => {
    logOut()
    .then(() => {})
    .catch(error => console.error(error))
  }

  useEffect(() => {
    const closeDropDown = (e) => {
      if (!dropDownMenuRef?.current?.contains(e?.target)) {
        setDropDownState(false);
      }
    };

    document.addEventListener("mousedown", closeDropDown);

    return () => {
      document.removeEventListener("mousedown", closeDropDown);
    };
  }, []);
  return (
    <nav className="flex items-center justify-between bg-[#262626] px-4 py-2 text-white">
      <Link to='/'><div className="scale-100 cursor-pointer rounded-2xl px-3 py-2 text-xl font-semibold text-white transition-all duration-200 hover:scale-110">
        <img className="w-36 h-10" src="https://i.ibb.co/gSP7qyy/Logo-for-web.gif" alt="logo" />
      </div></Link>
      <ul className="hidden items-center justify-between gap-10 md:flex">
  {user ? (
    <><li onClick={handleLogout} className="group flex cursor-pointer flex-col">
    LogOut
    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
  </li></>
  ) : (
    <>
      <NavLink to="/login">
        <li className="group flex cursor-pointer flex-col">
          Login
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </NavLink>
      <NavLink to="/register">
        <li className="group flex cursor-pointer flex-col">
          Register
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </NavLink>
    </>
  )}
</ul>

      <div
        ref={dropDownMenuRef}
        onClick={() => setDropDownState(!dropDownState)}
        className="relative flex transition-transform md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="cursor-pointer"
        >
          {" "}
          <line x1="4" x2="20" y1="12" y2="12" />{" "}
          <line x1="4" x2="20" y1="6" y2="6" />
          <line x1="4" x2="20" y1="18" y2="18" />{" "}
        </svg>
        {dropDownState && (
          <ul className="z-10  gap-2  bg-[#393E46]  absolute right-0 top-11 flex w-[200px] flex-col rounded-lg  text-base">
             {user ? (
    <><li onClick={handleLogout} className="group flex cursor-pointer flex-col ml-2">
    LogOut
    <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
  </li></>
  ) : (
    <>
      <NavLink to="/login">
        <li className="group flex cursor-pointer flex-col ml-2">
          Login
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </NavLink>
      <NavLink to="/register">
        <li className="group flex cursor-pointer flex-col ml-2">
          Register
          <span className="mt-[2px] h-[3px] w-[0px] rounded-full bg-sky-500 transition-all duration-300 group-hover:w-full"></span>
        </li>
      </NavLink>
    </>
  )}
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

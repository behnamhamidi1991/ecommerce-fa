import React from "react";
import "./header.css";
import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { MdKeyboardArrowUp } from "react-icons/md";
import MegaMenu from "./MegaMenu/MegaMenu";

const Header = () => {
  return (
    <div className="headerWrapper">
      <header className="header">
        <div className="headerRight">
          <Link to="/" className="headerLogo">
            <img src={logo} alt="logo" />
          </Link>
          <ul className="headerLinks">
            <li>
              <Link to="/" className="navLinks">
                صفحه اصلی
              </Link>
            </li>
            <li>
              <button className="navLinks">
                <MdKeyboardArrowDown />
                دسترسی آسان
              </button>
            </li>
            <li>
              <Link to="/" className="navLinks">
                درباره ما
              </Link>
            </li>
            <li>
              <Link to="/" className="navLinks">
                تماس با ما
              </Link>
            </li>
          </ul>
        </div>

        <div className="headerLeft">
          <FaUser className="headerLeftIcons" />
          <FaShoppingCart className="headerLeftIcons" />
        </div>
      </header>
      <MegaMenu />
    </div>
  );
};

export default Header;

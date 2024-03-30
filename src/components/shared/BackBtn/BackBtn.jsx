import React from "react";
import { AiFillHome } from "react-icons/ai";
import { Link } from "react-router-dom";
import "./backbtn.css";

const BackBtn = () => {
  return (
    <Link to="/" className="backBtn">
      بازگشت به صفحه اصلی
      <AiFillHome className="backBtnIcon" />
    </Link>
  );
};

export default BackBtn;

import React from "react";
import "./error.css";
import { Link, useRouteError } from "react-router-dom";
import BackBtn from "../../components/shared/BackBtn/BackBtn";

const Error = () => {
  const error = useRouteError();

  return (
    <div className="errorPage">
      <h1>{error.status}</h1>
      <h2>متاسفیم!</h2>
      <p className="errorMessage">حین انجام عملیات خطایی پیش آمد. پیغام خطا:</p>
      <p className="errorData">{error.data}</p>
      <BackBtn />
    </div>
  );
};

export default Error;

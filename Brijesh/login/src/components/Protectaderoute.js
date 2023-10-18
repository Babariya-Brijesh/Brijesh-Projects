import React from "react";

import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Protectaderoute(props) {
  const { Component } = props;

  const data = useSelector((state) => state.dataReducer);

  return data[0]?.isLogin ? <Component /> : <Navigate to="/login" />;
}

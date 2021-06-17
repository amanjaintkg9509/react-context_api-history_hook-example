import React, { useState, useContext } from "react";
import { ThemeContext } from "../Context/themeContext";
import Child from "./child";
import ContactUs from "./contactus";

export default function Home() {
  const theme = useContext(ThemeContext);
  return <div className={theme}>Home Component</div>;
}

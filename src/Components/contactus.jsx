import React, { useContext } from "react";
import { ThemeContext } from "../Context/themeContext";

const Contactus = () => {
  const theme = useContext(ThemeContext);
  return <div className={theme}>ContactUs Page</div>;
};

export default Contactus;

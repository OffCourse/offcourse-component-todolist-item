import React from "react";
import Example from "./example.jsx";

const baseUnit = 30;

const baseFont = {
  family: "Helvetica",
  size: (baseUnit / 30) * 16
};

const colors = {
  primary: "#E6E600"
};

const theme = { baseUnit, baseFont, colors};

React.render(<Example theme={ theme }/>, document.body);

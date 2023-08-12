import React from "react";
import ReactDOM from "react-dom/client";

import Board from './Board';
import { observe } from "./Game";
import Slot from "./MyDemo/Slot";
import DataRow from "./MyDemo/DataRow";
import MyDemo from "./MyDemo/MyDemo";

const root = ReactDOM.createRoot(document.getElementById("root"));
// observe((knightPosition) => root.render(<Board knightPosition={knightPosition} />));
root.render(<MyDemo />);

import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { Global, css } from "@emotion/react";
import { AppRouter } from "./routes";
import { colors } from "./assets";
import { MylistContext } from "./context";

const globalStyles = css`
  * {
    box-sizing: border-box;
  }
  body {
    background-color: ${colors.body}
  }
  @keyframes shine {
    to {
      background-position-x: -200%;
    }
  }
`;

export default function App() {
  const [mylistValue, setMylistValue] = useState([]);

  return (
    <MylistContext.Provider value={{ mylist: mylistValue, setMylist: (item) => setMylistValue(item) }}>
      <BrowserRouter>
        <Global styles={globalStyles} />
        <AppRouter />
      </BrowserRouter>
    </MylistContext.Provider>
  );
}
import { createContext } from "react";

export const MylistContext = createContext({
  mylist: [],
  setMylist: (i) => {}
});
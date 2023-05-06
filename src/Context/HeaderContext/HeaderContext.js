import {createContext} from "react";

const HeaderContext = createContext({
  burger: false,
  handleBurger: Function.prototype,
  setBurger: Function.prototype
})

export default HeaderContext

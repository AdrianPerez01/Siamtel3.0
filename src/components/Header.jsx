import React from "react";
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";
import { Link } from "react-router-dom";
import  Navar  from "./Navar"

const Header = () => {
  return (
    // <header className="h-[7vh] md:h-[10vh] border-b border-secondary-100 p-8 flex items-center justify-end"></header>
      <Navar></Navar>
    
  );
};

export default Header;

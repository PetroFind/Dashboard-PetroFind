import React, { useState, useEffect } from "react";

import { Container, Header } from "./styles";

import { MdMenuOpen } from "react-icons/md";

import Dropdown from "./components/dropdown";
import DropdownPage from "./components/dropdownPage";
import Title from "./components/title";

const Menu = () => {
  return (
    <Container>
      <Header>
      <div>teste</div>
        <MdMenuOpen size={24} />
      </Header>
      <Title title="página principal" />
      <Dropdown />
      <Title title="todas páginas" />
      <DropdownPage/>
    </Container>
  );
};

export default Menu;

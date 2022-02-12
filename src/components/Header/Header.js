import Link from "next/link";
import React from "react";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import {
  Container,
  Logo,
  Menu,
  Social,
  NavLink,
  SocialIcons,
  Span,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Menu>
      <li>
        <Link href="#home">
          <NavLink>HOME</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects">
          <NavLink>PROJECT</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>TECHNOLOGIES</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#about">
          <NavLink>ABOUT</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#contact">
          <NavLink>CONTACT</NavLink>
        </Link>
      </li>
    </Menu>
  </Container>
);

export default Header;

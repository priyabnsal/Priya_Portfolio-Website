import React, { useContext } from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { ThemeContext } from "providers/ThemeProvider";
import ToggleTheme from "components/theme/Header/ToggleTheme";
import { Wrapper } from "./styles";

const NavbarLinks = ({ desktop }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <Wrapper desktop={desktop} theme={theme}>
      <div className='menu'>
        {/* ----------------- Added 2 new links by priya-------------------------------------- */}
        <AnchorLink href='#skills'>Skills</AnchorLink>
        {/* <AnchorLink href='#edu'>Education</AnchorLink> */}
        <AnchorLink href='#projects'>Projects</AnchorLink>
        <AnchorLink href='#contact'>Contact</AnchorLink>
        <ToggleTheme />
      </div>
    </Wrapper>
  );
};

export default NavbarLinks;

import { Fragment, useState, useEffect } from "react";
import styled from "styled-components";
import Header from "../Components/Header/Header";
import Navigation from "../Components/Navigation/Navigation";
import Router from "../Container/Router";
const Root = styled.div`
  @media screen and (min-width: 950px) {
    padding-left: ${props => props.small ? "4%" : "240px"};
    max-width: 100%;
  }
  -webkit-box-flex: 1;
  flex-grow: 1;
  margin-top: 64px;
  transition: margin-top 0.2s ease 0s,
    margin-left 0.2s cubic-bezier(0.4, 0, 0.2, 1) 0s;
  transform: translate3d(0px, 0px, 0px);
  max-width: 100%;
`;
const Layout = () => {
  const [smallMenu, setSmallMenu] = useState();
  useEffect(() => {
    let width = window.innerWidth;
    if (width <= 950) {
      setSmallMenu(true);
    } else {
      setSmallMenu(false);
    }
    console.log(smallMenu);
  }, []);
  const handleMenu = () => {
    setSmallMenu(!smallMenu);
    console.log(smallMenu);
  };
  return (
    <Fragment>
      {window.innerWidth <= 950 && !smallMenu && (
        <div className="backmenu"></div>
      )}
      <Header handle={handleMenu} state={smallMenu} />
      <Navigation state={smallMenu} />
      <Root small={smallMenu}>
        <Router />
      </Root>
    </Fragment>
  );
};
export default Layout;

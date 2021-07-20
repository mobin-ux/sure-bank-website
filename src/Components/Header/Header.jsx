import { useState, useEffect } from "react";
import styled from "styled-components";
import Button from "../Common/Button";
import Logo from "../../Assets/Images/sblogo-center.png";
const HeaderS = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  transition: top 0.2s ease 0s;
  display: flex;
  -webkit-box-pack: justify;
  justify-content: space-between;
  -webkit-box-align: center;
  align-items: center;
  padding-left: 8px;
  padding-right: 16px;
  width: 100%;
  height: 64px;
  background-color: rgb(98, 54, 255);
  border-bottom: 2px solid rgba(133, 133, 133, 0.1);
  z-index: 20;
  transform: translate3d(0px, 0px, 0px);
  & > div {
    display: flex;
  }
  & > div > div {
    margin-right: 20px;
  }
  button {
    font-size: 16px;
    font-weight: 600;
    padding: 0px 8px;
    margin-right: 24px;
  }
  svg {
    align-self: center;
    fill: rgb(255, 255, 255);
    flex-shrink: 0;
  }
  .right-btn {
    height: 32px;
  }
  img {
    width: 130px;
  }
`;
const Header = (props) => {
  return (
    <HeaderS>
      <div>
        <Button boxShadow="none" backgroup="transparent" onClick={props.handle}>
          {props.state ? (
            <svg
              viewBox="0 0 24 24"
              width="24px"
              color="textSubtle"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM OCaiv"
            >
              <path d="M4 18H20C20.55 18 21 17.55 21 17C21 16.45 20.55 16 20 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H20C20.55 13 21 12.55 21 12C21 11.45 20.55 11 20 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H20C20.55 8 21 7.55 21 7C21 6.45 20.55 6 20 6H4C3.45 6 3 6.45 3 7Z"></path>
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              width="24px"
              color="textSubtle"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM OCaiv"
            >
              <path d="M4 18H15C15.55 18 16 17.55 16 17C16 16.45 15.55 16 15 16H4C3.45 16 3 16.45 3 17C3 17.55 3.45 18 4 18ZM4 13H12C12.55 13 13 12.55 13 12C13 11.45 12.55 11 12 11H4C3.45 11 3 11.45 3 12C3 12.55 3.45 13 4 13ZM3 7C3 7.55 3.45 8 4 8H15C15.55 8 16 7.55 16 7C16 6.45 15.55 6 15 6H4C3.45 6 3 6.45 3 7ZM20.3 14.88L17.42 12L20.3 9.12C20.69 8.73 20.69 8.1 20.3 7.71C19.91 7.32 19.28 7.32 18.89 7.71L15.3 11.3C14.91 11.69 14.91 12.32 15.3 12.71L18.89 16.3C19.28 16.69 19.91 16.69 20.3 16.3C20.68 15.91 20.69 15.27 20.3 14.88Z"></path>
            </svg>
          )}
        </Button>
        <span>
          <img src={Logo} alt="" />
        </span>
      </div>
      <div>
        <div>
          <Button
            backgroup="#fff"
            boxShadow="rgb(14 14 44 / 40%) 0px -1px 0px 0px inset"
            color="#6236ff"
            class="right-btn"
          >
            Connect
          </Button>
        </div>
      </div>
    </HeaderS>
  );
};
export default Header;

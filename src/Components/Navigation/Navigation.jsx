import styled from "styled-components";
import List from "./List";
const NavigationS = styled.div`
  position: fixed;
  padding-top: 80px;
  top: 0px;
  left: 0px;
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: space-between;
  flex-shrink: 0;
  background-color: rgb(98, 54, 255);
  height: 100%;
  z-index: 11;
  overflow: initial;
  transform: translate3d(0px, 0px, 0px);
  transition: 0.3s;
  width: ${(props) => props.status ? "240px" : "4%"};
  @media (max-width: 950px) {
    width: ${(props) => props.status ? "240px" : "0%"};
  }
  & > div.list {
    display: flex;
    flex-direction: column;
    overflow: hidden auto;
    height: 100%;
    position: relative;

    ::-webkit-scrollbar-track {
      box-shadow: rgb(255 255 255) 0px 0px 20px inset;
      border-radius: 10px;
    }
    ::-webkit-scrollbar-thumb {
      background: rgba(98, 54, 255, 0.55);
      border-radius: 8px;
    }
    ::-webkit-scrollbar {
      width: 8px;
    }
    & > div {
      & > a > div {
        display: ${(props) => props.status ? "flex" : "none"};
      }
      & > div > div {
        display: ${(props) => props.status ? "flex" : "none"};
        
      }
      & svg:last-child {
        display: ${(props) => props.status ? "inline" : "none"};
      }

      color: white;
      cursor: pointer;
      -webkit-box-align: center;
      align-items: center;
      height: 48px;
      padding: 0px 16px;
      font-size: 16px;
      background-color: transparent;
      color: white;
      box-shadow: rgb(98 54 255) 4px 0px 0px inset;
      flex-shrink: 0;
    }
  }
`;
const Navigation = (props) => {
  return (
    <NavigationS status={!props.state}>
      <div className="list">
        <List click={props.clickMenu} />
      </div>
    </NavigationS>
  );
};
export default Navigation;

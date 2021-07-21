import { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import farm from "../../Assets/Images/farm_icon.png";
import blog from "../../Assets/Images/blog_icon.png";
import info from "../../Assets/Images/info_icon.png";
import contact from "../../Assets/Images/contact_icon.png";
import dollor from "../../Assets/Images/surecrypto_white.png";
const ListS = styled.div`
margin: 5px 0;
  img,
  svg {
    width: 19px;
    height: 19px
  }
  svg {
    fill: white;
  }
  a {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    height: 100%;
  }
  div {
    color: rgb(255, 255, 255);
    transition: color 0.4s ease 0s;
    -webkit-box-flex: 1;
    flex-grow: 1;
    margin-left: 20px;
  }
`;
const items = [
  {
    title: "Home",
    image: (
      <svg
        viewBox="0 0 24 24"
        width="24px"
        color="text"
        xmlns="http://www.w3.org/2000/svg"
        class="sc-bdnxRM exjgGx"
      >
        <path d="M9.99998 19V14H14V19C14 19.55 14.45 20 15 20H18C18.55 20 19 19.55 19 19V12H20.7C21.16 12 21.38 11.43 21.03 11.13L12.67 3.59997C12.29 3.25997 11.71 3.25997 11.33 3.59997L2.96998 11.13C2.62998 11.43 2.83998 12 3.29998 12H4.99998V19C4.99998 19.55 5.44998 20 5.99998 20H8.99998C9.54998 20 9.99998 19.55 9.99998 19Z"></path>
      </svg>
    ),
    url: "/",
    isSvg: true,
  },
  {
    title: "Farms",
    image: farm,
    url: "/farm",
    isSvg: false,
  },
  {
    title: "Blog",
    image: blog,
    url: "/",
    isSvg: false,
  },
  {
    title: "Info/State",
    image: info,
    url: "/",
    isSvg: false,
  },
  {
    title: "Contact",
    image: contact,
    url: "/",
    isSvg: false,
  },
  {
    title: "Comming soon",
    image: (
      <svg
        viewBox="0 0 24 24"
        width="24px"
        color="text"
        xmlns="http://www.w3.org/2000/svg"
        className="svg"
      >
        <path d="M6 10C4.9 10 4 10.9 4 12C4 13.1 4.9 14 6 14C7.1 14 8 13.1 8 12C8 10.9 7.1 10 6 10ZM18 10C16.9 10 16 10.9 16 12C16 13.1 16.9 14 18 14C19.1 14 20 13.1 20 12C20 10.9 19.1 10 18 10ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10Z"></path>
      </svg>
    ),
    url: "/",
    isSvg: true,
  },
];
const List = (props) => {
  return (
    <Fragment>
      {items.map((i, idx) => (
        <Fragment>
          {idx < 5 ? (
            <ListS>
              <Link onClick={props.click} to={i.url}>
                {i.isSvg ? i.image : <img src={i.image} />}
                <div>{i.title}</div>
              </Link>
            </ListS>
          ) : (
            <LastItem svg={i.image} click={props.click} url={i.url} title={i.title} />
          )}
        </Fragment>
      ))}
    </Fragment>
  );
};
const LastItemS = styled.div`
  height: ${props => props.show ? "auto" : "48px"} !important;
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-top: 15px;
  svg {
    fill: white;
  }
  & > div:not(.item) {
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    width: 100%;
    text-decoration: none;
    height: ${props => props.show ? "7%" : "100%"};
    & > div {
      margin-left: 20px;
      color: rgb(255, 255, 255);
      transition: color 0.4s ease 0s;
      -webkit-box-flex: 1;
      flex-grow: 1;
    }
  }
`;
const ItemNav = styled.div`
  position: absolute;
  bottom: 20px;
  left: 0;
  width: 100%;
  img {
    margin-right: 3px;
  }
  img,
  svg {
    height: 27px;
  }
  & > div {
    & div:first-child {
      display: flex;
      align-items: center;
    }
    display: flex;
    -webkit-box-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    justify-content: space-between;
    height: 48px;
    padding: 0px 16px;
    margin: 0;
    & div:last-child {
      svg {
        height: 27px;
      }
      & svg:first-child {
        align-self: center;
        fill: rgb(255, 255, 255);
        flex-shrink: 0;
        margin-right: 24px;
      }
    }
  }
  .language {
    display: flex;
    align-items: center;
    svg {
      margin-right: 5px !important;
    }
    span {
      display: inline-block;
      color: rgb(126, 113, 173);
    }
  }
`;
const SubItem = styled.div`
  width: calc(100% + 32px);
  height: ${(props) => (props.show ? "160px" : "auto")};
  overflow-y: ${(props) => (props.show ? "scroll" : "unset")};
  background: rgb(64, 33, 175);
  visibility: ${(props) => (props.show ? "unset" : "hidden")};
  z-index: 6;
  a {
    display: block;
    padding: 14px 32px;
    font-size: 14px;
    color: white;
    text-decoration: none;
  }
`;

const LastItem = (props) => {
  const [showSubMenu, setShowSubMenu] = useState(false);
  const handleSubMenu = () => {
    setShowSubMenu(!showSubMenu);
  };
  return (
    <LastItemS onClick={handleSubMenu} show={showSubMenu}>
      <div>
        {props.svg}
        <div>{props.title}</div>
        <svg
          viewBox="0 0 24 24"
          color="text"
          width="20px"
          xmlns="http://www.w3.org/2000/svg"
          class="sc-bdnxRM OCaiv"
        >
          <path d="M8.71005 11.71L11.3001 14.3C11.6901 14.69 12.3201 14.69 12.7101 14.3L15.3001 11.71C15.9301 11.08 15.4801 10 14.5901 10H9.41005C8.52005 10 8.08005 11.08 8.71005 11.71Z"></path>
        </svg>
      </div>
      <SubItem className="item" show={showSubMenu}>
        <Link onClick={props.click} to="/">NFT</Link>
        <Link onClick={props.click} to="/">Loan</Link>
        <Link onClick={props.click} to="/">Governance</Link>
        <Link onClick={props.click} to="/">Vote</Link>
        <Link onClick={props.click} to="/">Pool</Link>
      </SubItem>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ItemNav className="item">
        <div>
          <div>
            <img src={dollor} alt="" />
            $0.1
          </div>
          <div>
            <svg
              viewBox="0 0 24 24"
              width="24px"
              color="textSubtle"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM hVOjjL"
            >
              <path d="M12 3C7.02985 3 3 7.02985 3 11.9904C3 16.9606 7.02985 21 12 21C16.9701 21 21 16.9606 21 11.9904C21 7.02985 16.9701 3 12 3ZM16.4328 8.65139C16.3753 9.48614 14.8305 15.7228 14.8305 15.7228C14.8305 15.7228 14.7345 16.0874 14.3987 16.097C14.2836 16.097 14.1301 16.0874 13.9574 15.9243C13.6023 15.6269 12.7964 15.0512 12.0384 14.5235C12.0096 14.5522 11.9808 14.581 11.9424 14.6098C11.7697 14.7633 11.5107 14.984 11.2324 15.2527C11.1269 15.3486 11.0117 15.4542 10.8966 15.5693L10.887 15.5789C10.8198 15.6461 10.7623 15.694 10.7143 15.7324C10.3401 16.0394 10.3017 15.7804 10.3017 15.6461L10.5032 13.4488V13.4296L10.5128 13.4104C10.5224 13.3817 10.5416 13.3721 10.5416 13.3721C10.5416 13.3721 14.4659 9.87953 14.5714 9.50533C14.581 9.48614 14.5522 9.46695 14.5043 9.48614C14.2452 9.57249 9.72601 12.4318 9.22708 12.7484C9.19829 12.7676 9.11194 12.758 9.11194 12.758L6.91471 12.0384C6.91471 12.0384 6.65565 11.9328 6.742 11.693C6.76119 11.645 6.78998 11.597 6.89552 11.5299C7.38486 11.1844 15.8955 8.12367 15.8955 8.12367C15.8955 8.12367 16.1354 8.04691 16.2793 8.09488C16.3465 8.12367 16.3849 8.15245 16.4232 8.2484C16.4328 8.28678 16.4424 8.36354 16.4424 8.44989C16.4424 8.49787 16.4328 8.55544 16.4328 8.65139Z"></path>
            </svg>
            <svg
              viewBox="0 0 24 24"
              width="24px"
              color="textSubtle"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM OCaiv"
            >
              <path d="M8.65854 19C15.4488 19 19.1659 13.2338 19.1659 8.23717C19.1659 8.07728 19.1659 7.91739 19.1561 7.7475C19.878 7.21785 20.5024 6.5483 21 5.78881C20.3366 6.08861 19.6244 6.28847 18.8732 6.38841C19.6341 5.91872 20.2195 5.17921 20.5024 4.28981C19.7902 4.72951 19 5.03931 18.1512 5.20919C17.478 4.45969 16.522 4 15.4585 4C13.4195 4 11.761 5.69887 11.761 7.78747C11.761 8.08728 11.8 8.36709 11.8585 8.6469C8.79512 8.497 6.07317 6.97801 4.24878 4.68954C3.92683 5.25916 3.75122 5.90873 3.75122 6.59827C3.75122 7.90739 4.40488 9.06662 5.39024 9.74617C4.78537 9.72618 4.21951 9.5563 3.72195 9.27648C3.72195 9.28648 3.72195 9.30646 3.72195 9.32645C3.72195 11.1552 5 12.6942 6.67805 13.034C6.36585 13.1239 6.0439 13.1639 5.70244 13.1639C5.46829 13.1639 5.23415 13.1439 5.00976 13.0939C5.47805 14.6029 6.8439 15.6922 8.46341 15.7222C7.19512 16.7415 5.60488 17.3411 3.87805 17.3411C3.58537 17.3411 3.28293 17.3311 3 17.2911C4.62927 18.3704 6.57073 19 8.65854 19Z"></path>
            </svg>
          </div>
        </div>
        <div>
          <div>
            <svg
              viewBox="0 0 24 24"
              color="text"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM OCaiv"
            >
              <path d="M5.66 4.2L6.05 4.59C6.44 4.97 6.44 5.61 6.05 5.99L6.04 6C5.65 6.39 5.03 6.39 4.64 6L4.25 5.61C3.86 5.23 3.86 4.6 4.25 4.21L4.26 4.2C4.64 3.82 5.27 3.81 5.66 4.2Z"></path>
              <path d="M1.99 10.95H3.01C3.56 10.95 4 11.39 4 11.95V11.96C4 12.51 3.56 12.95 3 12.94H1.99C1.44 12.94 1 12.5 1 11.95V11.94C1 11.39 1.44 10.95 1.99 10.95Z"></path>
              <path d="M12 1H12.01C12.56 1 13 1.44 13 1.99V2.96C13 3.51 12.56 3.95 12 3.94H11.99C11.44 3.94 11 3.5 11 2.95V1.99C11 1.44 11.44 1 12 1Z"></path>
              <path d="M18.34 4.2C18.73 3.82 19.36 3.82 19.75 4.21C20.14 4.6 20.14 5.22 19.75 5.61L19.36 6C18.98 6.39 18.35 6.39 17.96 6L17.95 5.99C17.56 5.61 17.56 4.98 17.95 4.59L18.34 4.2Z"></path>
              <path d="M18.33 19.7L17.94 19.31C17.55 18.92 17.55 18.3 17.95 17.9C18.33 17.52 18.96 17.51 19.35 17.9L19.74 18.29C20.13 18.68 20.13 19.31 19.74 19.7C19.35 20.09 18.72 20.09 18.33 19.7Z"></path>
              <path d="M20 11.95V11.94C20 11.39 20.44 10.95 20.99 10.95H22C22.55 10.95 22.99 11.39 22.99 11.94V11.95C22.99 12.5 22.55 12.94 22 12.94H20.99C20.44 12.94 20 12.5 20 11.95Z"></path>
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6 11.95C6 8.64 8.69 5.95 12 5.95C15.31 5.95 18 8.64 18 11.95C18 15.26 15.31 17.95 12 17.95C8.69 17.95 6 15.26 6 11.95ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
              ></path>
              <path d="M12 22.9H11.99C11.44 22.9 11 22.46 11 21.91V20.95C11 20.4 11.44 19.96 11.99 19.96H12C12.55 19.96 12.99 20.4 12.99 20.95V21.91C12.99 22.46 12.55 22.9 12 22.9Z"></path>
              <path d="M5.66 19.69C5.27 20.08 4.64 20.08 4.25 19.69C3.86 19.3 3.86 18.68 4.24 18.28L4.63 17.89C5.02 17.5 5.65 17.5 6.04 17.89L6.05 17.9C6.43 18.28 6.44 18.91 6.05 19.3L5.66 19.69Z"></path>
            </svg>
            <div>/</div>
            <svg
              viewBox="0 0 24 24"
              color="textDisabled"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM OCaiv"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M4.1534 13.6089L4.15362 13.61C4.77322 16.8113 7.42207 19.3677 10.647 19.8853L10.6502 19.8858C13.0412 20.2736 15.2625 19.6103 16.9422 18.2833C11.3549 16.2878 7.9748 10.3524 9.26266 4.48816C5.69846 5.77194 3.35817 9.51245 4.1534 13.6089ZM10.0083 2.21054C4.76622 3.2533 1.09895 8.36947 2.19006 13.9901C2.97006 18.0201 6.28006 21.2101 10.3301 21.8601C13.8512 22.4311 17.0955 21.1608 19.2662 18.8587C19.2765 18.8478 19.2866 18.837 19.2968 18.8261C19.4385 18.6745 19.5757 18.5184 19.7079 18.3581C19.7105 18.355 19.713 18.3519 19.7156 18.3487C19.8853 18.1426 20.0469 17.9295 20.2001 17.7101C20.4101 17.4001 20.2401 16.9601 19.8701 16.9201C19.5114 16.8796 19.1602 16.8209 18.817 16.7452C18.7964 16.7406 18.7758 16.736 18.7552 16.7313C18.6676 16.7114 18.5804 16.6903 18.4938 16.6681C18.4919 16.6676 18.4901 16.6672 18.4882 16.6667C13.0234 15.2647 9.72516 9.48006 11.4542 4.03417C11.4549 4.03214 11.4555 4.03012 11.4562 4.0281C11.4875 3.92954 11.5205 3.83109 11.5552 3.73278C11.5565 3.72911 11.5578 3.72543 11.5591 3.72175C11.6768 3.38921 11.8136 3.05829 11.9701 2.73005C12.1301 2.39005 11.8501 2.01005 11.4701 2.03005C11.1954 2.04379 10.924 2.06848 10.6561 2.10368C10.6517 2.10427 10.6472 2.10486 10.6428 2.10545C10.4413 2.13221 10.2418 2.16492 10.0446 2.2034C10.0325 2.20576 10.0204 2.20814 10.0083 2.21054Z"
              ></path>
            </svg>
          </div>
          <div className="language">
            <svg
              viewBox="0 0 24 24"
              color="textSubtle"
              width="24px"
              xmlns="http://www.w3.org/2000/svg"
              class="sc-bdnxRM eOymEE"
            >
              <path d="M11.99 2C6.47 2 2 6.48 2 12C2 17.52 6.47 22 11.99 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 11.99 2ZM18.92 8H15.97C15.65 6.75 15.19 5.55 14.59 4.44C16.43 5.07 17.96 6.35 18.92 8ZM12 4.04C12.83 5.24 13.48 6.57 13.91 8H10.09C10.52 6.57 11.17 5.24 12 4.04ZM4.26 14C4.1 13.36 4 12.69 4 12C4 11.31 4.1 10.64 4.26 10H7.64C7.56 10.66 7.5 11.32 7.5 12C7.5 12.68 7.56 13.34 7.64 14H4.26ZM5.08 16H8.03C8.35 17.25 8.81 18.45 9.41 19.56C7.57 18.93 6.04 17.66 5.08 16ZM8.03 8H5.08C6.04 6.34 7.57 5.07 9.41 4.44C8.81 5.55 8.35 6.75 8.03 8ZM12 19.96C11.17 18.76 10.52 17.43 10.09 16H13.91C13.48 17.43 12.83 18.76 12 19.96ZM14.34 14H9.66C9.57 13.34 9.5 12.68 9.5 12C9.5 11.32 9.57 10.65 9.66 10H14.34C14.43 10.65 14.5 11.32 14.5 12C14.5 12.68 14.43 13.34 14.34 14ZM14.59 19.56C15.19 18.45 15.65 17.25 15.97 16H18.92C17.96 17.65 16.43 18.93 14.59 19.56ZM16.36 14C16.44 13.34 16.5 12.68 16.5 12C16.5 11.32 16.44 10.66 16.36 10H19.74C19.9 10.64 20 11.31 20 12C20 12.69 19.9 13.36 19.74 14H16.36Z"></path>
            </svg>
            <span>EN</span>
          </div>
        </div>
      </ItemNav>
    </LastItemS>
  );
};
export default List;

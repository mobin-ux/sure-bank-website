import {createPortal} from 'react-dom';
import {Link} from 'react-router-dom';
import {Fragment , useState} from 'react';
import styled from "styled-components";
import Cart from "./Cart";
import Button from '../Common/Button';
const FarmS = styled.div`
  & div.text {
    padding: 24px;
    background: linear-gradient(
      139.73deg,
      rgb(229, 253, 255) 0%,
      rgb(243, 239, 255) 100%
    );
    h1 {
      color: rgb(98, 54, 255);
      font-size: 40px !important;
      padding-bottom: 24px;
      text-align: left;
      font-weight: 600 !important;
    }
    p {
      color: rgb(32, 13, 97);
      font-size: 24px;
      font-weight: 600;
      text-align: left;
      line-height: 1.5;
    }
  }
  .items {
    padding: 24px;
    flex-flow: row wrap;
    display: flex;
    width: 100%;
    align-items: center;
    position: relative;
    justify-content: space-between;
    & > div{
      flex: 50%;
    }
    & > div:first-child {
      display: flex;
      justify-content: space-around;
    }
  }
  .stak {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
      position:relative;
      border-radius: 24px;
        outline: none;
        appearance: none;
        width: 35px;
        height: 20px;
        background: blue;
        margin-right: 8px;
        background:rgb(238, 234, 244);
      transition: 0.5s;

    }
    input::before {
      background:white;
      position: absolute;
      content: "";
      width:  18px;
      height: 18px;
      border-radius: 50%;
      top:  1px;
      left: 1px;
      transition: 0.5s;
    }
    input:checked::before {
      left: unset;
      transition: 0.5s;

      right: 1px;
    }

    input:checked {
      appearance: none;
        background: rgb(49, 208, 170);
    }
  }
  .input {
    display: flex;
    align-items: center;
    justify-content: center;
    label {
      color: rgb(32, 13, 97);
      font-size: 12px;
      font-weight: 400;
      line-height: 1.5;
      text-transform: uppercase;
    }
    & > div:last-child {
      input {
        background-color: rgb(238, 234, 244);
        border: 0px;
        border-radius: 16px;
        box-shadow: rgb(74 74 104 / 10%) 0px 2px 2px -1px inset;
        color: rgb(32, 13, 97);
        display: block;
        font-size: 16px;
        height: 40px;
        outline: 0px;
        padding: 0px 16px;
        width: 100%;
        &::placeholder {
          font-weight: 500;
        }
        &:focus:not(:disabled) {
          box-shadow: rgb(118 69 217) 0px 0px 0px 1px, rgb(118 69 217 / 60%) 0px 0px 0px 4px;
        }
      }
    }
  }
  .toggle {
    background: rgb(238, 234, 244);
    border-radius: 16px;
    border: 1px solid rgb(215, 202, 236);
    span {
      align-items: center;
      border: 0px;
      border-radius: 16px;
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      font-size: 16px;
      font-weight: 600;
      justify-content: center;
      letter-spacing: 0.03em;
      line-height: 1;
      opacity: 1;
      outline: 0px;
      transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
      height: 32px;
      padding: 0px 16px;
      background-color: transparent;
      color: rgb(126, 113, 173);
      &.active {
        color: white;
        background-color: rgb(126, 113, 173);
        box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;

      }
    }
  }
  @media(max-width: 950px){
    .items {
      & > div{
        flex: 100%;
        &:first-child {
          margin-bottom: 20px;
        }
      }
    }
  }
`;
const modalItem = (<div className="wallet"><p className="mb-0">TrustWallet</p> <svg viewBox="0 0 96 96" width="32px" color="text" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM OCaiv"><g clip-path="url(#svg1)"><path d="M48.0048 96.0097C74.5172 96.0097 96.0097 74.5172 96.0097 48.0048C96.0097 21.4925 74.5172 0 48.0048 0C21.4925 0 0 21.4925 0 48.0048C0 74.5172 21.4925 96.0097 48.0048 96.0097Z" fill="#3375BB"></path><path d="M48.0048 22.8922L49.3179 21.1833C48.9399 20.8928 48.4766 20.7354 48 20.7354C47.5233 20.7354 47.06 20.8928 46.682 21.1833L48.0048 22.8922ZM70.5783 29.5252H72.7313C72.7352 29.2396 72.6824 28.9561 72.576 28.6909C72.4696 28.4258 72.3118 28.1844 72.1116 27.9806C71.9114 27.7769 71.6729 27.6148 71.4097 27.5037C71.1465 27.3926 70.8639 27.3348 70.5783 27.3335V29.5252ZM48.0048 75.6377L46.8076 77.4335C47.1604 77.6697 47.5754 77.7958 48 77.7958C48.4245 77.7958 48.8395 77.6697 49.1924 77.4335L48.0048 75.6377ZM25.4506 29.5252V27.3625C25.165 27.3638 24.8824 27.4216 24.6192 27.5327C24.356 27.6437 24.1175 27.8058 23.9173 28.0096C23.7171 28.2134 23.5593 28.4548 23.4529 28.7199C23.3465 28.985 23.2937 29.2686 23.2976 29.5542L25.4506 29.5252ZM46.6917 24.5915C56.4626 32.1611 67.6528 31.6783 70.5879 31.6783V27.3625C67.5466 27.3625 57.8047 27.7487 49.3468 21.1833L46.6917 24.5915ZM68.4348 29.4866C68.2707 39.4892 67.8459 46.5471 67.0349 51.7704C66.2238 56.9938 65.1039 60.0448 63.6266 62.2268C62.1494 64.4089 60.257 65.8282 57.486 67.4792C54.715 69.1302 51.1716 70.9646 46.8076 73.8515L49.2406 77.4335C53.373 74.6818 56.8102 72.9246 59.7357 71.1771C62.6835 69.5717 65.2416 67.3367 67.228 64.6309C69.159 61.7344 70.4817 57.8724 71.3314 52.427C72.181 46.9815 72.6155 39.6534 72.7796 29.5542L68.4348 29.4866ZM49.2406 73.8515C44.9055 70.955 41.3718 69.1592 38.6201 67.4888C35.8684 65.8185 33.976 64.4861 32.4892 62.2268C31.0023 59.9676 29.7954 56.9648 28.9651 51.7704C28.1347 46.576 27.7678 39.4892 27.6037 29.4866L23.2976 29.5542C23.4617 39.6534 23.9058 47.0009 24.7458 52.427C25.5858 57.8531 26.8699 61.7151 28.8395 64.6309C30.8164 67.3382 33.3686 69.5739 36.3125 71.1771C39.2091 72.9246 42.6752 74.6818 46.8076 77.4335L49.2406 73.8515ZM25.4506 31.6783C28.3471 31.6783 39.547 32.1611 49.3179 24.5915L46.682 21.1833C38.2049 27.7487 28.463 27.3625 25.441 27.3625L25.4506 31.6783Z" fill="white"></path></g><defs><clipPath id="svg1"><rect width="96" height="96" fill="white"></rect></clipPath></defs></svg></div>);
const modalItemTwo = (<div className="stack">
  <div>
    <div>
      <p className="c-purple">Stake</p>
      <p className="c-purple">Balance: 0</p>
    </div>
    <div className="mb-0">
      <p className="c-purple">0</p>
      <p className="max">MAX</p>
      <p>SURE-BNB LP</p>
    </div>
  </div>
  <p>00.00LP</p>
  <div className="d-flex align-items-center justify-content-between">
    <Button>Cancel</Button>
    <Button class="disable">Confirm</Button>
  </div>
  <Link to="/">Get SURE-BNB LP</Link>
</div>);
const modal = document.querySelector(".my-modal");
const res = createPortal(<Fragment>
  <div className="content">
    <p>Connect a Wallet</p>
    <div className="wallet-select">
      {modalItem}
      {modalItem}
      {modalItem}
      {modalItem}
      {modalItem}
      {modalItem}
      {modalItem}
    </div>
    <Link className="wallet">Learn How to connect</Link>
  </div>
</Fragment>, modal)
const resTwo = createPortal(<Fragment>
  <div className="content">
  <p>Stake LP tokens</p>
    {modalItemTwo}
  </div>
</Fragment> , modal)
const Farm = () => {
  const [modal , setModal] = useState(false);
  const [modalTwo , setModalTwo] = useState(false);
  const handleModal = () => {
    setModal(!modal);
  }
  const handleModalTwo = () => {
    setModalTwo(!modalTwo);
  }
  return (
    <Fragment>
      {modalTwo && <Fragment>
        {resTwo}
        <div className="backmenu" onClick={handleModalTwo}></div>
        </Fragment>}
      {modal && <Fragment>
        {res}
        <div className="backmenu" onClick={handleModal}></div>
      </Fragment>}
    <FarmS>
      
      <div className="text">
        <h1 >Farms and Staking</h1>
        <p>Stake Sure or LP tokens to earn <span onClick={handleModalTwo}>(SHOW POPUP)</span></p>
      </div>
      <div className="items">
        <div>
          <div className="stak">
            <input type="checkbox" id="stack" />
            <label htmlFor="stack">Staked only</label>
          </div>
          <div className="toggle">
            <span className="active">Live</span>
            <span>Finished</span>
          </div>
        </div>
        <div className="input">
          <div>
            <label htmlFor="search" id="search">
              Search
            </label>
            <input type="text" placeholder="Search Farms" id="search" />
          </div>
        </div>
      </div>
      <div className="c">
      <div className="container">
        <div className="row ml-5">
          <Cart clickModal={handleModal} active />
          <Cart clickModal={handleModal} />
          <Cart clickModal={handleModal} />
          <Cart clickModal={handleModal} />
          <Cart clickModal={handleModal} />
          <Cart clickModal={handleModal} />
          <Cart clickModal={handleModal} />
        </div>
      </div>
      </div>
    </FarmS>
    </Fragment>
  );
};
export default Farm;

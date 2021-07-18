import styled from "styled-components";
import Cart from "./Cart";
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
    & > div {
      flex: 50%;
    }
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
`;
const Farm = () => {
  return (
    <FarmS>
      <div className="text">
        <h1>Farms and Staking</h1>
        <p>Stake Sure or LP tokens to earn</p>
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
            <label htmlFor="sort">Sort</label>
            <select name="" id="">
              <option value="">Hot</option>
              <option value="">etc</option>
            </select>
          </div>
          <div>
            <label htmlFor="search" id="search">
              Search
            </label>
            <input type="text" placeholder="Search Farms" id="search" />
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <Cart active />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
          <Cart />
        </div>
      </div>
    </FarmS>
  );
};
export default Farm;

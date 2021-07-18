import styled from "styled-components";
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
  }
  .stak {
    display: flex;
    align-items: center;
    justify-content: center;
    input {
        outline: none;
        appearance: none;
        width: 35px;
        height: 20px;
        background: blue;
        margin-right: 8px;
    }
    input:checked {
        background: red;
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
    & > div:first-child {
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
      box-shadow: rgb(14 14 44 / 40%) 0px -1px 0px 0px inset;
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
      background-color: rgb(126, 113, 173);
      color: rgb(255, 255, 255);
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
            <span>Live</span>
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
    </FarmS>
  );
};
export default Farm;

import styled from "styled-components";
import dollor from "../../Assets/Images/surecrypto.png";
import Button from "../Common/Button";
import social1 from "../../Assets/Images/social_1.png";
import social2 from "../../Assets/Images/social_2.png";
import social3 from "../../Assets/Images/social_3.png";
import social4 from "../../Assets/Images/social_4.png";
import social5 from "../../Assets/Images/social_5.png";
import social6 from "../../Assets/Images/social_6.png";
import social7 from "../../Assets/Images/social_7.png";
const HomeS = styled.div`
  .social {
    margin: 0 22px;
    height: 26px;
  }
  
  & div.title {
      h1 {
        margin-top: 160px;
      color: rgb(98, 54, 255);
      font-size: 40px !important;
      margin-bottom: 24px;
      text-align: center;
      font-weight: 600 !important;
    }
    p {
      color: rgb(32, 13, 97);
      font-size: 16px;
      font-weight: 400;
      text-align: center;
      line-height: 1.5;
      margin-bottom: 70px;

    }
  }
  .dolloricon {
    width: 64px;
    margin-bottom: 16px;
    height: 64px;
  }
  .farm {
    button {
      margin-top: 24px;
    }
    p {
      color: rgb(126, 113, 173);
      font-size: 14px;
    }
    span {
      color: rgb(189, 194, 196);
      font-size: 16px;
      font-weight: 400;
      line-height: 45px;
    }
  }
  .announcements {
    overflow: auto;
    p {
      color: rgb(126, 113, 173);
      font-size: 14px;
    }
    @media(max-width: 400px){
      .s-title{
        font-size: 26px;
      }
    }
    span {
      display: block;
      color: #200d61;
      margin-bottom: 30px;
    }
  }
  .gradient {
    background: linear-gradient(rgb(83, 222, 233), rgb(118, 69, 217));
    svg {
      position: absolute;
      right: 25px;
      bottom: 25px;
      fill: white;
    }
  }
  .state {
    p {
      color: rgb(32, 13, 97);
      font-weight: 400;
      line-height: 1.5;
      font-size: 14px;
      margin-bottom: 22px;
    }
  }
  .total {
    p {
      color: rgb(126, 113, 173);
      font-size: 16px;
      font-weight: 400;
      line-height: 1.5;
    }
  }
`;
const List = [
  "SURE (Single)",
  "SURE/BNB (LP Staking)",
  "SURE/BUSD (LP Staking)",
  "SURE/USDT (LP Staking)",
  "NFTs",
  "And many more",
];
const Home = () => {
  return (
    <HomeS>
      <div className="title">
        <h1>SureBank</h1>
        <p>SureCrypto DeFi and NFT Service Room</p>
      </div>
      <div className="c">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <div className="card-shadow farm">
              <div>
                <h2 className="title mb-5">Farms & Staking</h2>
                <img src={dollor} alt="" className="dolloricon" />
                <p>Sure to Claim :</p>
                <span>Locked</span>
                <p>SURE in Wallet:</p>
                <span>Locked</span>
                <Button color="white" backgroup="rgb(98, 54, 255)">
                  Unlock Wallet
                </Button>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <div className="card-shadow announcements">
              <div>
                <h2 className="title s-title">Announcements</h2>
                <p>Staking will go live after the SURE Token public sales.</p>
                {List.map((i) => (
                  <span>{i}</span>
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card-shadow">
              <div>
                <h1 className="title2">Earn up to </h1>
                <h1 className="title c-purple">591.50%</h1>
                <h1 className="title2">APY in Farms</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-12 mt-5">
            <div className="card-shadow gradient">
              <div>
                <h1 className="title2">Stake Sure</h1>
                <h1 className="title c-white">To Earn SURE </h1>
                <div>
                  <h1 className="title2">In pools</h1>
                  <svg
                    viewBox="0 0 24 24"
                    color="primary"
                    width="20px"
                    xmlns="http://www.w3.org/2000/svg"
                    class="sc-bdnxRM jdHFeN"
                  >
                    <path d="M5 13H16.17L11.29 17.88C10.9 18.27 10.9 18.91 11.29 19.3C11.68 19.69 12.31 19.69 12.7 19.3L19.29 12.71C19.68 12.32 19.68 11.69 19.29 11.3L12.71 4.7C12.32 4.31 11.69 4.31 11.3 4.7C10.91 5.09 10.91 5.72 11.3 6.11L16.17 11H5C4.45 11 4 11.45 4 12C4 12.55 4.45 13 5 13Z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-12 col-sm-12 mt-5">
            <div className="card-shadow">
              <div>
                <h1 className="title2">SureNFTs</h1>
                <h1 className="title mb-5 c-purple">Coming Soon</h1>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <div className="card-shadow">
              <div className="state">
                <h1 className="title mb-3">Sure State</h1>
                <div className="d-flex align-items-center justify-content-between">
                  <p>Total SURE Supply</p>
                  <p>100,000,000</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p>Total SURE in Farms</p>
                  <p>000</p>
                </div>
                <div className="d-flex align-items-center justify-content-between">
                  <p className="mb-0">Total SURE Claimed</p>
                  <p className="mb-0">000</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <div className="card-shadow">
              <div className="total">
                <h1 className="title2 mb-5">Total Value Locked (TVL)</h1>
                <h1 className="title">$0.00</h1>
                <p>Across all Liquidity Pools</p>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 mt-5">
            <div className="card-shadow">
              <div>
                <img className="social" src={social1} alt="" />
                <img className="social" src={social2} alt="" />
                <img className="social" src={social3} alt="" />
                <img className="social" src={social4} alt="" />
                <img className="social" src={social5} alt="" />
                <img className="social" src={social6} alt="" />
                <img className="social" src={social7} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    
      </div>
      </HomeS>
  );
};
export default Home;

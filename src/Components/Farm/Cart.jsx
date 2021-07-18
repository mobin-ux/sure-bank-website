import {useState , Fragment} from 'react';
import styled from 'styled-components'
import imageC from '../../Assets/Images/0x0E09FaBB73Bd3Ade0a17ECC321fD13a19e81cE82.svg'
import imageB from '../../Assets/Images/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c.svg'
import Button from '../Common/Button';
import {Link} from 'react-router-dom';
const CartS = styled.div`
padding: 24px;
background:white;
border-radius: 31px;
position: relative;

box-shadow: rgb(25 19 38 / 15%) 0px 1px 4px;
${props => props.active && ".b {position: absolute;top: -1px;right: -1px;bottom: -3px;left: -1px;z-index: -1;background: linear-gradient(rgb(83, 222, 233), rgb(98, 54, 255)) 0% 0% / 400% 400%;border-radius: 32px;}"}

.title-cart {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    & > div:first-child {
        position: relative;
    }
    & > div:last-child {
        text-align: right;
        & > p:first-child {
            font-weight: 600;
            font-size: 20px;
        }
        & > p:last-child {
            & > span:first-child {
                -webkit-box-align: center;
                align-items: center;
                border-radius: 16px;
                display: inline-flex;
                font-weight: 400;
                white-space: nowrap;
                height: 28px;
                padding: 0px 8px;
                font-size: 14px;
                color: rgb(98, 54, 255);
                background: transparent;
                border: 2px solid rgb(98, 54, 255);
            }
            & > span:last-child {
                -webkit-box-align: center;
                align-items: center;
                border-radius: 16px;
                color: rgb(255, 255, 255);
                display: inline-flex;
                font-weight: 400;
                white-space: nowrap;
                height: 28px;
                padding: 0px 8px;
                font-size: 14px;
                background-color: rgb(98, 54, 255);
                margin-left: 5px;
            }
        }
    }
    & img:first-child {
        height: 50px;
        width: 50px;
        position: absolute;
        top: 20%;
        left: 5%;
        z-index: 2;
    }
    & img:last-child {
        z-index: 1;
        max-height: 32px;
        max-width: 32px;
        position: absolute;
        top:  0%;
        left: 0%;
    }
}

.content-cart {
 & >div:first-child {
     p span:first-child {
        color: rgb(32, 13, 97);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
     }
     P span:last-child {
        color: rgb(32, 13, 97);
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        float: right;
     }
 }
 & > div:last-child {
     border-bottom : 1px solid rgb(231, 227, 235);
        padding-bottom: 30px;
        margin-bottom: 30px;
        transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
button:hover {
    opacity:0.65
}
 }
}
.s {
 & > div {
     display: flex;
     justify-content: space-between;
     span {
        font-weight: 600;
        color: rgb(189, 194, 196);
        font-size : 20px;
     }
     div {
        background-color: rgb(233, 234, 235);
        border-color: rgb(233, 234, 235);
        box-shadow: none;
        color: rgb(189, 194, 196);
        cursor: not-allowed;
            -webkit-box-align: center;
    align-items: center;
    border: 0px;
    border-radius: 16px;
    display: inline-flex;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    -webkit-box-pack: center;
    justify-content: center;
    letter-spacing: 0.03em;
    line-height: 1;
    opacity: 1;
    outline: 0px;
    transition: background-color 0.2s ease 0s, opacity 0.2s ease 0s;
    height: 48px;
    padding: 0px 24px;
     }
 }
}
.t {
    font-weight: 600;
    line-height: 1.5;
    text-transform: uppercase;
    padding-right: 4px;
    font-size: 12px;
    &:not(.c-purple) {
        color: rgb(126, 113, 173)
    }
}
.footer-cart {
    margin-bottom: 24px;
    p{
        color: rgb(98, 54, 255);
        font-size: 16px;
        font-weight: 600;
        line-height: 1.5;
        margin-bottom: 0;
        cursor: pointer;
    }
    svg {
        fill: rgb(98, 54, 255);
    }
    display: flex;
    align-items: center;
    justify-content: center;
}
`
const Accordian = styled.div`
height: ${props => props.show ? "auto" : "0"};
visibility: ${props => props.show ? "unset" : "hidden"};
a{
    color: rgb(98, 54, 255);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    display: block;
    text-decoration: none;
}
p{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
        color: rgb(32, 13, 97);
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
    span {
        color: rgb(32, 13, 97);
        font-size: 16px;
        font-weight: 400;
        line-height: 1.5;
    }
}
`
const Cart = (props) => {
    const [toggle , setToggle] = useState(false);
    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div className="col-lg-4 col-md-6 col-sm-12 mb-5">
            <CartS active={props.active}>
                <div className="b"></div>
                <div className="title-cart">
                    <div>
                        <img src={imageC} alt="" />
                        <img src={imageB} alt="" />
                    </div>
                    <div>
                        <p>CAKE-BNB</p>
                        <p>
                            <span>CORE</span>
                            <span>40X</span>
                        </p>
                    </div>
                </div>
                <div className="content-cart">
                    <div>
                        <p><span>App</span><span>66.23%</span></p>
                        <p><span>Earn</span><span>CAKE + Fees</span></p>
                    </div>
                    <div className="s">
                            <p>
                                <span className="c-purple t">CAKE</span><span className="t">EARNED</span>
                            </p>
                            <div>
                                <span>0.000</span>
                                <div>HARVEST</div>
                            </div>
                    </div>
                    <div>
                        <p><span className="c-purple t">CAKE-BNB LP</span> <span className="t">STAKED</span></p>
                        <Button backgroup="rgb(98, 54, 255)" color="#fff">Unlock Wallet</Button>
                    </div>
                </div>
                <div className="footer-cart">
                    {toggle == true ? (<Fragment>
                    <p onClick={handleToggle}>Hide</p>
                    <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM OCaiv"><path d="M8.11997 14.7101L12 10.8301L15.88 14.7101C16.27 15.1001 16.9 15.1001 17.29 14.7101C17.68 14.3201 17.68 13.6901 17.29 13.3001L12.7 8.7101C12.31 8.3201 11.68 8.3201 11.29 8.7101L6.69997 13.3001C6.30997 13.6901 6.30997 14.3201 6.69997 14.7101C7.08997 15.0901 7.72997 15.1001 8.11997 14.7101Z"></path></svg>
                    </Fragment>) : (<Fragment>
                    <p onClick={handleToggle}>Details</p>
                    <svg viewBox="0 0 24 24" color="text" width="20px" xmlns="http://www.w3.org/2000/svg" class="sc-bdnxRM OCaiv"><path d="M8.11997 9.29006L12 13.1701L15.88 9.29006C16.27 8.90006 16.9 8.90006 17.29 9.29006C17.68 9.68006 17.68 10.3101 17.29 10.7001L12.7 15.2901C12.31 15.6801 11.68 15.6801 11.29 15.2901L6.69997 10.7001C6.30997 10.3101 6.30997 9.68006 6.69997 9.29006C7.08997 8.91006 7.72997 8.90006 8.11997 9.29006Z"></path></svg>
                    </Fragment>)}
                </div>
                <Accordian show={toggle}>
                    <p>Total Liquidity: <span>$50</span></p>
                    <Link to="/">Get Lp</Link>
                    <Link to="/">View Contract</Link>
                    <Link to="/">See pair info</Link>
                </Accordian>
            </CartS>
        </div>
    )
}
export default Cart;
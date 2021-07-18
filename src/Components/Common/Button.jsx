import styled from "styled-components";
const ButtonS = styled.button`
  -webkit-box-align: center;
  align-items: center;
  border: 0px;
  border-radius: 16px;
  box-shadow: ${(props) => props.boxShadow};
  cursor: pointer;
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
  background-color: ${(props) => props.backgroup};
  color: ${(props) => props.color};
  width: 100%;
`;
const Button = (props) => {
  return (
    <ButtonS
      color={props.color}
      backgroup={props.backgroup}
      boxShadow={props.boxShadow}
      className={props.class}
      onClick={props.onClick}
    >
      {props.children}
    </ButtonS>
  );
};
export default Button;

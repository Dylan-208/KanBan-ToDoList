import styled from "styled-components";
import { MdOutlineEmail } from "react-icons/md";
import { MdPassword } from "react-icons/md";
import { GrUserNew } from "react-icons/gr";
import { IoChevronBackCircleSharp } from "react-icons/io5";

interface ButtonSignInType {
  $color: boolean;
  $background: boolean;
}

export const ButtonBack = styled(IoChevronBackCircleSharp)`
  font-size: 60px;
  cursor: pointer;
  color: #33415c;
  margin-left: 20px;
  margin-top: 10px;
`;

export const DivCenter = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

export const DivColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 70%;
`;

export const Container = styled.div`
  display: flex;
  background: linear-gradient(to right, #979dac, #33415c);
  border-radius: 20px;
  position: relative;
  height: 60vh;
  width: 100%;
  padding: 20px 20px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.3);
`;

export const ContainerLogin = styled.div<{ $background: boolean }>`
  flex: 1;
  background-color: ${(props) => (props.$background ? "white" : "none")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: ${(props) => (props.$background ? "0px 150px 150px 0" : "")};
  align-items: center;
  transition: all ease-in-out 1s;
`;

export const ContainerSingIn = styled.div<{ $background: boolean }>`
  flex: 1;
  background-color: ${(props) => (props.$background ? "white" : "none")};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: ${(props) => (props.$background ? "150px 0px 0px 150px" : "")};
  transition: all ease-in-out 1s;
`;

export const ContainerOptionLogin = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px 5px;
  height: 50px;
  width: 100%;
  border-radius: 10px;
  gap: 100px;
`;

export const ButtonSignIn = styled.button<ButtonSignInType>`
  display: flex;
  padding: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 50%;
  height: 42px;
  border: none;
  background-color: ${(props) => (props.$background ? "white" : "#33415c")};
  color: ${(props) => (props.$color ? "#242424" : "white")};
  font-family: "OpenSans";
  font-weight: 700;
  font-size: 20px;
`;

export const DivEmail = styled.div<{ $side: boolean }>`
  display: flex;
  border: 1px solid #e5e5e5;
  background-color: white;
  padding: 20px 20px;
  height: 60px;
  width: 300px;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  opacity: ${(props) => (props.$side ? "1" : "0")};
  transform: ${(props) => (props.$side ? "translateX(0)" : "translateX(100%)")};
  transition: all ease-in-out 1s;
  pointer-events: ${(props) => (props.$side ? "auto" : "none")};
`;

export const Iconemail = styled(MdOutlineEmail)`
  color: #4e4e4e;
  font-size: 20px;
`;

export const LineSeparator = styled.div`
  height: 40px;
  width: 2px;
  background-color: #ebebeb;
  margin-left: 20px;
`;

export const ContainerEmailAddress = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
  height: auto;
  width: auto;
`;

export const TituloEmail = styled.p`
  color: #b8b8b8;
  font-family: "OpenSans";
  font-weight: 700;
  font-size: 10px;
  letter-spacing: 0.1px;
`;

export const InputEmail = styled.input`
  font-size: 13px;
  font-family: "OpenSans";
  font-style: bold;
  border: none;
  height: 25px;
  width: 100%;
  margin-left: 5px;
  margin-top: 5px;
`;

export const IconPassword = styled(MdPassword)`
  color: #4e4e4e;
  font-size: 20px;
`;

export const ButtonEnter = styled.button<{ $side: boolean }>`
  display: flex;
  border: none;
  padding: 20px 20px;
  height: 60px;
  width: 250px;
  border-radius: 10px;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
  background-color: #0366ff;
  color: white;
  font-family: "OpenSans";
  font-size: 15px;
  font-weight: 700;
  opacity: ${(props) => (props.$side ? "1" : "0")};
  transform: ${(props) => (props.$side ? "translateX(0)" : "translateX(100%)")};
  pointer-events: ${(props) => (props.$side ? "auto" : "none")};
  transition: all ease-in-out 1s;
  cursor: pointer;
`;

export const IconUser = styled(GrUserNew)`
  color: #4e4e4e;
  font-size: 20px;
`;

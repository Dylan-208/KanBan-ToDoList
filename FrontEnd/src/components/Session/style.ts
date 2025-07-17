import styled from "styled-components";
import { FiPlus } from "react-icons/fi";

export const DivContainerSessions = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-top: 40px;
  padding: 0px 40px;
`;

export const DivSession = styled.section`
  display: flex;
  flex-direction: column;
  max-height: 100%;
  min-height: 100vh;
  width: 400px;
  gap: 20px;
  justify-content: start;
  align-items: center;
  border-radius: 30px;
  background-color: #ade8f4;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`;

export const TituloSession = styled.p`
  font-size: 20px;
  font-family: "OpenSans";
  font-weight: 800;
`;

export const QuantityTask = styled.p`
  font-size: 20px;
  font-family: "OpenSans";
  color: #adb5bd;
`;

export const ButtonNewTask = styled.button`
  padding: 10px;
  font-size: 13px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  color: #212529;
  font-family: "OpenSans";
  font-weight: 600;
  background-color: #ced4da;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  display: flex;
  transition: transform 0.3s ease-in-out;
  &:hover {
    background-color: #dee2e6;
    transform: scale(1.15);
  }
`;

export const IconPlus = styled(FiPlus)`
  color: #0077b6;
  font-size: 20px;
`;

export const ContainerTituloSession = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 20px;
`;

export const ContainerFormTask = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  border: none;
  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
  border-radius: 20px;
  overflow: hidden;
  background-color: #caf0f8;
`;

export const BackImage = styled.div`
  width: 100%;
  height: 150px;
  background-image: url("/assets/image/background_task.jpeg");
  background-size: cover;
  background-position: center;
`;

export const InputText = styled.input`
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  background-color: #ade8f4;
  font-size: 15px;
  height: 40px;
  max-width: 1000px;
  min-width: 500px;
  padding: 20px 40px;
  font-family: "OpenSans";
`;

export const Label = styled.label`
  font-size: 20px;
  font-family: "OpenSans";
  margin-top: 20px;
`;

export const InputTextArea = styled.textarea`
  border: none;
  border-radius: 10px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  background-color: #ade8f4;
  font-size: 15px;
  min-height: 100px;
  max-width: 1000px;
  min-width: 500px;
  padding: 20px 40px;
  font-family: "OpenSans";
`;

export const Select = styled.select`
  font-family: "OpenSans";
  padding-left: 20px;
  font-size: 15px;
  border: none;
  width: 200px;
  height: 30px;
  background-color: #ade8f4;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
`;

export const DivSeletion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DivSeletionRow = styled.div`
  display: flex;
  justify-content: space-around;
  width: 90%;
`;

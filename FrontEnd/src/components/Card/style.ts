import styled from "styled-components";
import { MdOutlineModeEditOutline } from "react-icons/md";
import { MdDeleteForever } from "react-icons/md";

export const ContainerCard = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #f8f9fa;
  min-height: 150px;
  width: 300px;
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.1);
  padding: 20px 20px;
  border-radius: 8px;
  margin-top: 10px;
`;

export const ContainerTitulo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const TituloCard = styled.p`
  font-size: 20px;
`;

export const InfoCard = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 20px;
  flex-wrap: wrap;
`;

export const Description = styled.p`
  font-size: 15px;
  color: #6c757d;
`;

export const ContainerStatus = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 30px;
  gap: 20px;
`;

export const IconToDo = styled(MdOutlineModeEditOutline)`
  height: 20px;
  width: 20px;
  cursor: pointer;
  transition: transform 0.1s ease-in-out;
  &:hover {
    color: red;
    transform: scale(1.5);
  }
`;

export const IconDelete = styled(MdDeleteForever)`
  height: 20px;
  width: 20px;
  margin-left: auto;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    color: #0077b6;
    transform: scale(1.5);
  }
`;

export const LineProgression = styled.hr<{
  $status: string;
  $relevance: string;
}>`
  border: none;
  width: ${(props) => {
    switch (props.$status) {
      case "to_do":
        return "20%";

      case "in_progress":
        return "50%";

      case "done":
        return "100%";

      default:
        return "20%";
    }
  }};
  background-color: ${(props) => {
    switch (props.$relevance) {
      case "importante":
        return "#3D348B";

      case "irrelevante":
        return "#F7B801";

      case "padrão":
        return "#F35B04";

      default:
        return "#F35B04";
    }
  }};
  height: 3px;
  margin-top: 20px;
`;

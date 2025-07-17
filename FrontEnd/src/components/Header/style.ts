import { IoSearch } from "react-icons/io5";
import styled from "styled-components";

export const ContainerHeader = styled.div`
  display: flex;
  margin-top: 30px;
  padding: 20px 50px;
  width: 100%;
  height: 80px;
  align-items: center;
  justify-content: space-between;
`;

export const Search = styled.input`
  background-color: #ade8f4;
  border-radius: 20px;
  font-size: 20px;
  border: none;
  height: 40px;
  max-width: 1000px;
  min-width: 500px;
  padding: 20px 40px;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  font-family: "OpenSans";
`;

export const SearchIcon = styled(IoSearch)`
  position: absolute;
  margin-top: 60px;
  margin-left: 15px;
  color: #0077b6;
  font-size: 20px;
`;

export const DivPhoto = styled.div`
  height: 40px;
  width: 40px;
  border-radius: 50%;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const NameUser = styled.p`
  font-size: 20px;
  font-family: "OpenSans";
  font-weight: 100;
`;

export const SideUser = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
`;

export const ButtonLogin = styled.button`
  padding: 10px;
  font-size: 20px;
  border: none;
  border-radius: 10px;
  color: white;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
  background-color: #0077b6;
  width: 100px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;
  &:hover {
    background-color: #0096c7;
    color: black;
  }
`;

export const ContainerRelevance = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 20px;
  padding: 40px 50px;
`;

export const ItemRelevance = styled.div`
  font-size: 20px;
  font-family: "OpenSans";
  color: black;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const CirculeRelevance = styled.div<{
  $relevance: string;
}>`
  border-radius: 50%;
  height: 5px;
  width: 5px;
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
`;

import { useEffect, useState } from "react";
import {
  ButtonLogin,
  CirculeRelevance,
  ContainerHeader,
  ContainerRelevance,
  DivPhoto,
  ItemRelevance,
  NameUser,
  Search,
  SearchIcon,
  SideUser,
} from "./style";
import Cookies from "js-cookie";
import { getTasksAxios } from "../../api/axios";
import { useTaskContext } from "../../context/useTaskContex";
import type { Tasks } from "../../types/interfaces";
import { useNavigate } from "react-router";

function Hearder() {
  const { tasks, setTasks } = useTaskContext();
  const navigate = useNavigate();

  const [originalTasks, setOriginalTasks] = useState<Tasks[]>(
    getTasksAxios().data
  );
  const [search, setSearch] = useState<string>("");
  const token = Cookies.get("token");

  function searchTasks(text: string) {
    if (text.trim() === "") {
      return setTasks(originalTasks);
    }
    const result = originalTasks.filter(
      (i) =>
        i.description.toLowerCase().includes(text.toLowerCase()) ||
        i.titulo.toLowerCase().includes(text.toLowerCase())
    );
    setTasks(result);
    window.addEventListener("mousedown", () => {
      setSearch("");
      const elementSearch = window.document.querySelector("input");
      elementSearch?.blur();
    });

    return () => {
      window.removeEventListener("mousedown", () => {
        setSearch("");
        const elementSearch = window.document.querySelector("input");
        elementSearch?.blur();
      });
    };
  }

  useEffect(() => {
    searchTasks(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);
  return (
    <>
      <ContainerHeader>
        <SearchIcon />
        <Search
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          onFocus={() => setOriginalTasks(tasks)}
          value={search}
          placeholder="Pesquise sua tarefa"
        />
        {token && (
          <SideUser>
            {/*//TODO Add iniciais do usuário*/}
            <DivPhoto></DivPhoto>
            {/*//TODO Puxar informações do Usuário*/}
            <NameUser>Dylan Santos</NameUser>
          </SideUser>
        )}

        <SideUser>
          <ButtonLogin onClick={() => navigate("/login")}>Login</ButtonLogin>
        </SideUser>
      </ContainerHeader>
      <ContainerRelevance>
        <ItemRelevance>
          <CirculeRelevance $relevance="importante" />
          importante
        </ItemRelevance>
        <ItemRelevance>
          <CirculeRelevance $relevance="irrelevante" />
          irrelevante
        </ItemRelevance>
        <ItemRelevance>
          <CirculeRelevance $relevance="padrão" />
          padrão
        </ItemRelevance>
      </ContainerRelevance>
    </>
  );
}

export default Hearder;

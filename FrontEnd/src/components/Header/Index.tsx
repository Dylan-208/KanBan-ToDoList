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
import { getTasksAxios, getDataUserAPI } from "../../api/axios";
import { useTaskContext } from "../../context/useTaskContex";
import type { Tasks } from "../../types/interfaces";
import { useNavigate } from "react-router";
import { jwtDecode } from "jwt-decode";

interface TokenPayload {
  id: string;
  email: string;
  exp: number;
  iat: number;
}

export interface IDataUser {
  id: string;
  name: string;
  email: string;
}

function Hearder() {
  const { tasks, setTasks } = useTaskContext();
  const navigate = useNavigate();

  const [originalTasks, setOriginalTasks] = useState<Tasks[]>(
    getTasksAxios().data
  );
  const [search, setSearch] = useState<string>("");
  const [dataUser, setDataUser] = useState<IDataUser | null>(null);
  const [token, setToken] = useState(Cookies.get("token"));
  const [refreshToken, setRefreshToken] = useState(Cookies.get("RefreshToken"));

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

  function userExit() {
    Cookies.remove("token");
    Cookies.remove("RefreshToken");
    setToken("");
    setRefreshToken("");
    location.reload();
  }

  useEffect(() => {
    searchTasks(search);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  useEffect(() => {
    const getUserData = async () => {
      try {
        if (token || refreshToken) {
          const decodedToken = jwtDecode<TokenPayload>(token as string);
          //const decodedRefreshToken = jwtDecode<TokenPayload>(refreshToken as string);

          const userData = await getDataUserAPI(decodedToken.id);

          setDataUser(userData.data);
        }
      } catch (err: any) {
        throw new Error("Error ao buscar usuário: ", err.message);
      }
    };

    getUserData();
  }, []);
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
        {(token || refreshToken) && (
          <SideUser>
            {/*//TODO Add iniciais do usuário*/}
            <DivPhoto>
              {dataUser?.name
                .split(" ")
                .filter(Boolean)
                .map((name) => name[0])
                .join("")
                .toUpperCase()}
            </DivPhoto>
            {/*//TODO Puxar informações do Usuário*/}
            <NameUser>{dataUser?.name}</NameUser>
            <ButtonLogin onClick={() => userExit()}>Sair</ButtonLogin>
          </SideUser>
        )}
        {!token && !refreshToken && (
          <SideUser>
            <ButtonLogin onClick={() => navigate("/login")}>Login</ButtonLogin>
          </SideUser>
        )}
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

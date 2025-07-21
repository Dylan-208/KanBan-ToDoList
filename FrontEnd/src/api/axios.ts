/* eslint-disable @typescript-eslint/no-explicit-any */
import type { IDataUser } from "../components/Header/Index";
import type { Tasks } from "../types/interfaces";
import axios from "axios";
import type { AxiosResponse } from "axios";

let dados = [
  {
    id: "1",
    titulo: "JavaScript",
    description:
      "Aprender fundamentos de JavaScript para criar interações e lógica no front-end.",
    relevance: "importante",
    status: "to_do",
  },
  {
    id: "2",
    titulo: "Node.js",
    description:
      "Estudar Node.js para desenvolver APIs, servidores e trabalhar com JavaScript no back-end.",
    relevance: "importante",
    status: "to_do",
  },
  {
    id: "3",
    titulo: "React",
    description:
      "Aprender React para construir interfaces modernas, reutilizáveis e reativas no front-end.",
    relevance: "irrelevante",
    status: "to_do",
  },
  {
    id: "4",
    titulo: "Portifólio",
    description:
      "Criar portfólio online para apresentar projetos e demonstrar habilidades como desenvolvedor.",
    relevance: "padrão",
    status: "in_progress",
  },
  {
    id: "5",
    titulo: "Python",
    description:
      "Aprender Python para automação, análise de dados e construção de scripts úteis.",
    relevance: "importante",
    status: "done",
  },
];

interface ILogin {
  email: string;
  password: string;
}

interface ILoginResponse {
  token: string;
  refreshToken: string;
}

export const getTasksAxios = () => {
  return {
    data: dados,
  };
};

export const addTaskAxios = (data: Tasks) => {
  dados.push(data);
  console.log(dados);
  return dados;
};

export const updatedTaskAxios = (id: string, data: Tasks) => {
  const index = dados.findIndex((i) => i.id === id);
  dados[index] = data;
  return dados;
};

export const getTaskById = (id: string) => {
  return dados.find((i) => i.id === id);
};

export const deleteTaskAxios = (id: string) => {
  dados = dados.filter((i) => i.id !== id);
  return dados;
};

//-------------------------------------------------------------------------------

export async function loginAPIAxios(
  data: ILogin
): Promise<AxiosResponse<ILoginResponse>> {
  try {
    const result = await axios.post<ILoginResponse>(
      `${import.meta.env.VITE_URL_BASE}/login`,
      {
        email: data.email,
        password: data.password,
      }
    );

    if (!result.data.token) throw new Error("Email ou senha inválidos");

    return result;
  } catch (err: any) {
    throw new Error(`Error: ${err.message}`);
  }
}

export async function getDataUserAPI(
  id: string
): Promise<AxiosResponse<IDataUser>> {
  try {
    const result = await axios.get<IDataUser>(
      `${import.meta.env.VITE_URL_BASE}/user/${id}`
    );
    return result;
  } catch (err: any) {
    throw new Error(`Error: ${err.message}`);
  }
}

export async function getTaskAPI(
  token: string,
  refreshToken: string
): Promise<AxiosResponse<Tasks[]>> {
  try {
    const result = await axios.get<Tasks[]>(
      `${import.meta.env.VITE_URL_BASE}/task`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "x-refresh-token": refreshToken,
        },
      }
    );

    if (!result) throw new Error("Dados não encontrados");

    return result;
  } catch (err: any) {
    throw new Error("Dados não encontrados", err.message);
  }
}

export async function updatedTaskAPI(
  token: string,
  refreshToken: string,
  task: Tasks
) {
  try {
    const result = await axios.put(
      `${import.meta.env.VITE_URL_BASE}/task/`,
      {
        id: task.id,
        titulo: task.titulo,
        description: task.description,
        relevance: task.relevance,
        status: task.status,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
          "x-refresh-token": refreshToken,
        },
      }
    );
    console.log(result);
    return result;
  } catch (err: any) {
    throw new Error("Error", err.message);
  }
}

export async function createTaskAPI(
  token: string,
  refreshToken: string,
  task: Tasks
): Promise<AxiosResponse<Tasks>> {
  try {
    const result = await axios.post<Tasks>(
      `${import.meta.env.VITE_URL_BASE}/task`,
      {
        titulo: task.titulo,
        description: task.description,
        relevance: task.relevance,
        status: task.status,
      },
      {
        headers: {
          authorization: `Bearer ${token}`,
          "x-refresh-token": refreshToken,
        },
      }
    );

    return result;
  } catch (err: any) {
    throw new Error("Error", err.message);
  }
}

export async function deleteTaskAPI(
  token: string,
  refreshToken: string,
  id_task: string
): Promise<AxiosResponse<Tasks>> {
  try {
    const result = await axios.delete<Tasks>(
      `${import.meta.env.VITE_URL_BASE}/task/${id_task}`,
      {
        headers: {
          authorization: `Bearer ${token}`,
          "x-refresh-token": refreshToken,
        },
        params: {
          id: id_task,
        },
      }
    );

    return result;
  } catch (err: any) {
    throw new Error("Error", err.message);
  }

  return result;
}

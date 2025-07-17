import type { Tasks } from "../types/interfaces";

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

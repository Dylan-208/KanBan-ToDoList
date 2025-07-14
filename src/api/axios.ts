import type { Tasks } from "../types/interfaces";

let dados = [
  {
    id: "1",
    titulo: "JavaScript",
    description:
      "Estudar JS para auxiliar na carreira de dev qwkdjwpijdipqjdiqwjdijdi",
    relevance: "importante",
    status: "to_do",
  },
  {
    id: "2",
    titulo: "Node.js",
    description:
      "Estudar JS para auxiliar na carreira de dev qwkdjwpijdisadasdasdasd sdsadasda asdasdasd sadsadasdsasdemdkmwe kdmweklmdlwekdmwelkdmwledmwe",
    relevance: "importante",
    status: "to_do",
  },
  {
    id: "3",
    titulo: "React",
    description:
      "Estudar JS para auxiliar na carreira de dev qwkdjwpijdipqjdiqwjdijdi",
    relevance: "irrelevante",
    status: "to_do",
  },
  {
    id: "4",
    titulo: "Portifólio",
    description: "Criar portifólio online",
    relevance: "padrão",
    status: "in_progress",
  },
  {
    id: "5",
    titulo: "Python",
    description:
      "Estudar JS para auxiliar na carreira de dev qwkdjwpijdisadasdasdasd sdsadasda asdasdasd sadsadasdsasdemdkmwe kdmweklmdlwekdmwelkdmwledmwe",
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

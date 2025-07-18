import yup, { object, string, mixed } from "yup";

export const addTask = object().shape({
  id: string(),
  titulo: string().required(),
  description: string().required(),
  relevance: string().required(),
  status: mixed<"to_do" | "done" | "in_progress">()
    .oneOf(["to_do", "done", "in_progress"])
    .required(),
});

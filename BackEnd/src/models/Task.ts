export interface ITask {
  id?: string;
  id_user?: string;
  titulo: string;
  description: string;
  relevance: string;
  status: "to_do" | "done" | "in_progress";

  created_at?: any;
  updated_at?: any;
}

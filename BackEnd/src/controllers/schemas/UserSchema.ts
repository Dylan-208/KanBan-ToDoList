import { object, string } from "yup";

export const AddUserSchema = object().shape({
  id: string().nullable(),
  name: string().required(),
  email: string().email().required(),
  password: string().required(),
});

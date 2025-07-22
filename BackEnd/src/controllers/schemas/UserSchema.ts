import { object, string } from "yup";

export const AddUserSchema = object().shape({
  id: string().nullable(),
  name: string().required("Nome é necessário"),
  email: string().email("é necessário um email do tipo email @... ").required(),
  password: string().required(),
});

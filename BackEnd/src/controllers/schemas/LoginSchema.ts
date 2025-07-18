import { strict } from "assert";
import yup, { object, string } from "yup";

export const verifyLogin = object().shape({
  email: string().email().required(),
  password: string().required(),
});

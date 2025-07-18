import UserRepository from "../repositories/UserRepository";
import { createJWT } from "./helpers/JsonWebToken";

export interface login {
  email: string;
  password: string;
}

class LoginService {
  constructor(private _userRepository: UserRepository) {}

  async execute(login: login) {
    const verifyUser = await this._userRepository.getByEmail(login.email);

    if (!verifyUser) throw new Error("Email e/ou senha inválidos");

    if (verifyUser.password !== login.password)
      throw new Error("Email e/ou senha inválidos");

    const { id, email } = verifyUser;
    const dataUser = { id, email };
    const token = createJWT(dataUser);

    return { data: token };
  }
}

export default LoginService;

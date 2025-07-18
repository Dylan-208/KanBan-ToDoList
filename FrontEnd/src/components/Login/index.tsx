/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import {
  ButtonBack,
  ButtonEnter,
  ButtonSignIn,
  Container,
  ContainerEmailAddress,
  ContainerLogin,
  ContainerOptionLogin,
  ContainerSingIn,
  DivCenter,
  DivColumn,
  DivEmail,
  Iconemail,
  IconPassword,
  IconUser,
  InputEmail,
  LineSeparator,
  TituloEmail,
} from "./style";
import { useNavigate } from "react-router";
import { loginAPIAxios } from "../../api/axios";
import Cookies from "js-cookie";

type User = {
  name: string;
  email: string;
  password: string;
};

function Login() {
  const [loginSelect, setLoginSelect] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [newUser, setNewUser] = useState<User>({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  async function loginAPI() {
    try {
      const user = { email, password };

      const result = await loginAPIAxios(user);
      console.log(result);

      const { token, refreshToken } = result.data;

      Cookies.set("token", token);
      Cookies.set("RefreshToken", refreshToken);

      console.log("login realizado com sucesso");
    } catch (err: any) {
      alert(err.message);
    }
  }

  return (
    <>
      <ButtonBack onClick={() => navigate("/")} />
      <DivCenter>
        <DivColumn>
          <ContainerOptionLogin>
            <ButtonSignIn
              $background={!loginSelect}
              $color={!loginSelect}
              onClick={() => setLoginSelect(!loginSelect)}
            >
              Login
            </ButtonSignIn>

            <ButtonSignIn
              $background={loginSelect}
              $color={loginSelect}
              onClick={() => setLoginSelect(!loginSelect)}
            >
              Cadastro
            </ButtonSignIn>
          </ContainerOptionLogin>

          <Container>
            <ContainerLogin $background={!loginSelect}>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  return loginAPI();
                }}
              >
                <DivEmail $side={!loginSelect}>
                  <Iconemail />
                  <LineSeparator />
                  <ContainerEmailAddress>
                    <TituloEmail>Endereço Email</TituloEmail>
                    <InputEmail
                      type="text"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                      required
                    />
                  </ContainerEmailAddress>
                </DivEmail>

                <DivEmail $side={!loginSelect}>
                  <IconPassword />
                  <LineSeparator />
                  <ContainerEmailAddress>
                    <TituloEmail>Senha Email</TituloEmail>
                    <InputEmail
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                      required
                    />
                  </ContainerEmailAddress>
                </DivEmail>
                <ButtonEnter type="submit" $side={!loginSelect}>
                  Continuar
                </ButtonEnter>
              </form>
            </ContainerLogin>

            <ContainerSingIn $background={loginSelect}>
              <DivEmail $side={loginSelect}>
                <IconUser />
                <LineSeparator />
                <ContainerEmailAddress>
                  <TituloEmail>Nome Completo</TituloEmail>
                  <InputEmail
                    type="text"
                    onChange={(e) =>
                      setNewUser({ ...newUser, name: e.target.value })
                    }
                    value={newUser.name}
                  />
                </ContainerEmailAddress>
              </DivEmail>

              <DivEmail $side={loginSelect}>
                <Iconemail />
                <LineSeparator />
                <ContainerEmailAddress>
                  <TituloEmail>Endereço Email</TituloEmail>
                  <InputEmail
                    type="text"
                    onChange={(e) =>
                      setNewUser({ ...newUser, email: e.target.value })
                    }
                    value={newUser.email}
                  />
                </ContainerEmailAddress>
              </DivEmail>

              <DivEmail $side={loginSelect}>
                <IconPassword />
                <LineSeparator />
                <ContainerEmailAddress>
                  <TituloEmail>Senha</TituloEmail>
                  <InputEmail
                    type="text"
                    onChange={(e) =>
                      setNewUser({ ...newUser, password: e.target.value })
                    }
                    value={newUser.password}
                  />
                </ContainerEmailAddress>
              </DivEmail>
              <ButtonEnter $side={loginSelect}>Cadastrar</ButtonEnter>
            </ContainerSingIn>
          </Container>
        </DivColumn>
      </DivCenter>
    </>
  );
}

export default Login;

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
              <DivEmail $side={!loginSelect}>
                <Iconemail />
                <LineSeparator />
                <ContainerEmailAddress>
                  <TituloEmail>Endereço Email</TituloEmail>
                  <InputEmail
                    type="text"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
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
                  />
                </ContainerEmailAddress>
              </DivEmail>
              <ButtonEnter $side={!loginSelect}>Continuar</ButtonEnter>
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

import React, { useEffect, useState } from "react";
import { useMutation, gql } from "@apollo/client";

import ContainerInput from "./global/ContainerInput";
import CheckBox from "./global/CheckBox";

import { BsEnvelopeFill } from "react-icons/bs";
import { MdLock } from "react-icons/md";

import HeadBtn from "./global/HeadBtn";
import { notify } from "@nano";

import $ from "../function/$";
import router from "next/router";

// Define la mutación de GraphQL
const MUTATION_LOGIN = gql`
  mutation Login($email: String!, $password: String!) {
    login(input: { identifier: $email, password: $password }) {
      jwt
      user {
        id
        email
      }
    }
  }
`;

interface LoginProps {
  cardState: (css: string) => void;
}

const Login: React.FC<LoginProps> = ({ cardState }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    correo: "",
    contrasena: "",
    remenber: false,
  });

  // Utiliza useMutation con tu mutación
  const [login, { data, loading: mutationLoading, error }] = useMutation(
    MUTATION_LOGIN
  );

  const active = () => {
    $("btnBack")?.classList.add("active");

    const register = $("register");
    if (register) {
      register.style.display = "none";
    }

    const reset = $("reset");
    if (reset) {
      reset.style.display = "flex";
    }
  };

  const handleSubmitForm = async (e: any) => {
    e.preventDefault();
    setLoading(true);

    try {
      // Ejecuta la mutación con las variables del formulario
      await login({
        variables: {
          email: formData.correo,
          password: formData.contrasena,
        },
      });
      // Maneja la respuesta, por ejemplo, guardando el JWT
    } catch (error) {
      console.error("Error al iniciar sesión", error);
    }

    setLoading(false);
  };

  useEffect(() => {
    if (data && data.login.jwt) {
      localStorage.setItem("token", data.login.jwt);
      notify({ message: "Inicio de sesión exitoso", type: "success" });
      router.push("/pagar");
    }
  }, [data]);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      // Redirecciona al usuario a la página de dashboard
      notify({ message: "Inicio de sesión exitoso", type: "success" });
      router.push("/pagar");
    }
  }, []);

  return (
    <div className="login front">
      <HeadBtn cardState={cardState} />
      <form onSubmit={handleSubmitForm}>
        <ContainerInput
          type="email"
          name="email"
          placeholder={"Email"}
          icono={<BsEnvelopeFill />}
          value={formData.correo}
          valueChange={(e) =>
            setFormData({ ...formData, correo: e.target.value })
          }
        />
        <ContainerInput
          type="password"
          name="passwordLogin"
          placeholder={"Contraseña"}
          icono={<MdLock />}
          value={formData.contrasena}
          valueChange={(e) =>
            setFormData({ ...formData, contrasena: e.target.value })
          }
        />
        <CheckBox
          valueChange={(e) =>
            setFormData({ ...formData, remenber: e.target.checked })
          }
        />
        <div className="submit-container">
          <button className="submit" disabled={loading || mutationLoading}>
            Acceder
          </button>
        </div>
        <div className="container-recovery">
          <button
            type="button"
            onClick={() => {
              active();
              cardState("left-active");
            }}
          >
            <span>¿Olvidaste tu contraseña?</span>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;

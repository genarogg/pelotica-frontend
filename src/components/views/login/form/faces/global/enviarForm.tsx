import { useApolloClient, gql } from "@apollo/client"; // Importación correcta de useApolloClient y gql
import { useState } from "react";
import { toast } from "react-toastify"; // Importación correcta de toast

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

const MyComponent = () => {
  const client = useApolloClient();
  const [loading, setLoading] = useState(false);

  const handleFormSubmit = async (formData: any) => {
    // Pasas el cliente y el estado de carga como argumentos
    await handleSubmit({ formData, setLoading, client });
  };

 
};

// Modifica handleSubmit para aceptar el cliente como un argumento
const handleSubmit = async ({ formData, setLoading, client }: any) => {
  setLoading(true); // Se activa el estado de carga al inicio de la función

  try {
    const { data } = await client.mutate({
      mutation: MUTATION_LOGIN,
      variables: {
        email: formData.correo,
        password: formData.contrasena,
      },
    });

    if (data.login.jwt) {
      // Autenticación exitosa
      console.log("JWT:", data.login.jwt);
      toast.success("Inicio de sesión exitoso"); // Muestra un mensaje de éxito
    } else {
      // Si no se recibe el JWT, se considera un error
      throw new Error("No se recibió el JWT");
    }
  } catch (error) {
    console.error(error);
    toast.error("Error al iniciar sesión"); // Muestra un mensaje de error
  } finally {
    setLoading(false); // Finaliza el estado de carga
  }
};

export default handleSubmit;

import { useEffect } from "react";


import Layout from "@layout";

import Form from "./form/Form";

interface LoginProps {}

const Login: React.FC<LoginProps> = () => {
  useEffect(() => {
    const imgBgElement = document.querySelector(
      ".bienvenida-container"
    ) as HTMLImageElement;

    imgBgElement.style.backgroundImage = `url(/home/bg-home_resultado.webp)`;
  }, []);

  return (
    <Layout where="login-page">
      <div className="bienvenida-container">
        <div className="constiner-all-contacto">
          <div className="container-contacto">
            <div className="form">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Login;

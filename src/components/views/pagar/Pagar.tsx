import { useState, useEffect } from "react";

import { Icono } from "@nano";
import { Form, Input, Select, TextAreaEnriquecido, Submit } from "@form";

import { BsCalendar, BsCash, BsEnvelopeFill, BsKey, BsPencil } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa6";

import { STRAPI_GRAPHQL, STRAPI_API } from "@env";

import { gql, useQuery } from "@apollo/client";

import { MdOutlineWhatsapp, MdOutlinePhone, MdPinDrop } from "react-icons/md";

import Img from "next/image";

import Layout from "@layout";

interface PagarProps {}

const Pagar: React.FC<PagarProps> = () => {
  useEffect(() => {
    const imgBgElement = document.querySelector(
      ".bienvenida-container"
    ) as HTMLImageElement;

    imgBgElement.style.backgroundImage = `url(/home/bg-home_resultado.webp)`;
  }, []);
  const [email, setEmail] = useState("");
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "email",
    descripcion: "",
    seleccion: "",
    loading: false,
    concepto: '',
    monto: '',
    fecha: '',
    referencia: ''
  });

  
  const [token, setToken] = useState("");

  const submit = (e: any) => {
    e.preventDefault();
  };

  const contactos = [
    {
      href: "https://wa.me/584121234567",
      icono: <MdOutlineWhatsapp />,
      texto: "Whatsapp",
    },
    {
      href: "tel:+584121234567",
      icono: <MdOutlinePhone />,
      texto: "+584121234567",
    },
    {
      href: "#",
      icono: <MdPinDrop />,
      texto: "Academia Pelotica, avenida X, ciudad X, Estado X",
    },
  ];

  useEffect(() => {
    // Asumiendo que el token se almacena en localStorage
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, []);

  const GET_USER_INFO = gql`
    query GetUserInfo {
      me {
        username
        email
        id
      }
    }
  `;

  const { data, loading, error } = useQuery(GET_USER_INFO, {
    skip: !token,
    context: {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    },
    onCompleted: (data) => {
      setEmail(data.me.email);
    },
  });

  const [pagos, setPagos] = useState([]);
  useEffect(() => {
    fetch("http://localhost:1337/api/pagos")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        console.log();
        // Aquí puedes manejar los datos recibidos
        const pagosNoCancelados = data.data.filter(
          (item:any) => !item.attributes.cancelado
        );
        setPagos(pagosNoCancelados);

      
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
  }, []);

  console.log(pagos);

 
  

  return (
    <Layout where="pagar">
      <div className="bienvenida-container">
        <div className="constiner-all-contacto">
          <div className="container-contacto">
            <div className="form">
              <Form submit={submit} titulo="Realizar pago">
                <Input
                  type="email"
                  name="email"
                  placeholder={"Email"}
                  icono={<BsEnvelopeFill />}
                  value={formData.correo}
                  valueChange={(e: any) =>
                    setFormData({ ...formData, correo: e.target.value })
                  }
                />
                <Input
                  type="text"
                  name="concepto"
                  placeholder={"Concepto"}
                  icono={<BsPencil />} // Asegúrate de tener este icono o elige otro adecuado
                  value={formData.concepto}
                  valueChange={(e: any) =>
                    setFormData({ ...formData, concepto: e.target.value })
                  }
                />

                <Input
                  type="number"
                  name="monto"
                  placeholder={"Monto"}
                  icono={<BsCash />} // Asegúrate de tener este icono o elige otro adecuado
                  value={formData.monto}
                  valueChange={(e: any) =>
                    setFormData({ ...formData, monto: e.target.value })
                  }
                />

                <Input
                  type="date"
                  name="fecha"
                  placeholder={"Fecha"}
                  icono={<BsCalendar />} // Asegúrate de tener este icono o elige otro adecuado
                  value={formData.fecha}
                  valueChange={(e: any) =>
                    setFormData({ ...formData, fecha: e.target.value })
                  }
                />

                <Input
                  type="number"
                  name="referencia"
                  placeholder={"Referencia"}
                  icono={<BsKey />} // Asegúrate de tener este icono o elige otro adecuado
                  value={formData.referencia || ""} // Asegúrate de manejar correctamente valores nulos o indefinidos
                  valueChange={(e: any) =>
                    setFormData({ ...formData, referencia: e.target.value })
                  }
                />
                <Submit loading={formData.loading} />
              </Form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Pagar;

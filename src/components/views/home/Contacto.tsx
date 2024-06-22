import { useState } from "react";

interface ContactoProps {}

import { Section, Icono } from "@nano";
import { Form, Input, TextAreaEnriquecido, Submit } from "@form";
import { FaRegFaceGrinBeam } from "react-icons/fa6";
import { BsEnvelopeFill } from "react-icons/bs";

import { MdOutlineWhatsapp, MdOutlinePhone,MdPinDrop } from "react-icons/md";

import Img from "next/image";

const Contacto: React.FC<ContactoProps> = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    descripcion: "",
    loading: false,
  });

  const submit = (e: any) => {
    e.preventDefault();
    console.log(formData);
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

  return (
    <>
      <Section titulo="contacto" id="contacto" />
      <div className="constiner-all-contacto">
        <div className="container-contacto">
          <div className="container-img">
            <Img
              src="/home/undraw_message_sent_re_q2kl.svg"
              alt="contacto"
              width={500}
              height={500}
            />

            <div className="datos-contacto">
              <ul>
                {contactos.map((contacto, index) => (
                  <li key={index}>
                    <a href={contacto.href}>
                      <Icono icono={contacto.icono} />
                      {contacto.texto}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="form">
            <Form submit={submit}>
              <Input
                icono={<FaRegFaceGrinBeam />}
                type="text"
                name="apellido"
                placeholder="Apellido"
                value={formData.nombre}
                valueChange={(e) =>
                  setFormData({ ...formData, nombre: e.target.value })
                }
              />
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

              <TextAreaEnriquecido
                placeholder="Mensaje"
                value={formData.descripcion}
                valueChange={(value) =>
                  setFormData({ ...formData, descripcion: value })
                }
              />
              <Submit loading={formData.loading} />
            </Form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contacto;

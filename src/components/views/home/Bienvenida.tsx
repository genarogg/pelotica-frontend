import { useEffect } from "react";

import { Icono } from "@nano";

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";

interface BienvenidaProps {}

const Bienvenida: React.FC<BienvenidaProps> = () => {
  useEffect(() => {
    const imgBgElement = document.querySelector(
      ".bienvenida-container"
    ) as HTMLImageElement;

    imgBgElement.style.backgroundImage = `url(/home/bg-home_resultado.webp)`;
  }, []);

  const enlacesRedesSociales = [
    {
      href: "#",
      className: "instagram",
      icono: <FaInstagram />,
    },
    {
      href: "#",
      className: "facebook",
      icono: <FaFacebookF />,
    },
    {
      href: "#",
      className: "twitter",
      icono: <FaTwitter />,
    },
  ];

  return (
    <div className="bienvenida-container">
      <div className="text">
        <h1>Bienvenido a Pelotica</h1>
        <p>La mejor forma de aprender de Béisbol</p>
      </div>

      <div className="redes-sociales">
        <ul>
          {enlacesRedesSociales.map((enlace, index) => (
            <li key={index}>
              <a href={enlace.href} className={enlace.className}>
                <Icono icono={enlace.icono} />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Bienvenida;

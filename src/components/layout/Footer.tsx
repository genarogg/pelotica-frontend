interface FooterProps {}

import { Icono } from "@nano";

import { FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa6";

const Footer: React.FC<FooterProps> = () => {
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
    <footer>
      <p>Con ❤️ para LATAM</p>
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
    </footer>
  );
};

export default Footer;

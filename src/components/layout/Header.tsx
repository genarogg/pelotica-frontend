import { A, Icono } from "@nano";

import {
  MdGroups2,
  MdHomeFilled,
  MdContactPhone,
  MdLogin,
} from "react-icons/md";

import { FaCalendarCheck } from "react-icons/fa6";

import LogoPelotica from "../svg/LogoPelotica";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = () => {
  const links = [
    { to: "/", icono: <MdHomeFilled />, texto: "inicio" },
    { to: "/", icono: <MdGroups2 />, texto: "nosotros" },
    { to: "/", icono: <FaCalendarCheck />, texto: "calendario" },
    { to: "/", icono: <MdContactPhone />, texto: "contacto" },
    { to: "/", icono: <MdLogin />, texto: "ingreso" },
  ];

  return (
    <header>
      <div className="header-ghost"></div>
      <div className="header">
        <div className="logo">
          <div className="img">
            <LogoPelotica />
          </div>
          <h2>Pelotica</h2>
        </div>
        <nav>
          <ul>
            {links.map((link, index) => (
              <li key={index}>
                <A to={link.to}>
                  <Icono icono={link.icono} />
                  {link.texto}
                </A>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;

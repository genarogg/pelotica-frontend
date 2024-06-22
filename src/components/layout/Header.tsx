import { useState } from "react";

import { A, Icono, BtnHamburgues } from "@nano";

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
    { to: "#", icono: <MdHomeFilled />, texto: "inicio" },
    { to: "#nosotros", icono: <MdGroups2 />, texto: "nosotros" },
    { to: "/", icono: <FaCalendarCheck />, texto: "calendario" },
    { to: "#contacto", icono: <MdContactPhone />, texto: "contacto" },
    { to: "/", icono: <MdLogin />, texto: "ingreso" },
  ];

  const [isActive, setIsActive] = useState(false);

  return (
    <header>
      <div className="header-ghost"></div>
      <div className="header">
        <BtnHamburgues isActive={isActive} setIsActive={setIsActive} />
        <div className="logo">
          <div className="img">
            <LogoPelotica />
          </div>
          <h2>Pelotica</h2>
        </div>
        <nav className={`${isActive ? "active" : ""}`}>
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
        <ul className="hidden-ml">
          <li>
            <A to={links[4].to}>
              <Icono icono={links[4].icono} />
            </A>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Header;

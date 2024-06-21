import { useEffect } from "react";

interface BienvenidaProps {}

const Bienvenida: React.FC<BienvenidaProps> = () => {
  useEffect(() => {
    const imgBgElement = document.querySelector(
      ".bienvenida-container"
    ) as HTMLImageElement;

    imgBgElement.style.backgroundImage = `url(/home/bg-home_resultado.webp)`;
  }, []);

  return (
    <div className="bienvenida-container">
      <div className="text">
        <h1>Bienvenido a Pelotica</h1>
        <p>La mejor forma de encontrar tu estadio de Béisbol</p>
      </div>
    </div>
  );
};

export default Bienvenida;

import Img from "next/image";

import { Section } from "@nano";

interface NosotrosProps {}

const Nosotros: React.FC<NosotrosProps> = () => {
  const elements = [
    {
      src: "/home/undraw_team_re_0bfe.svg",
      alt: "beisbolista pelotica",
      title: "Nosotros",
      description:
        "Somos una institución de carácter deportivo, orientada al desarrollo integral de niños, adolescentes y adultos en la práctica del beisbol a nivel de prospectos.",
    },
    {
      src: "/home/undraw_target_re_fi8j.svg",
      alt: "beisbolista pelotica",
      title: "MISIÓN",
      description:
        "Formar peloteros competitivos es nuestra pasión. Creemos que el béisbol no solo se trata de habilidades técnicas, sino también de carácter, disciplina y trabajo en equipo.",
    },
    {
      src: "/home/undraw_winners_re_wr1l.svg",
      alt: "beisbolista pelotica",
      title: "VISION",
      description:
        "Convertirnos en el semillero de talentos beisbolísticos, donde atletas y personas de bien se forjan para alcanzar sus sueños.",
    },
  ];

  return (
    <>
      <Section titulo="Nosotros" id="nosotros" />
      <div className="constiner-all-nosotros">
        <div className="container-nosotros">
          <div className="nosotros-header">
            <div className="horarios">
              <Img
                src="/home/time.svg"
                alt="beisbolista pelotica"
                width={200}
                height={200}
                layout="responsive"
              />
              <div className="text">
                <h2>horarios</h2>

                <p>
                  La academia opera de lunes a viernes, con un horario de
                  trabajo que abarca desde las 7:00 a.m. hasta las 12:00 p.m.
                </p>
              </div>
            </div>
            <div className="img-container">
              <Img
                src="/home/undraw_home_run_acyh.svg"
                alt="beisbolista pelotica"
                width={500}
                height={500}
                layout="responsive"
              />
            </div>
          </div>
           <div className="nosotros-footer">
            <ul>
              {elements.map((element, index) => (
                <li key={index}>
                  <div className="element">
                    <Img
                      src={element.src}
                      alt={element.alt}
                      width={200}
                      height={200}
                    />
                    <div className="text">
                      <h2>{element.title}</h2>
                      <p>{element.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nosotros;

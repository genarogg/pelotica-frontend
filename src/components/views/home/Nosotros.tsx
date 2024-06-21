import Img from "next/image";

interface NosotrosProps {}

const Nosotros: React.FC<NosotrosProps> = () => {
  return (
    <div className="constiner-all-nosotros">
      <div className="container-nosotros">
        <div className="nosotros-header">
          <div className="horarios">
            <Img
              src="/home/time.svg"
              alt="beisbolista pelotica"
              width={200}
              height={200}
            />
            <div className="text">
              <h2>horarios</h2>

              <p>
                La academia opera de lunes a viernes, con un horario de trabajo
                que abarca desde las 7:00 a.m. hasta las 12:00 p.m.
              </p>
            </div>
          </div>
          <div className="img-container">
            <Img
              src="/home/undraw_home_run_acyh.svg"
              alt="beisbolista pelotica"
              width={500}
              height={500}
            />
          </div>
        </div>
        <div className="nosotros-footer">
          <ul>
            <li>
              <div className="element">
                <Img
                  src="/home/undraw_team_re_0bfe.svg"
                  alt="beisbolista pelotica"
                  width={200}
                  height={200}
                />
                <div className="text">
                  <h2>Nosotros</h2>

                  <p>
                    Somos una institución de carácter deportivo, orientada al
                    desarrollo integral de niños, adolescentes y adultos en la
                    práctica del beisbol a nivel de prospectos.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="element">
                <Img
                  src="/home/undraw_target_re_fi8j.svg"
                  alt="beisbolista pelotica"
                  width={200}
                  height={200}
                />
                <div className="text">
                  <h2>MISIÓN</h2>

                  <p>
                    Formar peloteros competitivos es nuestra pasión. Creemos que
                    el béisbol no solo se trata de habilidades técnicas, sino
                    también de carácter, disciplina y trabajo en equipo.
                  </p>
                </div>
              </div>
            </li>
            <li>
              <div className="element">
                <Img
                  src="/home/undraw_winners_re_wr1l.svg"
                  alt="beisbolista pelotica"
                  width={200}
                  height={200}
                />
                <div className="text">
                  <h2>vision</h2>

                  <p>
                    Convertirnos en el semillero de talentos beisbolísticos,
                    donde atletas y personas de bien se forjan para
                    alcanzar sus sueños.
                  </p>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;

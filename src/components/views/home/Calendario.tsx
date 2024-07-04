import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "moment/locale/es";
import "react-big-calendar/lib/css/react-big-calendar.css";

import { Section } from "@nano";

// Establecer el idioma de moment a español
moment.locale("es");

const localizer = momentLocalizer(moment);

const GET_JUEGOS = gql`
  query {
    juegos {
      data {
        attributes {
          categoria {
            data {
              id
              attributes {
                nombre
              }
            }
          }
          nombre
          fecha
          ubicacion
        }
      }
    }
  }
`;

const Calendario: React.FC = () => {
  const { loading, error, data } = useQuery(GET_JUEGOS);

  // Transformar los datos de GraphQL a eventos de BigCalendar
  const transformarDatosAEventos = (datos: any) => {
    return datos.juegos.data.map((juego: any) => ({
      title: juego.attributes.nombre,
      start: new Date(juego.attributes.fecha),
      end: new Date(juego.attributes.fecha), // Ajusta si tus eventos tienen una fecha de fin
    }));
  };

  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error :(</p>;

  const eventos = data ? transformarDatosAEventos(data) : [];

  return (
    <>
      <Section titulo="calendario" id="calendario" />
      <div className="container-calendario-all">
        <div className="container-calendario">
          <Calendar
            localizer={localizer}
            events={eventos}
            startAccessor="start"
            endAccessor="end"
            messages={{
              next: "sig",
              previous: "ant",
              today: "Hoy",
              month: "Mes",
              week: "Semana",
              day: "Día",
            }}
          />
        </div>
      </div>
    </>
  );
};

export default Calendario;

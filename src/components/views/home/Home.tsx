
import Layout from "@layout";

import Bienvenida from "./Bienvenida";
import Nosotros from "./Nosotros";
import Calendario from "./Calendario";
import Contacto from "./Contacto";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

  return (
    <Layout>
      <Bienvenida />
      <Nosotros />
      <Calendario />
      <Contacto />
    </Layout>
  );
};

export default Home;

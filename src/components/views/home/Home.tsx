
import Layout from "@layout";

import Bienvenida from "./Bienvenida";
import Nosotros from "./Nosotros";
import Contacto from "./Contacto";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

  return (
    <Layout>
      <Bienvenida />
      <Nosotros />
      <Contacto />
    </Layout>
  );
};

export default Home;

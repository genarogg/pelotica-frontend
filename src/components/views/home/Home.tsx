import { useEffect } from "react";

import Layout from "@layout";

import Bienvenida from "./Bienvenida";
import Nosotros from "./Nosotros";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

  return (
    <Layout>
      <Bienvenida />
      <Nosotros />
    </Layout>
  );
};

export default Home;

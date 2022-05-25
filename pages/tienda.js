import React from "react";
import Layout from "../components/Layout";
import { getGuitarras } from "../api/tienda";
import Listado from "../components/Listado";

const Tienda = ({ guitarras }) => {
  return (
    <Layout titlePage="Tienda Virtual">
      <main className="contenedor">
        <h3 className="heading">Nuestra colección</h3>
        <Listado guitarras={guitarras} />
      </main>
    </Layout>
  );
};

export async function getServerSideProps() {
  const guitarras = (await getGuitarras()) ?? [];
  return {
    props: { guitarras },
  };
}

export default Tienda;

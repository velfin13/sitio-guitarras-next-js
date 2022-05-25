import Layout from "../components/Layout";
import Listado from "../components/Listado";
import { getGuitarras } from "../api/tienda";
import { getCursos } from "../api/cursos";
import Curso from "../components/Curso";

export default function Home({ guitarras, curso }) {
  return (
    <Layout titlePage="Inicio">
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso curso={curso}/>
    </Layout>
  );
}

export async function getServerSideProps() {
  const guitarras = (await getGuitarras()) ?? [];
  const curso = (await getCursos()) ?? {};
  return {
    props: { guitarras, curso },
  };
}

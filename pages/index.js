import Layout from "../components/Layout";
import Listado from "../components/Listado";
import Curso from "../components/Curso";

import { getGuitarras } from "../api/tienda";
import { getCursos } from "../api/cursos";
import { getBlogsLimit } from "../api/blog";
import ListadoBlog from "../components/ListadoBlog";

export default function Home({ guitarras, curso, blogs }) {
  console.log(blogs);
  return (
    <Layout titlePage="Inicio">
      <main className="contenedor">
        <h1 className="heading">Nuestra coleccion</h1>
        <Listado guitarras={guitarras} />
      </main>
      <Curso curso={curso} />
      <section className="contenedor">
        <ListadoBlog entradas={blogs} />
      </section>
    </Layout>
  );
}

export async function getServerSideProps() {
  const guitarras = (await getGuitarras()) ?? [];
  const blogs = (await getBlogsLimit(3)) ?? [];
  const curso = (await getCursos()) ?? {};
  return {
    props: { guitarras, curso, blogs },
  };
}

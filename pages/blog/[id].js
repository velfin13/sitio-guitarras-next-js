import Layout from "../../components/Layout";
import Image from "next/image";
import { getBlogById } from "../../api/blog";
import { formatearFecha } from ".././../helpers";
import styles from "../../styles/Entrada.module.css";

const EntradaBlog = ({ entrada }) => {
  const { contenido, title, published_at, imagen } = entrada;
  return (
    <Layout>
      <main className="contenedor">
        <h3 className="heading">{title}</h3>
        <article className={styles.entrada}>
          <Image
            priority="true"
            width={600}
            height={400}
            alt="img"
            src={imagen.url}
            layout="responsive"
          />
          <div className="contenido">
            <p className={styles.fecha}>{formatearFecha(published_at)}</p>
            <p className={styles.texto}>{contenido}</p>
          </div>
        </article>
      </main>
    </Layout>
  );
};

export async function getServerSideProps({ query: { id } }) {
  const entrada = await getBlogById(id);
  return {
    props: { entrada },
  };
}

export default EntradaBlog;

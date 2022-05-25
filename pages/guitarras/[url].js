import Image from "next/image";
import { formatCantidadToMoneda } from "../../helpers";
import Layout from "../../components/Layout";
import { getGuitarraByURL } from "../../api/tienda";

import styles from "../../styles/Guitarra.module.css";

const GuitarrasPage = ({ guitarra = [] }) => {
  const { description, price, name, imagen } = guitarra[0];
  console.log(description);

  return (
    <Layout titlePage={name}>
      <div className={styles.guitarra}>
        <Image
          layout="responsive"
          width={180}
          height={350}
          src={imagen[0].url}
          priority="true"
          alt="img"
        />
        <div className={styles.contenido}>
          <h3>{name}</h3>
          <p className={styles.description}>{description}</p>
          <p className={styles.precio}>{formatCantidadToMoneda(price)}</p>
          {/* <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver más ...</a>
        </Link> */}
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const guitarra = await getGuitarraByURL(url);
  return {
    props: { guitarra },
  };
}

export default GuitarrasPage;

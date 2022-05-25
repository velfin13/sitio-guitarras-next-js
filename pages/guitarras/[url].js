import Image from "next/image";
import { formatCantidadToMoneda } from "../../helpers";
import Layout from "../../components/Layout";
import { getGuitarraByURL } from "../../api/tienda";

import styles from "../../styles/Guitarra.module.css";

const GuitarrasPage = ({ guitarra = [] }) => {
  const { description, price, name, imagen } = guitarra[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("enviando..");
  };

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

          <form onSubmit={handleSubmit} className={styles.formulario}>
            <label>Cantidad</label>
            <select>
              <option value="">--- Seleccione ---</option>
              <option value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
            </select>
            <input value="Agregar al carrito" type="submit" />
          </form>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ query: { url } }) {
  const guitarra = (await getGuitarraByURL(url)) ?? [];
  return {
    props: { guitarra },
  };
}

export default GuitarrasPage;

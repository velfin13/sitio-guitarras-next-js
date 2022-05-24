import Link from "next/link";
import Image from "next/image";
import { formatearFecha } from "../helpers";
import styles from "../styles/Entrada.module.css";
const Entrada = ({ entrada }) => {
  const { title, contenido, resumen, imagen, published_at, id } = entrada;
  return (
    <article>
      <Image
        priority="true"
        src={imagen.url}
        alt="image"
        layout="responsive"
        width={800}
        height={600}
      />
      <div className={styles.contenido}>
        <h3>{title}</h3>
        <p className={styles.fecha}>{formatearFecha(published_at)}</p>
        <p className={styles.resumen}>{resumen}</p>
        <Link href={`blog/${id}`}>
          <a className={styles.enlace}>Leer más..</a>
        </Link>
      </div>
    </article>
  );
};

export default Entrada;

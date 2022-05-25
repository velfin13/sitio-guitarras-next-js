import React from "react";
import Image from "next/image";
import Link from "next/link";
import { formatCantidadToMoneda } from "../helpers";
import styles from "../styles/Guitarra.module.css";

const Guitarra = ({ guitarra }) => {
  const { description, price, name, url, imagen } = guitarra;
  return (
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
        <Link href={`/guitarras/${url}`}>
          <a className={styles.enlace}>Ver más ...</a>
        </Link>
      </div>
    </div>
  );
};

export default Guitarra;

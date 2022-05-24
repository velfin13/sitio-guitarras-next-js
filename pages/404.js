import Link from "next/link";
import React from "react";
import styles from "../styles/NoFound.module.css";

const NoFound = () => {
  return (
      <div className={styles.no_found}>
        <h1 className="heading">Pagina no encontrada - Error 404</h1>
        <Link href="/">Volver al Inicio</Link>
      </div>
  );
};

export default NoFound;

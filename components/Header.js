import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import Image from "next/image";
import styles from "../styles/Header.module.css";
import { formatCantidadToMoneda } from "../helpers";

const Header = ({ guitarra }) => {
  const router = useRouter();
  return (
    <header className={styles.header}>
      <div className="contenedor">
        <div className={styles.barra}>
          <Link href="/">
            <a>
              {" "}
              <Image src="/img/logo.svg" width={400} height={100} alt="img" />
            </a>
          </Link>

          <nav className={styles.navegacion}>
            <Link href="/">Inicio</Link>
            <Link href="/nosotros">Nosotros</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/tienda">Tienda</Link>
          </nav>
        </div>
        {guitarra && (
          <div className={styles.modelo}>
            <h2>{guitarra.name}</h2>
            <p>{guitarra.description}</p>
            <p className={styles.precio}>
              {formatCantidadToMoneda(guitarra.price)}
            </p>
            <Link href={`/guitarras/${guitarra.url}`}>
              <a className={styles.enlace}>Ver producto</a>
            </Link>
          </div>
        )}
      </div>
      {router.pathname === "/" && (
        // eslint-disable-next-line @next/next/no-img-element
        <img className={styles.guitarra} src="/img/header_guitarra.png" alt="img" />
      )}
    </header>
  );
};

export default Header;

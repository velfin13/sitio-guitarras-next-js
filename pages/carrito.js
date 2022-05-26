import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Carrito.module.css";
import { formatCantidadToMoneda } from "../helpers";

const carrito = ({ carrito = [] }) => {
  return (
    <Layout titlePage="carrito de compras">
      <h1 className="heading">Carrito</h1>

      <main className={`contenedor ${styles.contenido}`}>
        <div className={styles.carrito}>
          {carrito.length === 0 ? (
            <p>Carrito vaci</p>
          ) : (
            carrito.map((producto) => (
              <div key={producto.id} className={styles.producto}>
                <div>
                  <Image
                    layout="responsive"
                    width={250}
                    height={480}
                    src={producto.imagen}
                    alt="image"
                  />
                </div>
                <div>
                  <p className={styles.nombre}>{producto.name}</p>
                  <p className={styles.cantidad}>
                    Cantidad: {producto.cantidad}
                  </p>
                  <p className={styles.precio}>
                    <span>{formatCantidadToMoneda(producto.price)}</span>
                  </p>
                  <p className={styles.subtototal}>
                    Subtotal:{" "}
                    <span>
                      {formatCantidadToMoneda(
                        producto.price * producto.cantidad
                      )}
                    </span>
                  </p>
                </div>
              </div>
            ))
          )}
        </div>
        <div>2</div>
      </main>
    </Layout>
  );
};

export default carrito;

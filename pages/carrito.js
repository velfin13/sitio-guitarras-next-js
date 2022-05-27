import Layout from "../components/Layout";
import Image from "next/image";
import styles from "../styles/Carrito.module.css";
import { formatCantidadToMoneda } from "../helpers";

const carrito = ({ carrito = [], actualizarCantidad, handleDelete }) => {
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
                  <div className={styles.cantidad}>
                    <p>Cantidad:</p>
                    <select
                      className={styles.select}
                      value={producto.cantidad}
                      onChange={(e) =>
                        actualizarCantidad({
                          cantidad: e.target.value,
                          id: producto.id,
                        })
                      }
                    >
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                    </select>
                  </div>
                  <p className={styles.precio}>
                    <span>{formatCantidadToMoneda(producto.price)}</span>
                  </p>
                  <p className={styles.subtotal}>
                    Subtotal:{" "}
                    <span>
                      {formatCantidadToMoneda(
                        producto.price * producto.cantidad
                      )}
                    </span>
                  </p>
                </div>
                <button
                  type="button"
                  className={styles.eliminar}
                  onClick={() => handleDelete(producto.id)}
                >
                  X
                </button>
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

import React from "react";
import Layout from "../components/Layout";
import Image from "next/image";
import styles from '../styles/Nosotros.module.css'

const Nosotros = () => {
  return (
    <Layout titlePage="Nosotros">
      <main className="contenedor">
        <h2 className="heading">Nosotros</h2>
        <div className={styles.contenido}>
          <Image layout="responsive" width={600} height={450} src="/img/nosotros.jpg" alt="img" />

          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Amet
              commodo nulla facilisi nullam vehicula ipsum a. Sed vulputate odio
              ut enim blandit volutpat. At varius vel pharetra vel turpis nunc
              eget lorem dolor. Pulvinar sapien et ligula ullamcorper malesuada
              proin libero nunc consequat. Tristique risus nec feugiat in
              fermentum posuere urna nec tincidunt. Orci phasellus egestas
              tellus rutrum tellus pellentesque eu tincidunt tortor. Ipsum dolor
              sit amet consectetur adipiscing elit duis tristique. Id neque
              aliquam vestibulum morbi blandit. Mollis nunc sed id semper risus
              in.
            </p>
            <p>
              Ultricies mi quis hendrerit dolor magna eget. Sit amet consectetur
              adipiscing elit ut aliquam purus. Neque vitae tempus quam
              pellentesque nec nam aliquam. Tortor consequat id porta nibh
              venenatis cras. Dictumst quisque sagittis purus sit amet volutpat
              consequat mauris. Condimentum vitae sapien pellentesque habitant
              morbi tristique senectus et netus. Eget magna fermentum iaculis
              eu. Aliquam sem et tortor consequat id porta nibh. Mauris pharetra
              et ultrices neque ornare. Phasellus faucibus scelerisque eleifend
              donec pretium vulputate.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
};

export default Nosotros;

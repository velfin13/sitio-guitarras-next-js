import { useEffect, useState } from "react";
import Layout from "../components/Layout";
import { getBlogs } from "../api/blog";
import Entrada from "../components/Entrada";
import styles from '../styles/Blog.module.css'

const Blog = ({ entradas = [] }) => {
  return (
    <Layout titlePage="Blog">
      <main className="contenedor">
        <h2 className="heading">Blog</h2>
        <div className={styles.blog}>
          {entradas.map((entrada) => (
            <Entrada key={entrada.id} entrada={entrada} />
          ))}
        </div>
      </main>
    </Layout>
  );
};

export async function getStaticProps() {
  const entradas = (await getBlogs()) ?? [];
  return {
    props: {
      entradas,
    },
  };
}

export default Blog;

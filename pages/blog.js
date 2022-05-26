import Layout from "../components/Layout";
import { getBlogs } from "../api/blog";
import Entrada from "../components/Entrada";
import styles from "../styles/Blog.module.css";
import ListadoBlog from "../components/ListadoBlog";

const Blog = ({ entradas = [] }) => {
  return (
    <Layout titlePage="Blog">
      <main className="contenedor">
        <ListadoBlog entradas={entradas} />
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

import Head from "next/head";
import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = ({ children, titlePage }) => {
  return (
    <div>
      <Head>
        <title>Sitio de Guitarra - {titlePage}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      {children}

      <Footer />
    </div>
  );
};

export default Layout;

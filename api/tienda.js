export const getGuitarras = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL_API}/guitarras`;
    const respuesta = await fetch(url);

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    return error;
  }
};

export const getGuitarraByURL = async (url) => {
  try {
    const urlApi = `${process.env.NEXT_PUBLIC_BASE_URL_API}/guitarras?url=${url}`;
    const respuesta = await fetch(urlApi);

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    return error;
  }
};

export const getBlogs = async () => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL_API}/blogs`;
    const respuesta = await fetch(url);

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    return error;
  }
};

export const getBlogById = async (id) => {
  try {
    const url = `${process.env.NEXT_PUBLIC_BASE_URL_API}/blogs/${id}`;
    const respuesta = await fetch(url);

    const resultado = await respuesta.json();
    return resultado;
  } catch (error) {
    return error;
  }
};

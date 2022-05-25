export const getCursos = async () => {
    try {
      const url = `${process.env.NEXT_PUBLIC_BASE_URL_API}/cursos`;
      const respuesta = await fetch(url);
  
      const resultado = await respuesta.json();
      return resultado;
    } catch (error) {
      return error;
    }
  };
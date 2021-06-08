const API = 'https://dog.ceo/api/breeds/image/random/20';
const getDataPerros = async (seleccionado) => {
  const apiURl = seleccionado ? `${seleccionado}` : API;
  try {
    const response = await fetch(apiURl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};
export default getDataPerros;
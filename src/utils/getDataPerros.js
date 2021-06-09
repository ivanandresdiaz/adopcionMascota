const API = 'https://dog.ceo/api/breeds/image/random/10';
const getDataPerros = async () => {
  try {
    const response = await fetch(API);
    const dataCasi = await response.json();
    const data= dataCasi.message;
    return data;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};
export default getDataPerros;
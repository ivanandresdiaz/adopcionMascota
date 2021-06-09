const API = 'https://cataas.com/cat?json=true';
const getDataGatos = async (seleccionado) => {
  try {
    let dataCat=[];
    for (let i = 0; i < 10; i++) {
      const response = await fetch(API);
      const data = await response.json();
      const dataPush= data.url;
      dataCat.push(dataPush);
    }
    return dataCat;
  } catch (error) {
    console.log('Fetch Error', error);
  };
};
export default getDataGatos;
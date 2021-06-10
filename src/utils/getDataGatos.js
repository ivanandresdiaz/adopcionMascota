const API = 'https://cataas.com/cat?json=true';
const getDataGatos = async () => {
  const gatoImgStorage = JSON.parse(localStorage.getItem('gatosImg'));
  if(gatoImgStorage.length > 0){
    return gatoImgStorage;
  }else{
    try {
      let dataCat=[];
      for (let i = 0; i < 10; i++) {
        const response = await fetch(API);
        const data = await response.json();
        const dataPush= data.url;
        dataCat.push(dataPush);
      }
      const dataLista= dataCat.map((item)=>`https://cataas.com${item}`)
      return dataLista;
    } catch (error) {
      console.log('Fetch Error', error);
    };
  }
  
};
export default getDataGatos;
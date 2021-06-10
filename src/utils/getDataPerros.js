const API = 'https://dog.ceo/api/breeds/image/random/10';
const getDataPerros = async () => {
  const perroImgStorage = JSON.parse(sessionStorage.getItem('perrosImg'))
    if(perroImgStorage.length > 0){
      return perroImgStorage;
    }else{
      try {
        const response = await fetch(API);
        const dataCasi = await response.json();
        const data= dataCasi.message;
        return data;
      } catch (error) {
        console.log('Fetch Error', error);
      };    
    }
  
};
export default getDataPerros;
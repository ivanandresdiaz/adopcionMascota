const API = 'https://cataas.com/cat?json=true';
const getDataGatos = async () => {
  const gatoImgStorage = JSON.parse(localStorage.getItem('gatosImg'));
  if(gatoImgStorage.length > 0){
    return gatoImgStorage;
  }else{
    try {
      // let dataCat=[];
      let promesa1 = fetch(API);
      let promesa2 = fetch(API);
      let promesa3 = fetch(API);
      let promesa4 = fetch(API);
      let promesa5 = fetch(API);
      let promesa6 = fetch(API);
      let promesa7 = fetch(API);
      let promesa8 = fetch(API);
      let promesa9 = fetch(API);
      let promesa10 = fetch(API);
      const dataListaLista= await Promise.all([promesa1, promesa2, promesa3, promesa4, promesa5, promesa6, promesa7, promesa8, promesa9, promesa10]).then(async(respuesta)=>{
        const dataCat = respuesta.map((item)=> item.json())
        const variableData= await Promise.all(dataCat);
        const dataLista= variableData.map((item)=>`https://cataas.com${item.url}`)
        return dataLista;
      });
      return dataListaLista;
      // for (let i = 0; i < 10; i++) {
      //   const response = await fetch(API);
      //   const data = await response.json();
      //   const dataPush= data.url;
      //   dataCat.push(dataPush);
      // }

    } catch (error) {
      console.log('Fetch Error', error);
    };
  }
  
};
export default getDataGatos;
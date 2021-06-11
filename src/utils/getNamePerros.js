const API = 'https://randomuser.me/api/';

const getName = async () => {
  const perroNameStorage=JSON.parse(sessionStorage.getItem('perrosNames'));
    if (perroNameStorage.length > 0) {  
      return perroNameStorage;
    }else{
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
        const variableReturn = variableData.map((item)=>item.results[0])
        return variableReturn;
      });
      return dataListaLista;
    }
};

export default getName;



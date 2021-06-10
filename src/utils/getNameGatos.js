const API = 'https://randomuser.me/api/';

const getName = async () => {
  const gatoNameStorage=JSON.parse(localStorage.getItem('gatosNames'));
  if(gatoNameStorage.length > 0){
    return gatoNameStorage
  }else{
    let promesa1 = fetch(API);
    console.log('fetch enviado de nombres');
    let promesa2 = fetch(API);
    console.log('fetch enviado de nombres');
    let promesa3 = fetch(API);
    console.log('fetch enviado de nombres');
    let promesa4 = fetch(API);
    console.log('fetch enviado de nombres');
    let promesa5 = fetch(API);
    console.log('fetch enviado de nombres');
    let promesa6 = fetch(API);
    console.log('fetch enviado de nombres');
    let promesa7 = fetch(API);
    console.log('fetch enviado de nombres');
    let promesa8 = fetch(API);
    console.log('fetch enviado de nombres');
    let promesa9 = fetch(API);
    console.log('fetch enviado de nombres');
    let promesa10 = fetch(API);
    console.log('fetch enviado de nombres');
    const dataListaLista= await Promise.all([promesa1, promesa2, promesa3, promesa4, promesa5, promesa6, promesa7, promesa8, promesa9, promesa10]).then(async(respuesta)=>{
      const dataCat = respuesta.map((item)=> item.json())
      const variableData= await Promise.all(dataCat);
      return variableData;
    });
    console.log('llegaron nombres')
    return dataListaLista;
    // let dataName=[];
    // for (let i = 0; i < 10; i++) {
    //   const response = await fetch(apiURl);
    //   const data = await response.json();
    //   dataName.push(data.results[0]);
    // }
    // return dataName;
  }
    
};

export default getName;



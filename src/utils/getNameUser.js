const API = 'https://randomuser.me/api/';

const getNameUser = async()=>{
  const userNameStorage=JSON.parse(sessionStorage.getItem('username'));
  const validacionLength = Object.entries(userNameStorage);
  if(validacionLength.length > 0){
    return userNameStorage
  }else{
    const response = await fetch(API);
    const data= await response.json();
    const dataLista= data.results[0];
    sessionStorage.setItem('username',JSON.stringify(dataLista)); 
    return dataLista;
  }
}
export default getNameUser;

const apiURl = 'https://randomuser.me/api/';

const getName = async () => {
  const perroNameStorage=JSON.parse(sessionStorage.getItem('perrosNames'));
    if (perroNameStorage.length > 0) {  
      return perroNameStorage;
    }else{
      let dataName=[];
    for (let i = 0; i < 10; i++) {
      const response = await fetch(apiURl);
      const data = await response.json();
      dataName.push(data.results[0]);
    }
    return dataName;
    }
};

export default getName;



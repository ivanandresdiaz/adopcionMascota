const apiURl = 'https://randomuser.me/api/';
var dataName=[];

const getName = async () => {
    for (let i = 0; i < 10; i++) {
      const response = await fetch(apiURl);
      const data = await response.json();
      dataName.push(data);
    }
    console.log('dataName',dataName)
    return dataName;
};

export default getName;



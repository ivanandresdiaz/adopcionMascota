const apiURl = 'https://randomuser.me/api/';

const getName = async () => {
    let dataName=[];
    for (let i = 0; i < 10; i++) {
      const response = await fetch(apiURl);
      const data = await response.json();
      dataName.push(data.results[0]);
    }
    return dataName;
};

export default getName;



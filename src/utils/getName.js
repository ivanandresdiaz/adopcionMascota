const apiURl = 'https://randomuser.me/api/';
var dataName=[];

const getName = async () => {
  const apiKey = 'b89fc45c2067cbd33560270639722eae';

  async function getSingleName() {
    const url = apiURl;
    const response = await fetch(url);
    const data = await response.json();
    return data.results;
  }

  async function getAllNames() {
    const singleName = await getSingleName();
    console.log('get singleName solicitado');
    const singleName1 = await getSingleName();
    console.log('get singleName solicitado');
    const singleName2 = await getSingleName();
    console.log('get singleName solicitado');
    const singleName3 = await getSingleName();
    console.log('get singleName solicitado');

    const singleName4 = await getSingleName();
    console.log('get singleName solicitado');
    const singleName5 = await getSingleName();
    console.log('get singleName solicitado');
    const singleName6 = await getSingleName();
    console.log('get singleName solicitado');
    const singleName7 = await getSingleName();
    console.log('get singleName solicitado');
    const singleName8 = await getSingleName();
    console.log('get singleName solicitado');
    const singleName9 = await getSingleName();
    console.log('get singleName solicitado');
    const singleName10= await getSingleName();
    console.log('get singleName solicitado');
    const singleName11= await getSingleName();
    console.log('get singleName solicitado');
    const singleName12= await getSingleName();
    console.log('get singleName solicitado');
    const singleName13= await getSingleName();
    console.log('get singleName solicitado');
    const singleName14= await getSingleName();
    console.log('get singleName solicitado');
    const singleName15= await getSingleName();
    console.log('get singleName solicitado');
    const singleName16= await getSingleName();
    console.log('get singleName solicitado');
    const singleName17= await getSingleName();
    console.log('get singleName solicitado');
    const singleName18= await getSingleName();
    console.log('get singleName solicitado');
    const singleName19= await getSingleName();
    console.log('get singleName solicitado');
    const singleName20= await getSingleName();
    console.log('get singleName solicitado');
    const ids = [singleName,singleName1,singleName2];
    return ids;
  }
  async function getTopMoviesInParallel() {
    const ids = await getAllNames();
    const movies = await Promise.all(ids);
    const data = movies.flat()
    console.log(data)
    debugger
    return movies;
  }
  await getTopMoviesInParallel()
};

export default getName;



import back from '../assets/nav/back.png';
const PetPerro = ()=>{
  const idPet = parseInt((location.hash.slice(2))[0]);
  const perroImg = (JSON.parse(localStorage.getItem('perrosImg')))[idPet];
  const perroName=(JSON.parse(localStorage.getItem('perrosNames')))[idPet]; 
  return(`
    <section class="Pet">
      <div class="imagen-pet position-relative">
        <a class="position-absolute" href="/Home">
          <img src="${back}" alt="atras" />
        </a>
      </div>
      <img class="img-fluid" src="${perroImg}" alt="" />
    </section>
  `
  );
}

export default PetPerro;

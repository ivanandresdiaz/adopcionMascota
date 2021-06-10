import back from '../assets/nav/back.png';
import genderMale from '../assets/gender/male.png';
import genderFemale from '../assets/gender/female.png';
import razaIcon from '../assets/traits/raza.png';
import edadIcon from '../assets/traits/edad.png';
import locationIcon from '../assets/traits/location.png';
import personalityCarinoso from '../assets/personality/Cariñoso.png';
import personalityInquieto from '../assets/personality/Inquieto.png';
import personalityJugueton from '../assets/personality/Jugueton.png';

const PetPerro = ()=>{
  const idPet = parseInt((location.hash.slice(2))[0]);
  const storageFavoritos= (JSON.parse(localStorage.getItem('favoritos')));
  const data = storageFavoritos.map((item)=>{
    return(
      Object.fromEntries(item)
    )
  })
  const validacionFavoritos = data.filter((item)=>{
    return (item.idPet == `${idPet}p`)
  })
  console.log('validacion Favoritos',validacionFavoritos)
  const perroImg = (JSON.parse(localStorage.getItem('perrosImg')))[idPet];
  const perroName=(JSON.parse(localStorage.getItem('perrosNames')))[idPet];

  return(`
    <section class="Pet">
      <div class="pet-imagen-container position-relative">
        <a class="position-absolute m-3" href="#/home/">
          <img src="${back}" alt="atras" />
        </a>
        <img class="pet-imagen" src="${perroImg}" alt="" />
      </div>
      <div class="pet-descripcion vw-100 bg-light">
        <div class="pet-name-container d-flex justify-content-between pt-3">
          <div class="pet-name d-flex align-items-center px-4">
            <h2 class="m-0">${perroName.name.first}</h2>
            <div class="container-pet-gender">
            ${
              perroName.gender=='male'?`<img src="${genderMale}" alt="petMale"/>` : ` <img src="${genderFemale}" alt="petfemale"/>`
            }
            </div>
          </div>
          <svg onclick="
          function toggleFavorite(){
            let idPet = parseInt((location.hash.slice(2))[0]);
            let perroImg = (JSON.parse(localStorage.getItem('perrosImg')))[idPet];
            let perroName=(JSON.parse(localStorage.getItem('perrosNames')))[idPet];
            let perroNameArray= Object.entries(perroName);
            let perroImgArray= ['img',perroImg];
            let idP= ['idPet',idPet+'p'];
            perroNameArray.push(perroImgArray);
            perroNameArray.push(idP);
            let storageFavoritos= (JSON.parse(localStorage.getItem('favoritos')));
            let path= document.getElementById('path_favorite-pet');
            if(path.getAttribute('fill')=='#D9D4E7'){
              storageFavoritos.push(perroNameArray);
              localStorage.setItem('favoritos',JSON.stringify(storageFavoritos)); 
              console.log('agregado a Favoritos',JSON.parse(localStorage.getItem('favoritos')));
              path.setAttribute('fill', '#A786DF');
            }else{
              let storageItemDeleteFavoritos= storageFavoritos.filter((item, index) => {
                return (item[13][1] != idP[1]);
              })
              console.log(storageItemDeleteFavoritos);
              localStorage.setItem('favoritos',JSON.stringify(storageItemDeleteFavoritos)); 
              console.log('se elimino', perroImgArray);
              console.log('Nueva Lista',JSON.parse(localStorage.getItem('favoritos')));
              path.setAttribute('fill', '#D9D4E7');
            }
          }
          toggleFavorite()"
          " width="70" height="70" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_d)">
            <g filter="url(#filter1_d)">
            <circle cx="35" cy="31" r="21" fill="white"/>
            </g>
            <path id="path_favorite-pet" d="M34.5877 26.1622C33.2514 24.8232 29.8342 22.8819 26.6787 25.6805C23.5069 28.4935 26.3483 32.5455 28.1654 34.2199L34.5672 40.7085V40.75L34.5877 40.7292L34.6082 40.75V40.7085L41.0099 34.2199C42.8271 32.5455 45.6685 28.4935 42.4967 25.6805C39.3412 22.8819 35.924 24.8232 34.5877 26.1622Z" fill="${(validacionFavoritos.length >0?'#A786DF':'#D9D4E7')}"/>
            </g>
            <defs>
            <filter id="filter0_d" x="-3" y="-3" width="76" height="76" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="7"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            <filter id="filter1_d" x="10" y="6" width="50" height="50" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
            <feOffset/>
            <feGaussianBlur stdDeviation="2"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"/>
            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
            </filter>
            </defs>
            </svg>
        </div>
        <div class="pet-details d-flex justify-content-around">
          <div class="d-flex align-items-center">
            <img src="${razaIcon}" alt="raza" />
            <p class="m-0">${perroName.name.last}</p>
          </div>
          <div class="d-flex align-items-center justify-content-start">
            <img src="${edadIcon}" alt="edad" />
            <p class="m-0">${perroName.dob.age} meses</p>
          </div>
        </div>
        <div class="d-flex align-items-center p-2">
          <img src="${locationIcon}" alt="" />
          <p  class="m-0 p-1">Street ${perroName.location.street.number} ${perroName.location.street.name}, ${perroName.location.state} ${perroName.location.country}</p>
        </div>
        <h3 class="px-3">Personalidad</h3>
        <div class="pet-personality p-2 d-flex justify-content-around">
          <div class="personality-item p-2 d-flex justify-content-center align-items-center flex-column">
            <img class="img-personality-item" src="${personalityCarinoso}" alt="" />
            <p>
              Cariñoso
            </p>
          </div>
          <div class="personality-item-inquieto p-2 d-flex justify-content-center align-items-center flex-column">
            <img class="img-personality-item inquieto" src="${personalityInquieto}" alt="" />
            <p>
              Inquieto
            </p>
          </div>
          <div class="personality-item p-2 d-flex justify-content-center align-items-center flex-column">
            <img class="img-personality-item" src="${personalityJugueton}" alt="" />
            <p>
              Jugueton
            </p>
          </div>
        </div>
        <div class="historia p-4">
          <h4>Historia de ${perroName.name.first}</h4>
          <p class="fw-lighter">
          ${perroName.name.first} es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la persona indicada.
          </p>
        </div>
      </div>
        <div class="pet-contacto row px-4 m-0 bg-light" >
          <div class="col-7 d-flex align-items-center ">
            <img class="rounded-circle contacto-picture" src="${perroName.picture.thumbnail}" alt="contacto" />
            <div class="datos-contacto px-2">
              <p class="m-0 fw-lighter"> 
                publicado por
              </p>
              <h6 class="m-0">${perroName.name.first} ${perroName.name.last}</h6>
            </div>
          </div>
        <div class="col-5 d-flex justify-content-center align-items-center">
          <button type="button" class="btn btn-primary rounded-pill px-3 ">Contactar</button>
        </div>
      </div>
    </section>
  `
  );
}


export default PetPerro;

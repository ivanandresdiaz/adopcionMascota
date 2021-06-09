import back from '../assets/nav/back.png';
import genderMale from '../assets/gender/male.png';
import genderFemale from '../assets/gender/female.png';
import FavoriteIcon from '../assets/favoritos/Favorito.svg';
const PetPerro = ()=>{
  const idPet = parseInt((location.hash.slice(2))[0]);
  const perroImg = (JSON.parse(localStorage.getItem('perrosImg')))[idPet];
  const perroName=(JSON.parse(localStorage.getItem('perrosNames')))[idPet];
  // const perroNameArray= Object.entries(perroName);
  // const perroImgArray= ['img',perroImg];
  // perroNameArray.push(perroImgArray);
  // const storageFavoritos= (JSON.parse(localStorage.getItem('favoritos')));
  // storageFavoritos.push(itemToStorage);
  return(`
    <section class="Pet">
      <div class="pet-imagen-container position-relative">
        <a class="position-absolute m-3" href="#/Home/">
          <img src="${back}" alt="atras" />
        </a>
        <img class="pet-imagen" src="${perroImg}" alt="" />
      </div>
      <div class="pet-descripcion vw-100 bg-light">
        <div class="pet-name-container d-flex justify-content-between px-4 pt-3">
          <div class="pet-name d-flex align-items-center">
            <h2 class="m-0">${perroName.name.first}</h2>
            <div class="container-pet-gender ms-2">
            ${
              perroName.gender=='male'?`<img src="${genderMale}" alt="petMale"/>` : ` <img src="${genderFemale}" alt="petfemale"/>`
            }
            </div>
          </div>
          <svg onclick=" 
          function toggleFavorite(){
            const idPet = parseInt((location.hash.slice(2))[0]);
            const perroImg = (JSON.parse(localStorage.getItem('perrosImg')))[idPet];
            const perroName=(JSON.parse(localStorage.getItem('perrosNames')))[idPet];
            const perroNameArray= Object.entries(perroName);
            const perroImgArray= ['img',perroImg];
            perroNameArray.push(perroImgArray);
            const storageFavoritos= (JSON.parse(localStorage.getItem('favoritos')));
            const path= document.getElementById('path_favorite-pet');
            if(path.getAttribute('fill')=='#D9D4E7'){
              storageFavoritos.push(perroNameArray);
              localStorage.setItem('favoritos',JSON.stringify(storageFavoritos)); 
              console.log('agregado a Favoritos',JSON.parse(localStorage.getItem('favoritos')));
              path.setAttribute('fill', '#A786DF');
            }else{
              const storageItemDeleteFavoritos= storageFavoritos[idPet].filter((item, index) => {
                return (item[1] != perroImgArray[1]);
              })
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
            <path id="path_favorite-pet" d="M34.5877 26.1622C33.2514 24.8232 29.8342 22.8819 26.6787 25.6805C23.5069 28.4935 26.3483 32.5455 28.1654 34.2199L34.5672 40.7085V40.75L34.5877 40.7292L34.6082 40.75V40.7085L41.0099 34.2199C42.8271 32.5455 45.6685 28.4935 42.4967 25.6805C39.3412 22.8819 35.924 24.8232 34.5877 26.1622Z" fill="#D9D4E7"/>
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
        <div class="pet-details">
          <p>Raza</p>
          <p>Edad</p>
        </div>
        <div class="pet-location">
          <img src="" alt="" />
          <p>Localizacion geografica</p>
        </div>
        <div class="pet-personality">
          <button type="button">Cariñoso</button>
          <button type="button">Inquieto</button>
          <button type="button">Jugueton</button>
        </div>
        <div class="historia">
          <h6>historia de Name</h6>
          <p>
            Rocky es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la persona indicada.
          </p>
        </div>
      </div>
      <div class="pet-contacto">
        <img src="" alt="contacto" />
        <div class="datos-contacto">
          <p> 
            publicado por
          </p>
          <h6>Nombre Random</h6>
        </div>
        <button type="button" class="btn btn-primary rounded-pill">Contactar</button>
      </div>
    </section>
  `
  );
}


export default PetPerro;

import perros from '../assets/category/perros.png';
import gatos from '../assets/category/gatos.png';

const HomeGatos = ()=>{
  return(`
    <div class="container-fluid HomePage">
      <div class="p-3">
        <h1 class="font-weight-bold">Adopta una adorable mascota  </h1>
        <div class="mascotas-fetch">
          <p class="font-weight-light">Categorias de mascotas</p>
          <div class="d-flex justify-content-around">
            <button id="buttonFetchPerros" type="button" class="btn rounded-pill btn-primary" disabled>
            <img src="${perros}" alt="perros" />
              <span>Perros</span>
            </button>
            <button type="button" id="buttonFetchGatos" class="btn rounded-pill btn-primary">
              <img src="${gatos}" alt="gatos" />
              <span>Gatos</span>
            </button>
          </div>
          
          <div class="fetch">
            <div class="column-fetch-1 border-redondeado">
                <div class="item-fetch">
                  <p>Bloque</p>
                </div>
                <div class="item-fetch">
                  <p>Bloque</p>
                </div>
            </div>
            <div class="margin-fetch-2">
              <div class="column-fetch-2 border-redondeado">
                <div class="item-fetch border-redondeado">
                  <p>Bloque</p>
                </div>
                <div class="item-fetch border-redondeado">
                  <p>Bloque</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="Navegador-componente col-12 d-flex bg-light justify-content-around position-fixed">
          <div id="Nav_home">
            <a class="text-decoration-none btn btn-primary m-1 rounded-pill" href="#/home/">
              <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="homeIcon" d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="#85D1CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path class="homeIcon" d="M9 22V12H15V22" stroke="#85D1CE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="text-warning">Home</span>
            </a>
          </div>
          <div id="Nav_chat">
            <a class="text-decoration-none rounded-pill btn btn-light m-1" href="#/chat/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="chatIcon" d="M21 11.5C21.0034 12.8199 20.6951 14.1219 20.1 15.3C19.3944 16.7118 18.3098 17.8992 16.9674 18.7293C15.6251 19.5594 14.0782 19.9994 12.5 20C11.1801 20.0035 9.87812 19.6951 8.7 19.1L3 21L4.9 15.3C4.30493 14.1219 3.99656 12.8199 4 11.5C4.00061 9.92179 4.44061 8.37488 5.27072 7.03258C6.10083 5.69028 7.28825 4.6056 8.7 3.90003C9.87812 3.30496 11.1801 2.99659 12.5 3.00003H13C15.0843 3.11502 17.053 3.99479 18.5291 5.47089C20.0052 6.94699 20.885 8.91568 21 11V11.5Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="d-none">Chat</span>
            </a>
          </div>
          <div id="Nav_favoritos">
            <a class="text-decoration-none rounded-pill btn btn-light m-1" href="#/favoritos/">
              <svg  width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="favoriteIcon" d="M20.84 4.60999C20.3292 4.099 19.7228 3.69364 19.0554 3.41708C18.3879 3.14052 17.6725 2.99817 16.95 2.99817C16.2275 2.99817 15.5121 3.14052 14.8446 3.41708C14.1772 3.69364 13.5708 4.099 13.06 4.60999L12 5.66999L10.94 4.60999C9.9083 3.5783 8.50903 2.9987 7.05 2.9987C5.59096 2.9987 4.19169 3.5783 3.16 4.60999C2.1283 5.64169 1.54871 7.04096 1.54871 8.49999C1.54871 9.95903 2.1283 11.3583 3.16 12.39L4.22 13.45L12 21.23L19.78 13.45L20.84 12.39C21.351 11.8792 21.7563 11.2728 22.0329 10.6053C22.3095 9.93789 22.4518 9.22248 22.4518 8.49999C22.4518 7.77751 22.3095 7.0621 22.0329 6.39464C21.7563 5.72718 21.351 5.12075 20.84 4.60999V4.60999Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="d-none">Favorite</span>
            </a>
          </div>
          <div id="Nav_perfil">
            <a class="text-decoration-none rounded-pill btn btn-light m-1" href="#/perfil/">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path class="perfilIcon" d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              <path class="perfilIcon" d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
              <span class="d-none">Perfil</span>
            </a>
          </div>
        </div>  
      </div>
    </div>
  `
  );
}


export default HomeGatos;
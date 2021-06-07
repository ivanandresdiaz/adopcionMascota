import mascotas from '../assets/inicio/esperandoadopción.svg'
const Inicio1 = ()=>{
  return(`
    <div class="vh-100 vw-90 container-fluid d-flex flex-column justify-content-center align-items-center ">    
      <div className="row">
        <div className="col h-30">
          <img class"img-fluid" src="${mascotas}" alt="Pets" />
        </div>
      </div>
      <div className="row">
        <div className="col-12 d-flex justify-content-center">
          <h2 class="text-center">Encuentra tu amigo fiel</h2>
          <p class="text-center mx-auto w-75">
          Cuando adoptas a una mascota, cosas maravillosas suceden en tu vida. Si estás pensando en tener un nuevo integrante en tu familia; ¡estás en el lugar correcto!
          </p>
        </div>
      </div>
      <a href="#/inicio2/" class="col h-30 vw-100 text-decoration-none">
        <div   class="d-grid gap-2 col-6 mx-auto">
          <button class="btn btn-primary rounded-pill" type="button">Siguiente</button>
        </div>
      </a>
  </div>
  `
  );
}
export default Inicio1;


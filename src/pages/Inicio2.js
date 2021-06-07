import adoptadas from '../assets/inicio/Adoptado.svg';

const Inicio2 = ()=>{
  return(`
  <div class="vh-100 vw-90 container-fluid d-flex flex-column justify-content-center align-items-center ">    
  <div className="row">
    <div className="col h-30">
      <img class"img-fluid" src="${adoptadas}" alt="Pets" />
    </div>
  </div>
  <div className="row">
    <div className="col-12 d-flex justify-content-center">
      <h2 class="text-center">Crea una nueva historia</h2>
      <p class="text-center mx-auto w-75">
      Adoptar puede ser una de las experiencias más grandiosas de tu vida, donde compartirás bellos momentos con estos amiguitos fieles, tiernos y llenos de amor para regalar.
      </p>
    </div>
  </div>
  <a href="#/home/" class="col h-30 vw-100 text-decoration-none">
    <div   class="d-grid gap-2 col-6 mx-auto">
      <button class="btn btn-primary rounded-pill" type="button">Siguiente</button>
    </div>
  </a>
</div>
  `
  );
}

export default Inicio2;
import inicioLogo from '../assets/inicio/inicioLogo.png';
import webpack from '../assets/tech/webpack.svg';
import babel from '../assets/tech/Babel_Logo.svg';
import bootstrap from '../assets/tech/Bootstrap.svg';

const Inicio = ()=>{
  return(`
  <a href="#/inicio1/" class="text-decoration-none text-reset">
    <div class="vh-100 d-flex flex-column justify-content-center align-items-center ">    
    <div className="logo">
        <img src="${inicioLogo}" alt="inicio logo" />
    </div>
    <div className=" d-flex flex-column align-items-center justify-content-center">
      <h2 class="text-center ">Ivan Andres Diaz</h2>
      <p class="text-center ">Single Page App JS vanilla</p>
      <div className="tecnologias">
      <img src="${webpack}" alt="Webpack" />
      <img src="${babel}" alt="babel" />
      <img src="${bootstrap}" alt="bootstrap" />
    </div>
    </div>
    </div>
    </a>    
  `
  );
}

export default Inicio;
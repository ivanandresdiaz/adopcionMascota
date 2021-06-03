import inicioLogo from '../assets/inicio/inicioLogo.png';

const Inicio = ()=>{
  return(`
    <div>
      <a href="#/inicio1/">
        <img src="${inicioLogo}" alt="inicio logo" />
      </a>    
    </div>
  `
  );
}

export default Inicio;
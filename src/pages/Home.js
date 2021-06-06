const Home = ()=>{
  return(`
    <div class="bg-primary">
      <h1>Home</h1>
      <button type="button">Gatos</button>
      <button type="button">Perros</button>
      <a href="#/1/">
        Pet
      </a> 
      <div className="Nav bg-light>
        <div id="Nav_home">
          <a href="#/home/">home</a>
        </div>
        <div id="Nav_chat">
          <a href="#/chat/">chat</a>
        </div>
        <div id="Nav_favoritos">
          <a href="#/favoritos/">favoritos</a>
        </div>
        <div id="Nav_perfil">
          <a href="#/perfil/">perfil</a>
        </div>
      </div>  
    </div>
  `
  );
}
export default Home;

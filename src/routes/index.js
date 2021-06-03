import Inicio from '../pages/Inicio.js';
import Inicio1 from '../pages/Inicio1.js';
import Inicio2 from '../pages/Inicio2.js';
import Home from '../pages/Home.js';
import Pet from '../pages/Pet.js';
import Favoritos from '../pages/Favoritos.js';
import Chat from '../pages/Chat.js';
import Perfil from '../pages/Perfil.js';
import Error404 from '../pages/Error404.js';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes.js';

const routes ={
  '/': Inicio,
  '/inicio1':Inicio1,
  '/inicio2':Inicio2,
  '/home':Home,
  '/:id': Pet,
  '/favoritos':Favoritos,
  '/chat':Chat,
  '/perfil':Perfil
}

const router= async()=>{
  const content = document.getElementById('content')||null;
  const hash = getHash();
  const route = await resolveRoutes(hash);
  const render = routes[route]? routes[route]:Error404;
  content.innerHTML = await render();
}
export default router;
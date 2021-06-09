
import router from './routes/index';
import './scss/custom.scss';

window.addEventListener('load',router);
window.addEventListener('hashchange',router);
var favoritos= [];
localStorage.setItem('favoritos',JSON.stringify(favoritos)); 

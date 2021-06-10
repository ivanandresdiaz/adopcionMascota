
import router from './routes/index';
import './scss/custom.scss';

window.addEventListener('load',router);
window.addEventListener('hashchange',router);
var favoritos= [];
var gatosImg= [];
var gatosNames= [];
var perrosNames= [];
var perrosImg= [];
localStorage.setItem('favoritos',JSON.stringify(favoritos)); 
localStorage.setItem('gatosImg',JSON.stringify(gatosImg)); 
localStorage.setItem('gatosNames',JSON.stringify(gatosNames)); 
localStorage.setItem('perrosNames',JSON.stringify(perrosNames)); 
localStorage.setItem('perrosImg',JSON.stringify(perrosImg)); 


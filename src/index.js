
import router from './routes/index';
import './scss/custom.scss';

window.addEventListener('load',router);
window.addEventListener('hashchange',router);
var favoritos= [];
var gatosImg= [];
var gatosNames= [];
var perrosNames= [];
var perrosImg= [];
var username= [];
sessionStorage.setItem('favoritos',JSON.stringify(favoritos)); 
sessionStorage.setItem('gatosImg',JSON.stringify(gatosImg)); 
sessionStorage.setItem('gatosNames',JSON.stringify(gatosNames)); 
sessionStorage.setItem('perrosNames',JSON.stringify(perrosNames)); 
sessionStorage.setItem('perrosImg',JSON.stringify(perrosImg)); 
sessionStorage.setItem('username',JSON.stringify(username)); 


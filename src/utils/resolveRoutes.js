const resolveHash = (routeHash)=>{
  if(routeHash.length<=3){    
    if(routeHash==='/'){
      return '/';
    }else if(routeHash.includes('g')){
      return'/:idg'
    }else{
      return '/:idp'
    }
  }
  return `/${routeHash}`
}
export default resolveHash;
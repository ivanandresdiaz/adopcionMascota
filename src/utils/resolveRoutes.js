const resolveHash = (routeHash)=>{
  if(routeHash.length<=3){
    const validRoute = routeHash==='/'?'/':'/:id';
    return validRoute
  }
  return `/${routeHash}`
}
export default resolveHash;
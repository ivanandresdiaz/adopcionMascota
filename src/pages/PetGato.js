const PetGato = ()=>{
  const perrosData = JSON.parse(localStorage.getItem('perrosData'));
  const perrosName=JSON.parse(localStorage.getItem('perrosNames')); 
  console.log('Perros Data:',perrosData);
  console.log('Perros Name:',perrosName);
  return(`
    <section class="Pet">
      <h1>Pet Gato</h1>
      <a href="/Home"></a>
    </section>
  `
  );
}

export default PetGato;
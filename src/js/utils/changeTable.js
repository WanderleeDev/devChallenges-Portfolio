function changeTable() {
  const btnChange = document.querySelector('#btnSkill');
  
  btnChange.addEventListener( 'click',() => {
    const tableSkill = document.querySelector('#skill');
    tableSkill.classList.toggle('hiddenBlock');
  });
}

export default changeTable
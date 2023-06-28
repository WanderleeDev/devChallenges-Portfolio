import addBlock from "./src/js/utils/addBlock";
import ContainerData from "./src/js/components/ContainerData/ContainerData";

addBlock('#app',ContainerData, 'afterbegin');

const btnChange = document.querySelector('#btnSkill');

btnChange.addEventListener( 'click',() => {
  const tableSkill = document.querySelector('#skill');
  tableSkill.classList.toggle('hiddenBlock');
});
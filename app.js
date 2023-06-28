import addBlock from "./src/js/utils/addBlock";
import ContainerData from "./src/js/components/ContainerData/ContainerData";
import HobbiesSection from "./src/js/components/HobbiesSection/HobbiesSection";

addBlock('#app',ContainerData, 'afterbegin');
addBlock('#app',HobbiesSection, 'afterbegin');

const btnChange = document.querySelector('#btnSkill');

btnChange.addEventListener( 'click',() => {
  const tableSkill = document.querySelector('#skill');
  tableSkill.classList.toggle('hiddenBlock');
});
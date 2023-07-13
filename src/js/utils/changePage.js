import ProjectCard from "../components/ProjectCard/ProjectCard";
import projectData from "../components/ProjectSection/projectData";



//implementación del componente Card
const content = (start, end) => {
  return projectData.slice(start,end).map((card) =>{
    const {img, metaTag, title, description, demo, code} = card;
    return ProjectCard(img, metaTag, title, description, demo, code)
  }).join("") ;
} 

//Listener a los btns para cambiar el contenido
function changePage() {
  const listBtn =document.querySelectorAll('.btnPageIndex');
  const containerCards= document.querySelector('#containerCards');
  
  listBtn.forEach((btn, index)=>{
    btn.addEventListener('click', () => {
      switch (index) {
        case 0:
          containerCards.innerHTML = content(0,3);
          break;
        case 1:
          containerCards.innerHTML = content(3,6);
          break;
        case 2:
          containerCards.innerHTML = content(6,9);
          break;
        }
        //itera en la lista para quitar el estilo active
        listBtn.forEach(b => b.classList.remove('activeBtn'));
        //agrega active al btn seleccionado
        btn.classList.add('activeBtn');
      });
  });
}

export default changePage;
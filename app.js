import addBlock from "./src/js/utils/addBlock";
import Main from "./src/js/Main";
import changeTable from "./src/js/utils/changeTable";
import changePage from "./src/js/utils/changePage";
import renderByTag from "./src/js/utils/renderBytag";

(() =>{
  addBlock('#app', Main(), 'afterbegin');
  changeTable();
  changePage();
  renderByTag();
})();




const containerProjects = document.querySelector('#sectionProjects');
containerProjects.style.transform = "translateX(0%)";
let distanceToTravel = 0;
const containerCards = document.querySelector('#containerCards');
console.log(containerCards);

containerProjects.addEventListener('click', (event)=>{
  if(event.target.id === 'btnRightSlider'){
    distanceToTravel -= 33.3;
    distanceToTravel = Math.max(distanceToTravel, -66.6)
    containerCards.style.transform = `translateX(${distanceToTravel}%)`
  }else if(event.target.id === 'btnLeftSlider'){
    distanceToTravel += 33.3;
    distanceToTravel =  Math.min(distanceToTravel, 0)
    containerCards.style.transform = `translateX(${distanceToTravel}%)`
  }
})

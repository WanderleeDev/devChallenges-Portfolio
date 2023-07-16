function moveSlider() {
  const containerProjects = document.querySelector('#sectionProjects');
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
  });
}

export default moveSlider;
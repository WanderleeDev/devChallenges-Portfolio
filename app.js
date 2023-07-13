import addBlock from "./src/js/utils/addBlock";
import Main from "./src/js/Main";
import changeTable from "./src/js/utils/changeTable";
import changePage from "./src/js/utils/changePage";
import ContainerFilter from "./src/js/components/ContainerFilter/ContainerFilter";

addBlock('#app', Main(), 'afterbegin');

changeTable();

changePage();
const listTagBtn = document.querySelectorAll('.tagBtn');

console.log(listTagBtn);

listTagBtn.forEach(btn => {
  console.log(btn);
  btn.addEventListener('click', () => {
    let paramSearch = btn.textContent;
    addBlock('body', ContainerFilter(paramSearch));

    const closeBtn = document.querySelector('#modalBtn')
    closeBtn.addEventListener('click', () => closeBtn.parentNode.remove());
  });
});

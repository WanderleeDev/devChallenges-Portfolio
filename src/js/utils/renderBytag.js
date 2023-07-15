import ContainerFilter from "../components/ContainerFilter/ContainerFilter";
import addBlock from "../utils/addBlock";

//renderiza contenido por tag

function renderByTag() {
  const listTagBtn = document.querySelectorAll('.tagBtn');

  listTagBtn.forEach(btn => {
  
    btn.addEventListener('click', () => {
      //remover clase activeBtn de todos los botones
      listTagBtn.forEach(btn =>  btn.classList.remove('activeBtn'));
  
      //agregar el contenido filtrado y la clase activeBtn al btn seleccionado
      let paramSearch = btn.textContent;
      btn.classList.add('activeBtn');
      addBlock('body', ContainerFilter(paramSearch));
  
      //cerrar ventana
      const closeBtn = document.querySelector('#modalBtn')
      closeBtn.addEventListener('click', () => closeBtn.parentNode.remove());
    });
  });
}

export default renderByTag;
function addBlock(target, content, position= 'beforebegin') {
  const containerElement = document.querySelector(target);
  const err = 'Formatos permitidos: elementos HTML, o cadenas de string en formato HTML Y posiciones válidas: beforeend,afterend,afterbegin, valor por defecto beforebegin';

  if (content instanceof HTMLElement) {
    containerElement.insertAdjacentElement(position,content);
  }else if(typeof content === 'string' && content.startsWith('<') && content.endsWith('>')){
    containerElement.insertAdjacentHTML(position,content);
  }else{
    console.error(err);
  }
}

export default addBlock;

//Tratar de siempre que se usa una condicional primero validar para error, con fin de no hacer pasar ela argumento por todas las validaciones

//Versión corregida:

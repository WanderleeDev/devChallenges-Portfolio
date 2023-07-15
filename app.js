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
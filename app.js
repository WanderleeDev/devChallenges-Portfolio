import addBlock from "./src/js/utils/addBlock";
import changeTable from "./src/js/utils/changeTable";
import Main from "./src/js/Main";

addBlock('#app', Main(), 'afterbegin');

changeTable();

export function* getId() {
  // Tu código aquí 👈
  do {
    yield crypto.randomUUID().slice(0, 8);
  } while (true)
}
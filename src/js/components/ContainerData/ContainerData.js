import DataTable from "../Datatable/Datatable";
import DataTool from "../DataTool/DataTool";

const ContainerData = `
  <div class="max-w-sm grid rounded-xl overflow-hidden drop-shadow-xl">
    <button id="btnSkill" class="w-20 h-8 flex gap-2 justify-center items-center col-end-2 row-start-1 row-end-1 order-1 z-10 mt-5 justify-self-end cursor-pointer text-sky-600 font-black">
      <span>more</span>
      <span class="text-[.7rem]">&#10093</span>
    </button>
    ${DataTool()}
    ${DataTable()}
  </div>
`;

export default ContainerData.trim()
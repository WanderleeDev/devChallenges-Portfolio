import data from "./dataTools"

const DataTool = () =>{
  return(`
  <figure id="tools" class="flex flex-col justify-between bg-slate-100 md:max-w-sm py-4 px-6 col-star-1 col-end-2 row-start-1 row-end-1">
    <h2 class="uppercase py-2 font-medium text-xl">Tools</h2>
    <div>
      ${
        data.map((d)=>{
          const {tool, porcentaje} = d;
          return(`
          <div class="max-xs:flex-col max-xs:gap-4 flex justify-between items-center gap-8 capitalize py-2"> 
            <span class="block w-48 max-xs:w-max">${tool}</span>
            <div class="w-full bg-stone-300 h-[0.60013rem] rounded-lg relative overflow-hidden">
              <span class="absolute bg-blueBar inset-0" style="width: ${porcentaje}"></span>
            </div>
          </div>
          `)
        }).join('')
      }
    </div>
  </figure>
  `).trim()
}

export default DataTool;
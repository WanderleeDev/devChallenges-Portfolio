import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from "../ProjectSection/projectData";



const ContainerFilter = (title) => {
  return(`
  <section class="bg-stone-950/40 backdrop-blur-md fixed inset-0 grid place-items-center z-20 overflow-y-scroll">
    <button id="modalBtn" class="fixed top-6 right-6 bg-stone-100 w-8 h-8 text-lg rounded hover:bg-slate-950/40 duration-200 hover:text-slate-100">
      x
    </button>
    <h2>
      Projects developed in ${title}    
    </h2>
    <div class="w-10/12 bg-black/40 self-start grid grid-responsive gap-10 justify-items-center p-8 rounded">
      ${
        projectData.map((data)=>{
          const {img, metaTag, title, description, demo, code} = data;
          return ProjectCard(img, metaTag, title, description, demo, code)
        }).join('')
      }
    </div>
  </section>
  `).trim()
}

export default ContainerFilter;
import ProjectCard from "../ProjectCard/ProjectCard";
import projectData from "../ProjectSection/projectData";


function renderConditional(title, data) {
  if (title === 'All') {
    return data.map((d) => {
      const { title, description, img, demo, metaTag, code } = d;
      return(`
      ${ProjectCard(img, metaTag, title, description,demo,code)}
      `)
    }).join("")
  }
  return
} 


const ContainerFilter = (title) => {
  return(`
  <section class="bg-stone-950/40 backdrop-blur-md fixed inset-0 grid place-items-center z-20 overflow-y-auto">
    <button id="modalBtn" class="fixed top-6 right-6 bg-stone-100 w-8 h-8 text-lg rounded hover:bg-slate-950/40 duration-200 hover:text-slate-100">
      x
    </button>
    <h2>
      Projects developed in ${title}    
    </h2>
    <div class="w-10/12 bg-black/40 self-start grid grid-responsive gap-10 justify-items-center p-8 rounded">
      ${
        renderConditional(title, projectData)
      }
      ${
        projectData.filter((data) => data.metaTag.includes(title))
        .map((d) => {
          const { title, description, img, demo, metaTag, code } = d;
          return(`
          ${
            ProjectCard(img, metaTag, title, description,demo,code)
          }
          `)
        }).join("")
      }
    </div>
  </section>
  `).trim()
}

export default ContainerFilter;
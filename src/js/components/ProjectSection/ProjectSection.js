import projectData from "./projectData";
import ProjectCard from "../ProjectCard/ProjectCard";
import TagBar from "../TagBar/TagBar";
import IndexBar from "../IndexBar/IndexBar";

const ProjectSection = `
  <div id="sectionProjects" class="relative grid gap-4 overflow-hidden xs:justify-center sm:row-start-6 sm:col-start-1 sm:col-end-3 sm:justify-normal">
    ${TagBar}
    <div id="containerCards" class="grid grid-cols-3 justify-items-center   gap-4 widthCarrusel duration-300 md+:flex md+:w-full md+:gap-1 md+:justify-between md+:translateX-[initial]">
    ${
      projectData.slice(0,3).map(project=>{
        const {img, metaTag, title, description, demo, code} = project;
        return ProjectCard(img, metaTag, title, description, demo, code)
      }).join("")
    }
    </div>
    <div class="absolute z-20 flex justify-between items-center w-full top-[60%] translate-y-2/4 px-4 md+:hidden">
      <button id="btnLeftSlider" class="rounded-sm bg-blue-50 backdrop-blur-sm text-letterGray py-1 px-2 -scale-y-150">&#10092;</button>
      <button id="btnRightSlider" class="rounded-sm bg-blue-50 backdrop-blur-sm text-letterGray py-1 px-2 -scale-y-150">&#10093;</button>
    </div>
    ${IndexBar}
  </div>
`;

export default ProjectSection.trim();
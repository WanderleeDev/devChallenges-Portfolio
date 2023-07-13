import projectData from "./projectData";
import ProjectCard from "../ProjectCard/ProjectCard";
import TagBar from "../TagBar/TagBar";
import IndexBar from "../IndexBar/IndexBar";

const ProjectSection = `
  <div class="grid gap-4 xs:justify-center sm:row-start-5 sm:col-start-1 sm:col-end-3 sm:justify-normal ">
    ${TagBar}
    <div id="containerCards" class="sm:flex sm:gap-1 overflow-hidden sm:justify-between">
    ${
      projectData.slice(0,3).map(project=>{
        const {img, metaTag, title, description, demo, code} = project;
        return ProjectCard(img, metaTag, title, description, demo, code)
      }).join("")
    }
    </div>
    ${IndexBar}
  </div>
`;

export default ProjectSection.trim();
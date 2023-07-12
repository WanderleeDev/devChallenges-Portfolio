import projectData from "./projectData";
import ProjectCard from "../ProjectCard/ProjectCard";
import TagBar from "../TagBar/TagBar";
import IndexBar from "../IndexBar/IndexBar";

const ProjectSection = `
  <div class="grid gap-4 xs:justify-center">
    ${TagBar}
    ${
      projectData.map(project=>{
        const {img, metaTag, title, description, demo, code} = project;
        return ProjectCard(img, metaTag, title, description, demo, code)
      }).join("")
    }
    ${IndexBar}
  </div>
`;

export default ProjectSection.trim();
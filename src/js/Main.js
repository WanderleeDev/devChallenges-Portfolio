import ContainerData from "./components/ContainerData/ContainerData";
import HobbiesSection from "./components/HobbiesSection/HobbiesSection";
import ProjectSection from "./components/ProjectSection/ProjectSection";
import CardProfile from "./components/CardProfile/CardProfile";
import Blog from "./components/Blog/Blog";

const Main = () => {
  const tempContainer = `
      ${CardProfile}
      ${ContainerData}
      ${HobbiesSection}
      ${Blog}
      ${ProjectSection}`
  
  return tempContainer.trim();
}

export default Main;


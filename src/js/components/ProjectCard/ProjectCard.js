const ProjectCard = (img, metaTag, title,description,demo,code) => {
  return(`
  <article class=" grid gap-4 w-80 max-w-full bg-white p-4 rounded-xl ">
    <div class="grid gap-6">
      <img class="h-52 rounded-xl shadow-md" loading="lazy" src=${img} alt="project ${title}">
      <div class="text-base flex gap-4 items-center flex-wrap text-letterGray my-4">
        ${metaTag.map((m) => `<span title="" class="bg-blue-100 py-1 px-4 rounded-full">${m}</span>` ).join("")}
      </div>
    </div>
    <div class="grid gap-4">
      <h3 class="text-2xl">${title}</h3>
      <p class="text-base font-medium text-letterGray">${description}</p>
    </div">
    <div class="text-lg flex justify-start items-center gap-3 flex-wrap py-4">
      <a target="_blank" href=${demo} class=" grid place-content-center border-[1px] border-blueBar text-white bg-blueBar w-[8.4375rem] h-[2.875rem] rounded-xl" rel="noopener noreferrer" aria-label="go to demo">Demo</a>
      <a target="_blank" href=${code} class="grid place-content-center border-[1px] border-blueBar text-blueBar w-[7.375rem] h-[2.875rem] rounded-xl" rel="noopener noreferrer" aria-label="go to code">Code</a>
    </div>
  </article>
  `)
}

export default ProjectCard;
const JobCard = (img, title, job, description) => {
  return(`
  <div class="grid sm:gridColResponsive gap-4 min-h-[10rem]">
    <img class="w-28 rounded-xl" src=${img} alt=${title}>
    <div class="grid gap-0">
      <span class="text-sm">${title}</span>
      <h3 class="font-semibold">${job}</h3>
      <p class="text pt-6">${description}</p>
    </div>
  </div>
  `).trim()
}

export default JobCard;
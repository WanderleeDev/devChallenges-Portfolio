const HobbiesCard = (img, title, description) => {
  return(`
  <figure class="max-w-sm py-4  px-6 hover:bg-blue-50">
    <img class="rounded-xl h-[8.68rem] w-full object-cover aspect-video" src=${img} alt="image stock" loading="lazy">
    <div class="mt-6 grid gap-1">
      <span class="text-lg font-medium">${title}</span>
      <p class="text-base text-letterGray">${description}.</p>
    </div>
  </figure>
  `)
}

export default HobbiesCard;
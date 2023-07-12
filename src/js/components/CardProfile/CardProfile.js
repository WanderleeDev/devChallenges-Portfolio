import mail from '../../../img/mail.svg';
import linkedin from '../../../img/linkedin.svg';

const CardProfile = `
  <div class="max-w-6xl p-4 grid gap-4 bg-white rounded-xl text-lg sm:grid-cols-6 ">
    <img  class="aspect-square w-full rounded-xl col-span-2 row-span-3" alt="logo-linkedin" src="https://www.dropbox.com/s/i71yeuxf5xsodj7/gatoWeb.webp?raw=1" alt="my photo">
    <div>
      <p class="text-2xl font-semibold">Wanderlee Max</p>
      <span class="text-letterGray font-medium">Front-end developer</span>
    </div>
    <div class="py-4">
      <div class="flex gap-4 items-center ">
        <img class=" block aspect-square w-6 " loading="lazy" src=${mail} alt="logo-mail">
        <a href="mailto:wanderleedev@gmail.com<" target="_blank" rel="noopener noreferrer">Gmail</a>
      </div>
      <div class="flex gap-4 items-center">
        <img class="aspect-square w-6" loading="lazy" src=${linkedin} alt="logo-linkedin">
        <a href="https://www.linkedin.com/in/wanderlee-max/" target="_blank" rel="noopener noreferrer">Linkedin</a>
      </div>
    </div>
    <p class="font-light">
      Self-motivated developer, who is willing to learn and create outstanding UI applications.
    </p>
  </div>`;

export default CardProfile.trim();
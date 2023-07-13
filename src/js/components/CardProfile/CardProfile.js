import mail from '../../../img/mail.svg';
import linkedin from '../../../img/linkedin.svg';

const CardProfile = `
  <div class=" p-4 grid gap-4 bg-white rounded-xl text-lg sm:col-span-full sm:grid-cols-7 ">
    <img  class="aspect-square w-full h-full rounded-xl sm:col-span-2 sm:row-span-2" alt="logo-linkedin" src="https://www.dropbox.com/s/i71yeuxf5xsodj7/gatoWeb.webp?raw=1" alt="my photo">
    <div class="sm:col-span-3">
      <p class="text-2xl font-semibold">Wanderlee Max</p>
      <span class="text-letterGray font-medium">Front-end developer</span>
    </div>
    <div class="py-4 sm:col-span-2 sm:justify-self-end sm:py-0 md:justify-self-end md:mr-4">
      <div class="flex gap-4 items-center ">
        <img class=" block aspect-square w-6 " loading="lazy" src=${mail} alt="logo-mail">
        <a href="mailto:wanderleedev@gmail.com<" target="_blank" rel="noopener noreferrer">Gmail</a>
      </div>
      <div class="flex gap-4 items-center">
        <img class="aspect-square w-6" loading="lazy" src=${linkedin} alt="logo-linkedin">
        <a href="https://www.linkedin.com/in/wanderlee-max/" target="_blank" rel="noopener noreferrer">Linkedin</a>
      </div>
    </div>
    <div class="font-light text-base grid gap-4 max-w-[41rem] sm:col-span-5 sm:grid md:text-lg md:gap-0">
      <p >
        Self-motivated developer, who is willing to learn and create outstanding UI applications.
      </p>
      <p>
      Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.
      </p>
    </div>
  </div>`;

export default CardProfile.trim();
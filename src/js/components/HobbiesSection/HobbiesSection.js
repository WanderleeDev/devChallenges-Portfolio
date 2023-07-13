import HobbiesCard from "../HobbiesCard/HobbiesCard";
import dataHobbies from "./dataHobbies";

const HobbiesSection = `
  <section class="py-4 bg-white md:max-w-sm rounded-xl row-span-3 justify-self-center sm:justify-self-start">
    <h2 class="px-6 text-2xl font-medium">Hobbies</h2>
    <div>
      ${
        dataHobbies.map((hobby) => {
          const { img, description, title} = hobby;
          return HobbiesCard(img, title, description);
        }).join('')
      }
    </div>
  </section>
`;

export default HobbiesSection.trim();
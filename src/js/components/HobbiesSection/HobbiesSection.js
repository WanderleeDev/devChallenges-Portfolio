import HobbiesCard from "../HobbiesCard/HobbiesCard";
import dataHobbies from "./dataHobbies";

const HobbiesSection = `
  <section class="py-4 bg-white max-w-sm rounded-xl">
    <h2 class="px-6 text-2xl">Hobbies</h2>
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
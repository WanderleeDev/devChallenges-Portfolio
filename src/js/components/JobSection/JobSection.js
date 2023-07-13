import JobCard from "../JobCard/JobCard";
import jobData from "./jobData";

const JobSection = `
  <section class="bg-white justify-self-center rounded-xl p-4 grid gap-4 text-base row-span-2 md:max-w-none">
    <h2 class="text-2xl font-medium w-44">Experiences</h2>
    <div class="grid gap-14" >
    ${
      jobData.map((j) => {
        const {img, title, job, description} = j;
        return(`
          ${JobCard(img, title, job, description)}
        `)
      }).join("")
    }
    </div>
  </section>
  `;

export default JobSection.trim();
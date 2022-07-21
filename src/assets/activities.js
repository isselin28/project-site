import imc_thai from "./imc_thai.jpeg";
import imc_bulg from "./imc_bulg.jpeg";
import imc_taj from "./imc_taj.jpeg";
import ntu_open_aud from "./ntu_open_aud.jpeg";
import ntu_open_mc from "./ntu_open_mc.jpeg";
import ntu_open_stu from "./ntu_open_stu.jpeg";

const activities = {
  id: "activities",
  title: "Activities & Events",
  intro: "",
  projects: [
    {
      id: "ntu_open_house",
      menu: "NTU Open House Jakarta",
      tags: ["Student Ambassador"],
      title: "NTU Open House Jakarta",
      about:
        "Key speaker of the parent-student talk show session and represented the students from the Engineering programme, to share with 600+ audiences about NTU education and university experiences.",
      images: [ntu_open_aud, ntu_open_mc, ntu_open_stu],
    },
    {
      id: "mae_club",
      menu: "MAE Club",
      tags: ["Head Officer"],
      title: "Mechanical & Aerospace Engineering Club",
      about:
        "Led and coordinate a team of 11 members to publish 17 event yearly, reaching more than 3000 students of Mechanical and Aerospace Engineering through printed media and social media campaigns. Envisioned branding and publicity for events and sponsorship, directed and guided team members through workshops to study design concepts and using creative design softwares. Collaborated with other 25 members of the main-committee to discuss issues related with MAE students welfare and initiatives to improve university dynamics, on a weekly meeting basis.",
    },
    {
      id: "ntu_peak",
      menu: "NTU Peak Leadership",
      tags: [],
      title: "NTU Peak Leadership",
      about: "",
    },
    {
      id: "berkeley_summer",
      menu: "Berkeley Summer Exchange",
      title: "Berkeley Summer Exchange Programme",
      about: "",
    },
    {
      id: "inter_math",
      menu: "International Math Competitions",
      title: "International Mathematics Competitions",
      about:
        "Went to several Mathematics Competitions during middle school, as a representative of Indonesia's team. [IMC Thailand](https://chiuchang.org/imc/en/about/), IWYMIC Taiwan, IMC Singapore, WIZMIC India.",
      images: [imc_thai, imc_bulg, imc_taj],
      // caption:
      //   "(1) Ceremony Night. (2) With the Bulgaria team (3) The whole Indonesia Team, at Taj Mahal.",
    },
  ],
};

export default activities;

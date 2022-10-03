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
      id: "inter_math",
      menu: "International Math Competitions",
      title: "International Mathematics Competitions",
      about:
        "Went to several International Mathematics Competitions during middle school, as one of the member of Indonesia's National Mathematics Team. Gold medalist - WIZMIC India 2009, Silver Medalist - IMC Singapore 2009, Bronze medalist - IMC Thailand 2008 (28 countries).",
      //(https://chiuchang.org/imc/en/about/)
      images: [imc_thai, imc_bulg, imc_taj],
      caption:
        "(1) Ceremony Night in Chiangmai, Thailand. (2) With other participants from Bulgaria. (3) With Indonesia Team at Taj Mahal, India.",
      images_size: "S",
    },
    {
      id: "mae_club",
      menu: "MAE Club",
      tags: ["Head Officer"],
      title: "Mechanical & Aerospace Engineering Club (MAE Club)",
      about:
        "The MAE Club is the student's welfare organiser body of the Mechanical and Aerospace Engineering department in Nanyang Technological University. Along with other 25 members of the main-committee, we discussed issues related with MAE students' welfare and took initiatives to improve their university experiences. <br/><br/><ul> <li>Took the role as the Head Officer of Publicity and Publication for consecutive 2 years.</li><li>Led and coordinate a team of 11 members to publish 17 events yearly, reaching more than 3000 students of Mechanical and Aerospace Engineering through printed media and social media campaigns. </li><li>Developed branding design for events and sponsorship with companies. Created workshop sessions to guide and share knowledge with team members about design concepts and creative design softwares.</li></ul>",
    },
    {
      id: "ntu_open_house",
      menu: "NTU Open House Jakarta",
      tags: ["Student Ambassador"],
      title: "NTU Open House Jakarta",
      about:
        "Key speaker of the parent-student-professor talk show session, and represented the students of the Engineering programme, to share with 600+ audiences about NTU education and university experiences.",
      images: [ntu_open_aud, ntu_open_mc, ntu_open_stu],
      images_size: "S",
    },
    {
      id: "ntu_peak",
      menu: "NTU Peak Leadership",
      tags: [],
      title: "NTU Peak Leadership",
      about:
        "NTU PEAK is an intensive one-month case challenge programme co-developed by the university and industries to groom NTU students into industry-relevant future leaders who wish to impact the workplace and community. <br/><br/> <ul><li>One of the 32 selected candidates out of 300+ applicants across university cohorts to enter the programme.</li><li>Our team was co-paired to solve business problems with Société Générale, a French multinational investment bank and financial service. We developed and presented a proposal for new employee documentation system and data gathering method to improve HR capability in measuring and increasing employee's satisfaction within the company.</li></ul>",
    },
    {
      id: "summer_design",
      menu: "Joint Design Workshop",
      title: "Asia 7 Universities Joint Design Workshop",
      about:
        "The Joint Design Programme is a design workshop, held in collaboration with 7 universities across Asia (Singapore, Japan, Taiwan, China, and Hongkong) for teams to propose a new product design to solve relevant issue. On 2018, the workshop was held in NTU,Singapore.<br/><br/><ul><li>Attended lectures about design processes, design thinking, and simulation on user experience to achieve a final product design.</li><li>Collaborated with other team members from Japan, Taiwan, and China. Under the topic of Innovative Services & Devices, we designed an IoT product to assist deaf elderly during a conversation using TOSHIBA Recaius platform, utilizing it's voice-to-text recognition feature and cloud data storage.</li></ul>",
    },
    {
      id: "berkeley_summer",
      menu: "Berkeley Summer Exchange",
      title: "Berkeley Summer Exchange Programme",
      about:
        "Went for a 3 months summer exchange programme in University of California, Berkeley.<ul><li>DES INV 22: Prototyping and Fabrication, under the Berkeley's Jacobs Institute for Design Innovation. The course taught the concepts, skills and methods required to design, prototype, and fabricate physical objects through hands on projects. Topics include a range of prototyping and fabrication techniques including laser­cutting, 3D modeling and 3D printing, and interface mockups. Built a spinning top that leaves visible trails and a wood miniature tank controlled using Arduino UNO.</li></ul>",
    },
    // {
    //   id: "teaching_exp",
    //   menu: "Teaching Experiences",
    //   title: "Teaching Experiences",
    //   about:
    //     "Some teaching experience I had in the past.<ul><li>Middle-school, taught primary school ongoing for selection for national team</li><li>Middle-school and High-school: Taught classmates on various subjects, Physics, Math, Chemistry. One of the five students selected to be in a one-month peer-tutoring programme, subtituting a teacher to teach a class on a subject.</li><li>University: Tutor for NTU/NUS University Entrance Exam, Physics Class</li></ul>",
    // },
  ],
};

export default activities;

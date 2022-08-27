const gojek = {
  id: "gojek",
  title: "Gojek | Moka",
  intro:
    "Moka offers a point-of-sale (POS) application designed to simplify business operations for small and medium businesses, being used by merchants across Indonesia. The company was bought by Gojek on April 2020, one of the decacorn startups in South-East asia.<br/><br/>Below are the projects that I was involved in Moka / Gojek as a Frontend Engineer.",
  projects: [
    {
      id: "gostore",
      menu: "GoStore",
      title: "GoStore",
      tags: ["Mobile Web App Development"],
      about:
        "In order for POS to stay relevant and become the central nervous system of merchants, POS needs to evolve into a commerce enablement platform and support both offline and online transactions. As a core member of GoStore Frontend, we developed the application from the build-up. GoStore enables each merchant to have their own digital store, e-commerce functionalities, SEO, payment, and data tracking. <br/><ul><li>One of GoStore’s features is called Nationwide Shipping, which platforms merchants and users to ship and receive logistics nationally across Indonesia. PIC on frontend side, managed the projects requirements and cross-team collaborations with backend and QA team.</li><li> Developed Web share API features that allow users to share internal site content into their mobile's social media applications.</li><li>Lead stakeholders-engineers meetings for Behaviour Driven Development (BDD) specs using Cucumber.</li><li>Automate Lighthouse Performance by integrating LHCI job in gitlab.</li><li>Documented GoStore Page Flow to point out the repeating bugs caused by unstandardized flow. Gave suggestions on handling history routes as improvement for subsequent implementation.</li></ul>",
    },
    {
      id: "pos_features",
      menu: "POS Features",
      title: "Mobile Item Library",
      tags: ["POS Feature Development", "Lead"],
      about:
        "Backoffice was initially designed for desktop view. However in the recent user research, a large group (18%) of our users were using mobile devices to manage and create items, where using mobile view has caused some incompatibilities issues that made the user experiences broken. Hence, we need to develop a responsive UI for mobile users. <br/><ul><li> Lead the mobile version development of the item library page. Implemented feature with the new UI/UX design specifically for ease of mobile users, using media queries to handle responsive design for various mobile devices.</li></ul>",
    },
    {
      id: "react_component_library",
      menu: "React Component Library",
      tags: ["Engineering Improvements"],
      title: "React Component Library",
      about:
        "Backoffice, or what we called our merchant’s dashboard was growing intensively and was handled by an increasing number of software engineers. To improve development experience and codebase structures, we need to have a component library as a single source of truth for the UI components of Backoffice. <br/><ul><li> PIC of the project and development within the frontend team, closely collaborating with the UI/UX team to implement the new design system, successfully developed a prototype utilising Storybook.</li></ul>",
    },
    // {
    //   id: "gofood_middleware",
    //   menu: "GoFood middleware UI",
    //   title: "GoFood middleware UI",
    //   tags: ["Feature Development"],
    //   about:
    //     "After Moka was bought by Gojek, the plan to align Moka merchants to use GoFood (an online food delivery service platform) became imminent. As each application runs on a different platform, this project was to create a middleware UI that allows Moka users to onboard the GoFood app. It was my first experience in developing an end-to-end cycle of a frontend application.",
    // },

    // {
    //   "title": "Multi Layered Ingredient",
    //   "tags": ["POS Feature Development"],
    //   "about": "Multi Layered Ingredients is a feature to improve the creation of ingredients and recipes for merchants. Previously, ingredients were defined only as one type, and this caused merchants to manually create new submissions to store more complex ingredients. Let’s say in creating a burger, a more complex ingredient, such as burger patty, consists of other ingredients too: meat and onion. Multi layered ingredient feature allows merchants to store ingredients in different steps: raw, semi-finished ingredients, and recipes. This allows users to have a more precise inventory handling and to view the real-time stock of items."
    // },
    {
      title: "Advanced Inventory",
      tags: ["POS Feature Development"],
      about:
        "Heavy inventory handling improvements. Implemented various steps of approvals and different roles of business operators to handle the logistic processes when transferring the items/ingredients between numerous outlets of merchant's. <br/><ul><li>Developed frontend features to display chronological history and notes of the transfer, handle the UI and state management to implement full and partial transfer request. Core involvement in frontend development plan and API structure discussions.</li></ul>",
    },
    // {
    //   title: "Modifier Stock",
    //   tags: ["POS Feature Development"],
    //   about:
    //     "A short project to improve the existing modifiers tracking system and business partner Hubster onboarding number.",
    // },
  ],
};

export default gojek;

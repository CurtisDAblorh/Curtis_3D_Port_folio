import type { Experience, NavLink, Project, Service, Testimonial } from "../types";
import {
  reach,
  rmr,
  reverb,
  hand,
  portfolio1,
  calc,
  portfolio2,
  ecommerce,
  fedex,
  bright,
  wagamama,
  wanstor,
    mobile,
    backend,
    creator,
    web,
  } from "../assets";
  
  export const navLinks: NavLink[] = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "experience",
      title: "Work Experience",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services: Service[] = [
    {
      title: "Front End Developer",
      icon: web,
    },
    {
      title: "React Developer",
      icon: mobile,
    },
    {
      title: "Aspiring Fullstack Developer",
      icon: backend,
    },
    {
      title: "3D Character Creator",
      icon: creator,
    },
  ];
    
  const experiences: Experience[] = [
    {
      title: "Frontend Developer",
      company_name: "Reach Industries",
      icon:reach,
      iconBg: "white",
      date: "Jan 2024 - Present",
      points: [
        "Led end-to-end delivery of key product pages, collaborating with scientific customers and product owners to translate complex workflow requirements into Figma design prototypes, then owning implementation through to production.",
        "Architected and built responsive, cross-browser front-end experiences in React, Next.js and TypeScript, integrating REST APIs and real-time features (WebRTC, WebSockets) to support data-rich scientific interfaces.",
        "Integrated type-safe API contracts using Kubb-generated clients from the OpenAPI spec, keeping the frontend and the backend in sync as the API surface evolved while reducing runtime type errors.",
        "Built reusable, custom D3-based visualisation components for timeline and scientific data views beyond standard chart library capabilities, developing and testing them in isolation via a shared Storybook workshop published through CI.",
        "Ran a fully containerised local development workflow (Docker) spanning multiple repositories, enabling isolated, full-stack agentic prototyping and feature development as well as faster iteration across the team.",
        "Drove test coverage strategy spanning unit, E2E and visual regression tests using Jest, React Testing Library, Playwright and Chromatic then re-engineered the CI pipeline — cutting E2E build times from 22 to under 14 minutes (~35% faster).",
        "Owned application security hygiene: identified and remediated vulnerabilities, established recurring automated dependency and vulnerability alerts and managed routine dependency upgrades to keep the codebase current and secure.",
      ],
    },
    {
      title: "Junior Frontend Developer",
      company_name: "RMR Property Investments",
      icon:rmr,
      iconBg: "black",
      date: "May 2022 - December 2024",
      points: [
        "Developed and maintained responsive web applications using HTML, CSS, JavaScript and React.Js, ensuring cross-browser compatibility and optimal performance.",
        "Collaborated closely with designers and back-end developers to implement UI designs and integrate REST APIs, ensuring a seamless user experience.",
        "Implemented the use of the React framework to enhance interactivity and create scalable and reusable components.",
        "Conducted thorough testing and debugging to identify and fix front-end issues, ensuring a bug-free user experience.",
        "Worked in an Agile development environment, participating in weekly stand-ups, sprint planning, and code reviews to ensure project milestones were met.",
      ],
    },
    {
      title: "Technical Consultant",
      company_name: "Wanstor",
      icon: wanstor,
      iconBg: "#E6DEDD",
      date: "March 2021 - April 2022",
      points: [
        "Utilised SQLcmd to enter Transact-SQL statements, creating databases and their filegroups on hosted client machines.",
        "Ran Powershell scripts in the Exchange Management shell to complete the more complex user requests.",
        "Managed the deployment of security updates and patches to highly vulnerable client end-user devices while liaising with the proactive and platform engineering teams to ensure the project was completed to a high standard.",
        "Configured and utilised Manage Engines Desktop Central agent as well as MAAS360 to troubleshoot and resolve issues present on client laptops, tablets, phones and POS devices.",
        "Supported users in a remote desktop environment via system admin tools such as server manager and further maintained said servers to improve overall efficiency.",
        "Liaised with and assisted where problem-solving was concerned, senior technical consultants, IT managers and developers on a range of projects carried out for client sites.",
      ],
    },
    {
      title: "Onsite Service and Support Engineer",
      company_name: "Wagamama",
      icon: wagamama,
      iconBg: "red",
      date: "September 2020 - March 2021",
      points: [
        "Served as the first point of contact for client customers, taking ownership of and completing requests while consistently maintaining high levels of customer service. The resulting feedback boosted my team’s KPI stats by 30%.",
        "Ensured the smooth running of all IT operations at customer client sites.",
        "Used a variety of programs including Active Directory, Desktop Central, Microsoft Azure and Exchange to troubleshoot and resolve user requests.",
        "Maintained great customer relations while visiting client sites to carry out projects or offer support when desired.",
        "Configured according to client-specific policy, laptops and PCs for end users in accordance with their job specifications.",
      ],
    },
    {
      title: "Graduate Technology Intern",
      company_name: "Bright Network",
      icon: bright,
      iconBg: "white",
      date: "May 2020 - July 2020",
      points: [
        "Conducted research regarding the current market of facial verification services in mobile devices and applications",
        "Compiled and gave presentations defining a project management plan, taking the feature from concept to release.",
      ],
    },
    {
      title: "Operational Support Agent ",
      company_name: "FedEX",
      icon: fedex,
      iconBg: "black",
      date: "March 2019 - April 2019",
      points: [
        "Communicated concisely and clearly to effectively answer customer calls, requests, and queries.",
        "Adapted to high-pressure environments, communicating with management and customers to meet daily quotas.",
        
      ],
    },
  ];
  
  const testimonials: Testimonial[] = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects: Project[] = [
    {
      name: "Ebuyer Storefront",
      description:
        "Modern ecommerce storefront with 150+ products, a D3 price-range brush, price-history and spending charts, a validated multi-step checkout with live card preview, wishlist and persistent bag. Built with an MUI component library and Storybook, tested with Jest and Playwright.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "mui",
          color: "green-text-gradient",
        },
        {
          name: "redux",
          color: "pink-text-gradient",
        },
        {
          name: "d3",
          color: "purple-text-gradient",
        },
      ],
      image: ecommerce,
      source_code_link: "https://github.com/CurtisDAblorh/Ebuyer-Ecommerce-Site",
      webpage_link: "https://curtisdablorh.github.io/Ebuyer-Ecommerce-Site/",
    },
    {
      name: "3D_Portfolio",
      description:
        "Web based portfolio showcasing my 3d character models, work experience and personal projects. Made interactive with many transitions as well as a sleek layout. Finally it contains svg, png and JSON animations displayed on a loop.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "tailwindcss",
          color: "green-text-gradient",
        },
        {
          name: "vite",
          color: "pink-text-gradient",
        },
        {
          name: "threejs",
          color: "purple-text-gradient",
        },
      ],
      image: portfolio2,
      source_code_link: "https://github.com/CurtisDAblorh/Curtis_3D_Portfolio",
      webpage_link:"https://curtisdablorh.github.io/Curtis_3D_Port_folio/",
    },
    {
      name: "Calculator App",
      description:
        "A fully functional calculator app that uses react hooks and state management as the main drivers. It allows the users to perform  calculations while commiting the prior calculation to memory. This prior calculation is displayed above.",
      tags: [
        {
          name: "reacthooks",
          color: "blue-text-gradient",
        },
        {
          name: "javascript(jsx)",
          color: "green-text-gradient",
        },
        {
          name: "cssgrid",
          color: "pink-text-gradient",
        },
      ],
      image: calc,
      source_code_link: "https://github.com/CurtisDAblorh/Calculator_App",
      webpage_link:"https://curtisdablorhcalculator.netlify.app/",
    },
    {
      name: "HTML & CSS Portfolio",
      description:
        "My first portfolio developed with only HTML and CSS, showcasing the Arduino C++ projects I have worked on and the coding skillset developed over the years. This website features navlinks and a custom favicon! ",
      tags: [
        {
          name: "HTML",
          color: "blue-text-gradient",
        },
        {
          name: "CSS",
          color: "green-text-gradient",
        },
        {
          name: "navlinks",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio1,
      source_code_link: "https://github.com/CurtisDAblorh/CurtisDAblorh_Portfolio.github.io",
      webpage_link:"https://curtisdablorh.github.io/CurtisDAblorh_Portfolio.github.io/",
    },
    {
      name: "C++ Orthotic Exoskeleton",
      description:
        "Designed and coded with C++ to rehabilitate patients with muscular dystrophy. This was able to be calibrated by the patient using touch sensitive pins that would read the magnitude of an EMG signal picked up by contracting their forearms.",
      tags: [
        {
          name: "C++",
          color: "blue-text-gradient",
        },
        {
          name: "fusion360",
          color: "green-text-gradient",
        },
        {
          name: "Arduino",
          color: "pink-text-gradient",
        },
      ],
      image: hand,
      source_code_link: "https://github.com/CurtisDAblorh/Orthotic_Exoskeleton",
      webpage_link:"https://github.com/CurtisDAblorh/Orthotic_Exoskeleton",
    },
    {
      name: "Reverb",
      description:
        "Genre-reactive music player using the Spotify API: the UI, live D3 audio visualiser and backdrop change with every track. Includes playlists, a command palette, keyboard shortcuts and a D3 listening-stats dashboard. Built with shadcn/ui and Storybook, tested with Jest and Playwright.",
      tags: [
        {
          name: "typescript",
          color: "blue-text-gradient",
        },
        {
          name: "nextjs",
          color: "green-text-gradient",
        },
        {
          name: "shadcn",
          color: "pink-text-gradient",
        },
        {
          name: "d3",
          color: "purple-text-gradient",
        },
      ],
      image: reverb,
      source_code_link: "https://github.com/CurtisDAblorh/reverb",
      webpage_link: "https://curtisdablorh.github.io/reverb/",
    },
  ];
  
  export { services, experiences, testimonials, projects };
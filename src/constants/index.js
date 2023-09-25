import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

import linkedin from '../assets/tech/linkedin.png';
import github from '../assets/tech/ghub.png';

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    id: "work",
    title: "Work Experience",
    icon: web,
  },
  {
    id: "projects",
    title: "Personal Projects",
    icon: mobile,
  },
  {
    id: "feedback",
    title: "Recommendation Letters",
    icon: backend,
  },
];

const technologies = [
  {
    name: "LinkedIn",
    icon: linkedin,
    link: "https://www.linkedin.com/in/nathaniel-klump-325190229/"
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/NathanKlump"
  },
];

const experiences = [
  {
    title: "Student Developer Program",
    company_name: "University Technology Services",
    icon: "https://media.licdn.com/dms/image/C4D0BAQFoG4SVQXfMXA/company-logo_200_200/0/1519855930252?e=1701302400&v=beta&t=y79Qv5gdTSbsATb96bVJhIARjuqKoaCQxNkHama6Kq4",
    iconBg: "#383E56",
    date: "Feb 2021 - May 2023",
    points: [
      "Worked on a small team to manage, operate, and support Oakland University's online service platform.",
      "Reduced time to push features to production by automating changes in the Test and Production environments.",
      "Actively participate and contribute to the new feature project initiatives.",
    ],
  },
  {
    title: "Software Engineer Intern",
    company_name: "Oasis Advanced Engineering",
    icon: "https://media.licdn.com/dms/image/C4E0BAQHoyGKJCyIWAA/company-logo_200_200/0/1530880609629?e=1701302400&v=beta&t=gYOqgMOBPSIu0MCPHK2rmABQJUfH6tAIEEUR9ul_1Cs",
    iconBg: "#383E56",
    date: "Summer 2023 Internship",
    points: [
      "Worked on a large team to develop Simulation software tailored for maintaining the Abrams main battle tank.",
      "Played an integral role in a significant and high-stakes demonstration presented to the US Army.",
      "Built a scripting program to automate the testing of the simulation application and eliminate human error in testing.",
      "Ensured system reliability by creating and implementing comprehensive Unit Tests with Xunit.",
    ],
  },
  {
    title: "Junior Application Developer",
    company_name: "University Technology Services",
    icon: "https://media.licdn.com/dms/image/C4D0BAQFoG4SVQXfMXA/company-logo_200_200/0/1519855930252?e=1701302400&v=beta&t=y79Qv5gdTSbsATb96bVJhIARjuqKoaCQxNkHama6Kq4",
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Implemented Vue.js and React.js to create interactive and user-friendly web applications.",
      "Played a key role in troubleshooting and resolving issues in the Test and Production environments, minimizing downtime and improving system reliability.",
      "Training new hires in front-end standards.",
    ],
  },
];

const testimonials = [
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

const projects = [
  {
    name: "SoundSync",
    description:
      "Web-based platform that allows users to bypass the fee for listening to music on apps like Spotify. It automatically downloads YouTube playlist videos and organizes them into a database. With user-friendly controls powered by React and Express.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "express",
        color: "green-text-gradient",
      },
      {
        name: "firebase",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/5TLq4hf/1691073019770.jpg",
    source_code_link: "https://github.com/NathanKlump/background-music",
  },
  {
    name: "Herald",
    description:
      "The server monitors users' voice channel activities, sending personalized messages when users join or leave. It is deployed to Google Cloud Run through creating a Docker image, pushing it to Google Container Registry, and deployed using the gcloud CLI.",
    tags: [
      {
        name: "docker",
        color: "blue-text-gradient",
      },
      {
        name: "Kubernetes",
        color: "green-text-gradient",
      },
      {
        name: "gcloud platform",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/nMgShvd/Screenshot-2023-08-27-211830.png",
    source_code_link: "https://github.com/NathanKlump/Herald/",
  },
  {
    name: "ServerNanny",
    description:
      "The server monitors the health of the other servers in my personal web. This solution takes advantage of the Google Auth system and Firebase database, providing a solid foundation for storing and managing data effectively.",
    tags: [
      {
        name: "NoSQL database",
        color: "blue-text-gradient",
      },
      {
        name: "Cron Job",
        color: "green-text-gradient",
      },
      {
        name: "Auth",
        color: "pink-text-gradient",
      },
    ],
    image: "https://i.ibb.co/Yy4kDNW/Screenshot-2023-09-25-145205.png",
    source_code_link: "https://github.com/NathanKlump/ServerNanny",
  },
];

export { services, technologies, experiences, testimonials, projects };

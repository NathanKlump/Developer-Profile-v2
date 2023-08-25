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
    title: "Associate Research Engineer",
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
    title: "Software Developer",
    company_name: "Enterprise Applications UTS",
    icon: "https://media.licdn.com/dms/image/C4D0BAQFoG4SVQXfMXA/company-logo_200_200/0/1519855930252?e=1701302400&v=beta&t=y79Qv5gdTSbsATb96bVJhIARjuqKoaCQxNkHama6Kq4",
    iconBg: "#E6DEDD",
    date: "Mar 2021 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Worked on a small team to manage, operate, and support Oakland University's online service platform.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Reduced time to push features to production by automating changes in the Test and Production environments.",
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
        name: "google cloud platform",
        color: "pink-text-gradient",
      },
    ],
    image: "https://media.licdn.com/dms/image/D562DAQG-FlwCzLFGOw/profile-treasury-image-shrink_1920_1920/0/1691073019770?e=1693594800&v=beta&t=3-SV-IE9UU8mDF3EQedilRtQ4SfMEMFcSuLo-2PRVRs",
    source_code_link: "https://github.com/NathanKlump/background-music",
  },
];

export { services, technologies, experiences, testimonials, projects };

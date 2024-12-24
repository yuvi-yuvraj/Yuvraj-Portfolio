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
    dsa,
    react,
    express,
    mern,
    apple,
    brainwave,
    pasteapp,
  } from "../assets";
  
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "Data Structures and Algorithms",
      company_name: "",
      icon: dsa,
      iconBg: "#383E56",
      date: "Sep 2023 - March 2023",
      points: [
        "Started learning DSA through foundational concepts like arrays, linked lists, and recursion.",
        "Used platforms like GeeksforGeeks, LeetCode, Codeforces, and YouTube tutorials for understanding concepts and problem-solving.",
        "Focused on solving problems daily to build a strong grasp of concepts.",
        " Enhanced logical thinking and debugging skills by analyzing edge cases and learning from mistakes.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "",
      icon: react,
      iconBg: "#E6DEDD",
      date: "April 2024 - July 2024",
      points: [
        " Began by learning HTML, CSS, and JavaScript as foundational frontend technologies.",
        " Utilized platforms like FreeCodeCamp, MDN Web Docs, and YouTube tutorials for learning.",
        "Created small websites to practice skills, including portfolios and blogs.",
        "Built clones of popular platforms like YouTube and a banking application to understand real-world UI/UX.",
      ],
    },
    {
      title: "Backend Developer",
      company_name: "",
      icon: express,
      iconBg: "#383E56",
      date: "Aug 2024 - Oct 2024",
      points: [
        " Learned the basics of RESTful APIs, HTTP methods, and CRUD operations.",
        "Began with backend-friendly languages like JavaScript (Node.js) and explored frameworks such as Express.js.",
        " Gained experience in designing RESTful APIs and handling request-response cycles efficiently.",
        "Working on projects like the Apple website clone, implementing backend logic for dynamic data and API integrations.",
      ],
    },
    {
      title: "Mern stack Developer",
      company_name: "",
      icon: mern,
      iconBg: "#E6DEDD",
      date: "Nov 2024 - Present",
      points: [
        "Developed a strong foundation in React.js, including hooks, state management, and component architecture.",
        "Built dynamic, responsive user interfaces using React Router and styled-components or CSS frameworks like Tailwind CSS.",
        "Mastered Node.js and Express.js to create scalable server-side applications.",
        "Designed efficient schemas and implemented Mongoose for seamless integration with the backend.",
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
      name: "Apple-Iphone",
      description:
        "This project focuses on replicating Apple’s sleek design, dynamic features like smooth scrolling and carousels, and ensuring a seamless user experience across devices.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: apple,
      source_code_link: "https://github.com/yuvi-yuvraj/Apple-Iphone",
    },
    {
      name: "Brainwave",
      description:
        "A modern website utilizing Three.js to create stunning, interactive 3D graphics and animations, offering an immersive user experience with seamless performance.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Gsap",
          color: "green-text-gradient",
        },
        {
          name: "Tailwindcss",
          color: "pink-text-gradient",
        },
      ],
      image: brainwave,
      source_code_link: "https://github.com/yuvi-yuvraj/Brainwave",
    },
    {
      name: "Paste App",
      description:
        "The Paste App is a smart productivity tool designed to help users store, organize, and manage important details and personal notes effortlessly.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Vercel",
          color: "green-text-gradient",
        },
        {
          name: "Css",
          color: "pink-text-gradient",
        },
      ],
      image: pasteapp,
      source_code_link: "https://github.com/yuvi-yuvraj/PasteApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
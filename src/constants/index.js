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
    threejs,
    dsa,
    react,
    express,
    mern,
    Real,
    Robot,
    Host,
    CP,
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
      date: "Sep 2023 - July 2024",
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
      date: "July 2024 - Dec 2024",
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
      date: "Jan 2025 - June 2025",
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
      date: "July 2024 - Present",
      points: [
        "Developed a strong foundation in React.js, including hooks, state management, and component architecture.",
        "Built dynamic, responsive user interfaces using React Router and styled-components or CSS frameworks like Tailwind CSS.",
        "Mastered Node.js and Express.js to create scalable server-side applications.",
        "Designed efficient schemas and implemented Mongoose for seamless integration with the backend.",
      ],
    },
    {
      title: "Competitive Programming",
      company_name: "",
      icon: CP,
      iconBg: "#E6DEDD",
      date: "Sep 2025 - Present",
      points: [
        " Solved 300+ competitive programming problems on platforms like LeetCode, Codeforces, and CodeChef.",
        " Strong understanding of Data Structures and Algorithms, including arrays, strings, linked lists, trees, graphs, and dynamic programming.",
        "Participated in coding contests to enhance problem-solving, analytical thinking, and time management skills.",
        "Optimized solutions by analyzing time and space complexity to meet competitive programming constraints.",
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
      name: "Code2Sense",
      description:
        "AI-powered web developer project featuring voice-to-text, image-to-text extraction, AI image generation, and online Python/Java code compilation, enabling seamless.",
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
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: Robot,
      source_code_link: "https://github.com/yuvi-yuvraj/Code2Sense",
    },
    {
      name: "File Hosting",
      description:
        "Web application that hosts files in a centralized database, allowing authorized users to access, share, and manage data seamlessly.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Mongodb",
          color: "green-text-gradient",
        },
        {
          name: "Express",
          color: "pink-text-gradient",
        },
      ],
      image: Host,
      source_code_link: "https://github.com/yuvi-yuvraj/FileHosting-App",
    },
    {
      name: "Real-time Chat App",
      description:
        "Our real-time chat app enables instant messaging and seamless photo sharing. With typing indicators and push notifications, users stay connected effortlessly.",
      tags: [
        {
          name: "React",
          color: "blue-text-gradient",
        },
        {
          name: "Express",
          color: "green-text-gradient",
        },
        {
          name: "Socket.io",
          color: "pink-text-gradient",
        },
      ],
      image: Real,
      source_code_link: "https://github.com/yuvi-yuvraj/RealTime_ChatApp",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };
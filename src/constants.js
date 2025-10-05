// Skills Section Logo's
import htmlLogo from './assets/tech_logo/html.png';
import cssLogo from './assets/tech_logo/css.png';
import javascriptLogo from './assets/tech_logo/javascript.png';
import reactjsLogo from './assets/tech_logo/reactjs.png';
import reduxLogo from './assets/tech_logo/redux.png';
import tailwindcssLogo from './assets/tech_logo/tailwindcss.png';
import gsapLogo from './assets/tech_logo/gsap.png';
import materialuiLogo from './assets/tech_logo/materialui.png';
import bootstrapLogo from './assets/tech_logo/bootstrap.png';
import nodejsLogo from './assets/tech_logo/nodejs.png';
import expressjsLogo from './assets/tech_logo/express.png';
import mysqlLogo from './assets/tech_logo/mysql.png';
import mongodbLogo from './assets/tech_logo/mongodb.png';
import firebaseLogo from './assets/tech_logo/firebase.png';
import pythonLogo from './assets/tech_logo/python.png';
import gitLogo from './assets/tech_logo/git.png';
import githubLogo from './assets/tech_logo/github.png';
import vscodeLogo from './assets/tech_logo/vscode.png';
import postmanLogo from './assets/tech_logo/postman.png';
import netlifyLogo from './assets/tech_logo/netlify.png';
import jupyterLogo from './assets/tech_logo/jupyter-logo.png'; 

// Experience Section Logo's
import Agatsa from './assets/work_logo/images.jpeg';


// Education Section Logo's
import United from './assets/education_logo/images.jpeg';
import kendriya from './assets/education_logo/kv.jpeg';


// Project Section Logo's
import FirkFreeAi from './assets/work_logo/FikrfreeAi.png';
import Astrovue from './assets/work_logo/Asrovue1.jpg'


export const SkillsInfo = [
  {
    title: 'Frontend',
    skills: [
      { name: 'HTML', logo: htmlLogo },
      { name: 'CSS', logo: cssLogo },
      { name: 'JavaScript', logo: javascriptLogo },
      { name: 'React JS', logo: reactjsLogo },
      { name: 'Redux', logo: reduxLogo },
      { name: 'Tailwind CSS', logo: tailwindcssLogo },
      { name: 'GSAP', logo: gsapLogo },
      { name: 'Material UI', logo: materialuiLogo },
      { name: 'Bootstrap', logo: bootstrapLogo },
    ],
  },
  {
    title: 'Backend',
    skills: [
      { name: 'Node JS', logo: nodejsLogo },
      { name: 'Express JS', logo: expressjsLogo },
      { name: 'MySQL', logo: mysqlLogo },
      { name: 'MongoDB', logo: mongodbLogo },
      { name: 'Firebase', logo: firebaseLogo },
   
    ],
  },
  {
    title: 'Languages',
    skills: [
      { name: 'Python', logo: pythonLogo },
      { name: 'JavaScript', logo: javascriptLogo },
    ],
  },
  {
    title: 'Tools',
    skills: [
      { name: 'Git', logo: gitLogo },
      { name: 'GitHub', logo: githubLogo },
      { name: 'VS Code', logo: vscodeLogo },
      { name: 'Postman', logo: postmanLogo },
      { name: 'Netlify', logo: netlifyLogo },
      { name: 'Jupyter Lab', logo: jupyterLogo  }
    ],
  },
];

  export const experiences = [
    {
      id: 0,
      img: Agatsa,
      role: "Software Developer",
      company: "Agatsa Software Ltd.",
      date: "June-August-2025",
      desc: `Worked on Astrovue app , contributing to both frontend and backend. Backend (FastAPI, Python): Implemented birth chart generation, astrology APIs, and integrated an AI chatbot (OpenAI).Frontend (React Native, Expo): Built UI components for birth charts, chatbot, and core features.Created a deep learning CNN model for food image classification and nutrition-based recommendations.Optimized backend–frontend integration, enhancing performance and user experience. `,
      skills: [
        "Machine Learing",
        "Deep learning",
        "HTML",
        "CSS",
        "JavaScript",
        "React JS",
        "React-native",
        "Node JS",
        "Machine Learing",
        "Firebase",
        "Redux"
      ],
    }
  ];
  
  export const education = [
    {
      id: 0,
      img: United,
      school: "United University,Prayagraj",
      date: "August 2022 - May 2026",
      grade: "7.9 CGPA",
      desc: "Currently in the final year of my B.Tech CSE with specialization, gaining strong foundations in computer science along with advanced knowledge in artificial intelligence and machine learning. My coursework and projects focus on deep learning, data science, and intelligent systems, preparing me to apply AI/ML solutions to real-world challenges.",
      degree: "Bachelors of Technology -CSE (AI/ML)",
    },
    {
      id: 1,
      img: kendriya,
      school: "Kendriya Vidyalaya Kishtwar(J&K)",
      date: "2020 - 2021",
      grade: "86%",
      desc: "I have completed my 12th with physics ,chemistry ,math from kv kishtwar",
      degree: "CBSE(12th) - PCM",
    },
    {
      id: 2,
      img: kendriya,
      school: "Kendriya Vidyalaya Kishtwar(J&K)",
      date: "2018 -  2019",
      grade: "74%",
      desc: "I have completed my 10th from kv kishtwar",
      degree: "CBSE(10th) - PCM",
    },
    
  ];
  
  export const projects = [
    {
      id: 0,
      title: "FirkfreeAi-SaaS",
      description:"Built a full-stack Ai SaaS application It offers powerful AI-driven tools including article generation, image creation, background object removal, and resume review, providing users with a seamless and intelligent content creation experience",
      tags: ["Express", "React", "JavaScript","Postgres", "Tailwind CSS", "Google-Gemini-API"],
      image:FirkFreeAi
  
    },
    {
      id: 1,
      title: "Astrovue App", 
      description:"Astrovue App Built backend features using FastAPI (Python) for birth chart generation and integrated AI chatbot powered by OpenAI.Enhanced overall app performance through optimized backend–frontend communication. ",
      tags: ["HTML", "CSS", "JavaScript","React-native","openAi","Firebase","Tailwind CSS"],
      image:Astrovue
      
  
    },
    {
      id: 1,
      title: "Hotel booking Website",
      description:"Built a full-stack hotel booking application using Node.js, Express.js, MongoDB, featuring user authentication and property listings.Inspired by Airbnb, implemented real-world booking functionalities for hands-on experience.",
      tags: ["HTML", "CSS", "JavaScript","EJS", "Tailwind CSS","Mongodb"],
  
    },
    
  ];  
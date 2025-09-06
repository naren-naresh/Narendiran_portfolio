import MyWssBm from "../assets/MY_WWS_BM.png"
import WwsNexus from "../assets/wws_nexus_preview.png"
import ModernPage from "../assets/Modern-react-landing-page.png"
import CodeTutor from "../assets/Code-Tutor-Ui.png"

const Works = [
  {
    img: WwsNexus,
    title: "WWS Nexus CRM",
    techStack: "React.js | Redux Toolkit | GraphQL (Apollo) | Node.js | MongoDB | AWS",
    description: "Designed & built a real-time CRM connecting DME providers, patients, and physicians. Implemented secure GraphQL APIs (subscriptions for real-time sync), JWT auth with refresh, role-based access control, real-time chat, and CI/CD deployment using GitHub Actions + AWS CodePipeline/CodeDeploy.",
    appLink: "https://www.gonexuscare.com/",           
    // frontendLink: "#",      
    // backendLink: "#",
    isAvailableLink: true
  },
  {
    img: MyWssBm,
    title: "WWS Business Manager",
    techStack: "React.js | Node.js | Express | MongoDB | JWT",
    description: "Built a secure insurance verification system with role-based workflows, schema validation, and optimized MongoDB queries. Delivered 20+ reusable frontend components and 30+ REST endpoints. Performance improvements reduced API latency by ~40% and lowered claim rejections.",
    appLink: "https://www.mywwsbm.com/",
    // frontendLink: "#",
    // backendLink: "#",
    isAvailableLink: true
  },
//   {
//     img: EcomPreview,
//     title: "MERN E-Commerce / Demo",
//     techStack: "React | Redux Toolkit | Node | MongoDB | Formik/Yup",
//     description: "A demo e-commerce app demonstrating product listing, cart flow, Formik forms with Yup validation, and inventory updates — used for demonstrating clean state management and API integration.",
//     appLink: "#",
//     frontendLink: "#",
//     backendLink: "#",
//     isAvailableLink: false
//   }
]

const otherWorks = [
    {
      img: ModernPage,
      title: "Modern Landing Page",
      techStack: "React.js | Tailwind Css | Framer Motion",
      description: "Modern Landing page using react tailwind farmer motion",
      appLink: "https://modern-landing-page-mu-ten.vercel.app/#home",           
      // frontendLink: "#",      
      // backendLink: "#",
      isAvailableLink: true
    },
    {
      img: CodeTutor,
      title: "Modern Landing Page #1",
      techStack: "React.js | Tailwind Css",
      description: "Modern Landing page using react tailwind farmer motion",
      appLink: "https://react-landing-page-1-rho.vercel.app/",           
      // frontendLink: "#",      
      // backendLink: "#",
      isAvailableLink: true
    },
]


const Skills = [
  { name: "React.js" },
  { name: "Redux Toolkit" },
  { name: "Axios" },
  { name: "JavaScript (ES6+)" },
  { name: "HTML5 & CSS3" },
  { name: "Tailwind CSS" },
  { name: "Vite" },
  { name: "Formik & Yup" },
  { name: "Node.js & Express.js" },
  { name: "RESTful APIs" },
  { name: "GraphQL (Apollo Server/Client)" },
  { name: "JWT Authentication" },
  { name: "MongoDB & MySQL" },
  { name: "AWS (EC2, CodeDeploy, CodePipeline)" },
  { name: "Git & GitHub Actions" },
  { name: "Postman" },
  { name: "Core java(JDBC) & Collections" },
  { name: "Jest / Vitest" }
]

export { Works, Skills, otherWorks }
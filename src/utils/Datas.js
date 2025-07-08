import MyWssBm from "../assets/MY_WWS_BM.png"
import ContactBook from "../assets/Contact-Book-05-04-2025_09_33_PM.webp"
import LinkTrim from "../assets/LinkTrim-05-04-2025_05_45_PM.webp"
import NoteApp from "../assets/Note_App.webp"

const Works = [
    {
        img: LinkTrim,
        title: "LinkTrim",
        techStack: "React Js | Node Js | Express Js | Mongo DB",
        description: "A Full-stack URL shortening application built using the MERN stack. Features include user authentication (JWT & bcrypt), allowing registered users to easily shorten long URLs and manage their trimmed links.",
        appLink: "https://url-shortner-steel-rho.vercel.app/",
        frontendLink: "https://github.com/debugmanoj/URL-shortner",  // Add GitHub Frontend link
        backendLink: "https://github.com/debugmanoj/url_API",  // Add GitHub Backend link
        isAvailalbeLink: true
    },
    {
        img: NoteApp,  // Replace with a relevant image asset like import NotesApp from "../assets/NotesApp.png"
        title: "Notes App ",
        techStack: "React Js | Node Js | Express Js | Mongo DB | Nodemailer",
        description:  "A full-stack notes application with user authentication and email verification. Users can register, manage notes post verification. Implements token-based login, persistent sessions, and protected routes.",
        appLink: "https://notes-app-dun-one.vercel.app/",  // Replace with actual Vercel frontend URL
        frontendLink: "https://github.com/debugmanoj/Notes-App",  // Replace if needed
        backendLink: "https://github.com/debugmanoj/Notes-App-Backend",   // Replace if needed
        isAvailalbeLink: true
    },
    {
        img: ContactBook,
        title: "Contact Book",
        techStack: "React Js | Node Js | Express Js | Mongo DB",
        description: "A full-stack contact management application built using the MERN stack. Features secure user authentication with cookies and session handling. Designed with a clean, responsive UI for adding, editing, viewing, and deleting contacts.",
        appLink: "https://contact-manager-client-seven.vercel.app/",
        frontendLink: "https://github.com/debugmanoj/Contact_Manager_Client",  // Add GitHub Frontend link
        backendLink: "https://github.com/debugmanoj/Contact_Manager_Server",  // Add GitHub Backend link
        isAvailalbeLink: true
    },
    {
        img: MyWssBm,
        title: "WWS Business Manager (Company Project - Private)",
        description: "A web application designed for verifying patient insurance information, with roles like E&B Data Integrity Specialist and E&B Caller Specialist to ensure the accuracy of insurance details and prevent errors in claim processing.",
        techStack: "React Js | Node Js | Express Js | Mongo DB",
        isAvailalbeLink: false
        // appLink:""
    },


];

const otherWorks = [
    {
        id: "1",
        title: "Repository And Adapter Pattern",
        techStacks: "React Js - 2025",
        appLink: "https://github.com/debugmanoj/Design_Pattern--Adapter-and-Repository-Pattern"

    },
    {
        id: "2",
        title: "Web Worker API",
        techStacks: "HTML - 2025",
        appLink: "https://github.com/debugmanoj/Web_worker_api"
    },
    {
        id: "3",
        title: "Thin Pandam",
        techStacks: "MERN - 2024",
        appLink: "https://thinpandam.vercel.app/signIn"

    },
    {
        id: "4",
        title: "Redux Listener Middleware",
        techStacks: "React Js - 2024",
        appLink: "https://github.com/debugmanoj/Web_worker_api"
    },
    {
        id: "99",
        title: "More Work",
        techStacks: "MERN, Design Pattern",
        appLink: "https://github.com/debugmanoj?tab=repositories"
    },

]
export { Works, otherWorks }
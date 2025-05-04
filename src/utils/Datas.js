import MyWssBm from "../assets/MY_WWS_BM.png"
import ContactBook from "../assets/Contact-Book-05-04-2025_09_33_PM.webp"
import LinkTrim from "../assets/LinkTrim-05-04-2025_05_45_PM.webp"

const Works = [
    {
        img: LinkTrim,
        title: "LinkTrim",
        description: "React Js | Node Js | Express Js | Mongo DB",
        appLink:"https://url-shortner-steel-rho.vercel.app/",
        isAvailalbeLink:true
    },
    {
        img: ContactBook,
        title: "Contact Book",
        description: "React Js | Node Js | Express Js | Mongo DB",
        appLink:"https://contact-manager-client-seven.vercel.app/",
        isAvailalbeLink:true
    },
    {
        img: MyWssBm,
        title: "WWS Business Manager (Company Project - Private)",
        description: "React Js | Node Js | Express Js | Mongo DB",
        isAvailalbeLink:false
        // appLink:""
    },


];

const otherWorks = [
    {
        id:"1",
        title:"Repository And Adapter Pattern",
        techStacks:"React Js - 2025",
        appLink:"https://github.com/debugmanoj/Design_Pattern--Adapter-and-Repository-Pattern"

    },
    {
        id:"2",
        title:"Web Worker API",
        techStacks:"HTML - 2025",
        appLink:"https://github.com/debugmanoj/Web_worker_api"
    },
    {
        id:"3",
        title:"Thin Pandam",
        techStacks:"MERN - 2024",
        appLink:"https://thinpandam.vercel.app/signIn"

    },
    {
        id:"4",
        title:"Redux Listener Middleware",
        techStacks:"React Js - 2024",
        appLink:"https://github.com/debugmanoj/Web_worker_api"
    },
    {
        id:"99",
        title:"More Work",
        techStacks:"MERN, Design Pattern",
        appLink:"https://github.com/debugmanoj?tab=repositories"
    },

]
export { Works,otherWorks }
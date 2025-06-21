import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import curd from "../../Assets/Projects/crud.PNG";
import ecommerce from "../../Assets/Projects/ecommerce.PNG";
import foodApp from "../../Assets/Projects/foodApp.PNG";
import quraanPlayer from "../../Assets/Projects/quraanPlayer.PNG";
import movieApp from "../../Assets/Projects/movieApp.PNG";
import hotelManagement from "../../Assets/Projects/hotel.PNG";
import pms from "../../Assets/Projects/pms.PNG";
import arrows from "../../Assets/Projects/arrows.PNG";

function Projects() {
  const projects= [
    {
    imgPath:foodApp,
    isBlog:false,
    title:'foodHub',
    description:"FoodHub is a modern recipe sharing and management app built with React.js and Vite. It allows users to add, update, and browse recipes with an intuitive interface. Features include real-time updates, user profiles, and a responsive design to enjoy cooking inspiration anytime, anywhere.",
ghLink:"https://github.com/SarahHeshamAli2/Food-Hub",
demoLink:"https://sarahheshamali2.github.io/Food-Hub/"
  },
  {
    imgPath:hotelManagement,
    isBlog:false,
    title:'Hotel Management System',
    description:`responsive web application designed to streamline hotel operations, featuring multilingual support with i18n, room
listings, booking management, and a secure Stripe payment gateway for online transactions. Built using React.js,
TypeScript, and Material-UI for a modern and dynamic user experience, with Axios for efficient API integration and
user authentication. Deployed on Netlify to ensure seamless accessibility and performance.`,
ghLink:"https://github.com/SarahHeshamAli2/HotelManagement",
demoLink:"https://jsb-hotelmanagement.netlify.app/"
  },
  {
    imgPath:pms,
    isBlog:false,
    title:'Project Management System',
    description:`Responsive web application for managing team tasks and workflow, featuring a role-based system with dedicated admin and user dashboards. Includes a drag-and-drop Kanban board with sticky notes for organizing tasks into To Do, In Progress, and Done columns. Admins can assign tasks to users, while users can update progress in real-time. Built using React.js (Vite) and Tailwind CSS for a performant and modern UI. State management handled with hooks and props, with a focus on reusability and component-based design. Fully responsive and deployed for seamless access across devices.`,
ghLink:"https://github.com/menna-elgindy/PMS",
demoLink:"https://poject-managment-system-jsb.netlify.app/"
  },
  {
    imgPath:movieApp,
    isBlog:false,
    title:'MovieApp',
    description:"A sleek movie app built with Vite and React.js that lets users browse movies by genre, add favorites, and easily manage their watchlist. Designed with a clean interface and responsive layout for seamless movie discovery and tracking.",
ghLink:"https://github.com/SarahHeshamAli2/movies-react",
demoLink:"https://sarahheshamali2.github.io/movies-react/"
  },
    {
     imgPath:quraanPlayer,
              isBlog:false,
              title:"Quraan Player",
description:"A simple and elegant Quran audio player built using vanilla JavaScript. Features include play, pause, navigation between surahs, and responsive design for a smooth listening experience.",
       ghLink:"https://github.com/SarahHeshamAli2/QuraanPlayer",
              demoLink:"https://sarahheshamali2.github.io/QuraanPlayer/"
  },
    {
     imgPath:arrows,
              isBlog:false,
              title:"Arrows ICC",
description:"Professional portfolio website for a business owner, showcasing services, projects, and contact options in a sleek and animated layout. Built with React.js and enhanced using Framer Motion for smooth, engaging transitions and UI interactions. Integrated EmailJS to enable direct client communication through a contact form without the need for a backend. The design emphasizes clarity, responsiveness, and user-friendly navigation—optimized for all screen sizes.",
       ghLink:"https://github.com/SarahHeshamAli2/Arrows",
              demoLink:"https://sarahheshamali2.github.io/Arrows/"
  },
  {
    imgPath:ecommerce,
    isBlog:false,
    title:"Exclusive E-commerce",
description:"A modern ecommerce web app built with Vite and React.js, featuring product browsing, shopping cart, user authentication, and smooth checkout flow. Fully responsive design for an intuitive shopping experience on any device.",

       ghLink:"https://github.com/SarahHeshamAli2/exclusive-web-app",
              demoLink:"https://sarahheshamali2.github.io/exclusive-web-app/"  
  },
  {
         imgPath:curd,
              isBlog:false,
              title:"Crud App",
description:"A full-featured CRUD application built with Vite and React.js that allows users to create, read, update, and delete data seamlessly. Includes intuitive form handling, real-time validation, and responsive UI for efficient data management.",
              ghLink:"https://github.com/SarahHeshamAli2/react-crud/",
              demoLink:"https://sarahheshamali2.github.io/react-crud/" 
  },


]
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {
            projects.map((proj,idx)=>          <Col key={idx} md={4} className="project-card">
            <ProjectCard
              imgPath={proj.imgPath}
              isBlog={proj.isBlog}
              title={proj.title}
description={proj.description}
              ghLink={proj.ghLink}
              demoLink={proj.demoLink}
            />
          </Col>)
          }




 
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

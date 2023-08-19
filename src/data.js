// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";

// Hero Images (add your images to the /images directory with the same names)
import HeroLight from "./images/hero-light.jpg";
import HeroDark from "./images/hero-dark.jpg";
// If you change the import names above then you need to change the export names below
export { HeroLight as Light };
export { HeroDark as Dark };

/* START HERE
 **************************************************************
  Add your GitHub username (string - "YourUsername") below.
*/
export const githubUsername = "wyhwong";

// Navbar Logo image
export const navLogo = undefined;

// Blog link icon - https://icon-sets.iconify.design/
export const Blog = <Icon icon="bi:linkedin" />;

/* About Me
 **************************************************************
  Add a second paragraph for the about me section.
*/
export const moreInfo =
  "As a software engineer, I engaged in various projects in computer vision, deep learning, IoT, and data science. I also took part in astrophysical researches in universities.";

/* Skills
 ************************************************************** 
  Add or remove skills in the SAME format below, choose icons here - https://icon-sets.iconify.design/
*/
export const skillData = [
  {
    id: 0,
    skill: <Icon icon="devicon:linux" className="display-4" />,
    name: "Linux",
  },
  {
    id: 1,
    skill: <Icon icon="logos:docker-icon" className="display-4" />,
    name: "Docker",
  },
  {
    id: 2,
    skill: <Icon icon="devicon:jenkins" className="display-4" />,
    name: "Jenkins",
  },
  {
    id: 3,
    skill: <Icon icon="devicon:git" className="display-4" />,
    name: "Git",
  },
  {
    id: 4,
    skill: <Icon icon="devicon:traefikproxy" className="display-4" />,
    name: "Traefik",
  },
  {
    id: 5,
    skill: <Icon icon="logos:nginx" className="display-4" />,
    name: "Nginx",
  },
  {
    id: 6,
    skill: <Icon icon="mdi:ansible" className="display-4" />,
    name: "Ansible",
  },
  {
    id: 7,
    skill: <Icon icon="devicon:pytorch" className="display-4" />,
    name: "PyTorch",
  },
  {
    id: 8,
    skill: <Icon icon="logos:tensorflow" className="display-4" />,
    name: "TensorFlow",
  },
  {
    id: 9,
    skill: <Icon icon="devicon:pandas" className="display-4" />,
    name: "Pandas",
  },
  {
    id: 10,
    skill: <Icon icon="logos:seaborn-icon" className="display-4" />,
    name: "Seaborn",
  },
  {
    id: 11,
    skill: <Icon icon="devicon:scikitlearn" className="display-4" />,
    name: "scikit-learn",
  },
  {
    id: 12,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 13,
    skill: <Icon icon="vscode-icons:file-type-cpp3" className="display-4" />,
    name: "C++",
  },
  {
    id: 14,
    skill: <Icon icon="devicon:c" className="display-4" />,
    name: "C",
  },
  {
    id: 15,
    skill: <Icon icon="devicon:go" className="display-4" />,
    name: "Golang",
  },
  {
    id: 16,
    skill: <Icon icon="logos:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 17,
    skill: <Icon icon="logos:r-lang" className="display-4" />,
    name: "R",
  },
  {
    id: 18,
    skill: <Icon icon="mdi:sql-query" className="display-4" />,
    name: "SQL",
  },
  {
    id: 19,
    skill: <Icon icon="cib:latex" className="display-4" />,
    name: "LaTeX",
  },
  {
    id: 20,
    skill: <Icon icon="devicon:blender" className="display-4" />,
    name: "Blender",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "https://drive.google.com/file/d/1HfRzvKIorMSd1W0z1jRJ1O9dUNwiTE6w/view?usp=sharing";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["TCPyTorch", "CATBOT", "TraefikLab"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "example-1",
    image: Logo,
  },
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mdorgokv";

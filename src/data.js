// Skills icons - https://icon-sets.iconify.design/
import { Icon } from "@iconify/react";

// Projects Images (add your images to the images directory and import below)
import Logo from "./images/logo.svg";
import JupyterLogo from  "./images/jupyter-logo.png";
import PytorchLogo from "./images/pytorch-logo.png";
import TensorflowLogo from "./images/tensorflow-logo.png";
import DartsLogo from "./images/darts-logo.png";
import PythonLogo from "./images/python-logo.png";
import StreamlitLogo from "./images/streamlit-logo.png";
import CUHKLogo from "./images/cuhk-logo.png";
import HKUSPACELogo from "./images/hkuspace-logo.png";
import SebitLogo from "./images/sebit-logo.png";
import USCLogo from "./images/usc-logo.png";
import FMTLogo from "./images/fmt-logo.png";
import GenevaLogo from "./images/geneva-logo.png";
import NagoyaLogo from "./images/nu-logo.png";
import TohokuLogo from "./images/tu-logo.png";
import JLPTLogo from "./images/JapanFoundation-logo.png";
import UIUCLogo from "./images/UIUC-logo.png";
import GoogleLogo from "./images/google-logo.png";
import DeepLearningAILogo from "./images/deeplearning.ai-logo.png";
import WesLogo from "./images/wes-logo.png";
import LIGOLogo from "./images/ligo-logo.png";
import IFTALogo from "./images/ifta-logo.png";
import CFALogo from "./images/CFA-logo.png";
import YULogo from "./images/YU-logo.png";
import ATALLogo from "./images/ATAL-Logo.png";
import UCSCLogo from "./images/UCSC-logo.png";
import UALogo from "./images/UA-logo.png";
import UTALogo from "./images/UTA-logo.png"

// Images (add your images to the /images directory with the same names)
import LightTheme from "./images/light.jpg";
import DarkTheme from "./images/dark.jpg";
// If you change the import names above then you need to change the export names below
export { LightTheme as Light };
export { DarkTheme as Dark };

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
export const intro_p1 =
  "Technology is life. Astrophysics and finance are interests.";

export const intro_p2 =
  "I specialize in developing solutions with Bayesian statistics and machine/deep learning under various ML frameworks like Darts and PyTorch. My research interests include time series analysis, artificial intelligence, IoT applications, and extreme gravity.";

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
    skill: <Icon icon="logos:fastapi-icon" className="display-4" />,
    name: "FastAPI",
  },
  {
    id: 11,
    skill: <Icon icon="logos:seaborn-icon" className="display-4" />,
    name: "Seaborn",
  },
  {
    id: 12,
    skill: <Icon icon="devicon:scikitlearn" className="display-4" />,
    name: "scikit-learn",
  },
  {
    id: 13,
    skill: <Icon icon="logos:python" className="display-4" />,
    name: "Python",
  },
  {
    id: 14,
    skill: <Icon icon="vscode-icons:file-type-cpp3" className="display-4" />,
    name: "C++",
  },
  {
    id: 15,
    skill: <Icon icon="devicon:c" className="display-4" />,
    name: "C",
  },
  {
    id: 16,
    skill: <Icon icon="devicon:go" className="display-4" />,
    name: "Golang",
  },
  {
    id: 17,
    skill: <Icon icon="logos:javascript" className="display-4" />,
    name: "JavaScript",
  },
  {
    id: 18,
    skill: <Icon icon="logos:r-lang" className="display-4" />,
    name: "R",
  },
  {
    id: 19,
    skill: <Icon icon="mdi:sql-query" className="display-4" />,
    name: "SQL",
  },
  {
    id: 20,
    skill: <Icon icon="cib:latex" className="display-4" />,
    name: "LaTeX",
  },
  {
    id: 21,
    skill: <Icon icon="logos:metabase" className="display-4" />,
    name: "Metabase",
  },
  {
    id: 22,
    skill: <Icon icon="logos:redis" className="display-4" />,
    name: "Redis",
  },
  {
    id: 23,
    skill: <Icon icon="devicon:blender" className="display-4" />,
    name: "Blender",
  },
];

export const educationData = [
  {
    id: 0,
    name: "Master of Science in Data Science",
    school: "The University of Texas at Austin",
    duration: "Since 2024",
    logo: UTALogo
  },
  {
    id: 1,
    name: "Bachelor of Science in Physics",
    school: "The Chinese University of Hong Kong",
    duration: "2018 - 2022",
    logo: CUHKLogo
  },
  {
    id: 2,
    name: "Advanced Diploma in Financial Technology",
    school: "HKU School of Professional and Continuing Education",
    duration: "2022 - 2023",
    logo: HKUSPACELogo
  },
  {
    id: 3,
    name: "Special Auditing Student",
    school: "Tohoku University",
    duration: "Oct 2021 - Mar 2022",
    logo: TohokuLogo
  },
  {
    id: 4,
    name: "Virtual Exchange Student",
    school: "Nagoya University",
    duration: "Apr 2021 - Aug 2021",
    logo: NagoyaLogo
  },
];

export const experienceData = [
  {
    id: 0,
    name: "Assistant R&D Engineer",
    company: "ATAL Engineering Group (ATAL)",
    duration: "Since Aug 2023",
    logo: ATALLogo
  },
  {
    id: 1,
    name: "Guest Speaker",
    company: "HKU School of Professional and Continuing Education",
    duration: "Nov 2023",
    logo: HKUSPACELogo
  },
  {
    id: 2,
    name: "Part-time Research Assistant",
    company: "University of Santiago de Compostela",
    duration: "Aug 2021 - Oct 2023",
    logo: USCLogo
  },
  {
    id: 3,
    name: "Software Engineer",
    company: "Sebit Company Limited",
    duration: "Jun 2022 - Aug 2023",
    logo: SebitLogo
  },
  {
    id: 4,
    name: "Exhibitor",
    company: "48th International Exhibition of Inventions Geneva",
    duration: "Apr 2023",
    logo: GenevaLogo
  },
  {
    id: 5,
    name: "AI Developer Intern",
    company: "Flying Milk Tea Company Limited",
    duration: "Dec 2021 - Jan 2022",
    logo: FMTLogo
  },
  {
    id: 6,
    name: "Research Intern",
    company: "The Chinese University of Hong Kong",
    duration: "May 2020 - Aug 2020 / Jun 2021 - Aug 2021",
    logo: CUHKLogo
  },
];

export const miscellaneousData = [
  {
    id: 0,
    name: "Undergraduate Membership",
    organization: "LIGO Scientific Collaboration",
    duration: "Since Jan 2021",
    logo: LIGOLogo
  },
  {
    id: 1,
    name: "Associate Financial Technologist",
    organization: "Institute of Financial Technologists of Asia",
    duration: "Since Aug 2023",
    logo: IFTALogo
  },
  {
    id: 2,
    name: "Japanese Language Proficiency Test N1",
    organization: "The Japanese Foundation",
    logo: JLPTLogo
  },
  {
    id: 3,
    name: "International Academic Qualifications (US/CA)",
    organization: "World Education Services",
    logo: WesLogo
  },
  {
    id: 4,
    name: "Reinforcement Learning Specialization",
    organization: "University of Alberta | Couresra",
    logo: UALogo
  },
  {
    id: 5,
    name: "Accelerated Computer Science Fundamentals",
    organization: "University of Illinois Urbana-Champaign | Couresra",
    logo: UIUCLogo
  },
  {
    id: 6,
    name: "Data Science for Investment Professionals Specialization",
    organization: "CFA Institute | Couresra",
    logo: CFALogo,
  },
  {
    id: 7,
    name: "TensorFlow Developer Professional Certificate",
    organization: "DeepLearning.AI | Couresra",
    logo: DeepLearningAILogo
  },
  {
    id: 8,
    name: "Data Analytics Professional Certificate",
    organization: "Google Career Certificates | Couresra",
    logo: GoogleLogo
  },
  {
    id: 9,
    name: "Certificate in Aviation Studies",
    organization: "HKU School of Professional and Continuing Education",
    logo: HKUSPACELogo
  },
  {
    id: 10,
    name: "Coursework: Financial Markets & Narrative Economics",
    organization: "Yale University | Couresra",
    logo: YULogo
  },
  {
    id: 11,
    name: "Bayesian Statistics Specialization",
    organization: "University of California, Santa Cruz | Couresra",
    logo: UCSCLogo,
    duration: "In Progress",
  },
];

// Resume link (string - "https://YourResumeUrl") - I am using CloudFront to share my resume (https://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html)
export const resume = "";

/* Projects
 ************************************************************** 
  List the repo names (string - "your-repo-name") you want to include (they will be sorted alphabetically). If empty, only the first 3 will be included.
*/
export const filteredProjects = ["TCPyTorch", "CATBOT", "TraefikLab"];

// Replace the defualt GitHub image for matching repos below (images imported above - lines 4-5)
export const projectCardImages = [
  {
    name: "TCPyTorch",
    image: PytorchLogo,
  },
  {
    name: "TraefikLab",
    image: JupyterLogo,
  },
  {
    name: "portfolio",
    image: Logo
  },
  {
    name: "Sam-Saga",
    image: PythonLogo
  },
  {
    name: "DriftSim",
    image: PythonLogo
  },
  {
    name: "PAPER",
    image: PythonLogo
  },
  {
    name: "streamlit-playground",
    image: StreamlitLogo
  },
  {
    name: "Tensorflow-Docker",
    image: TensorflowLogo
  },
  {
    name: "CATBOT",
    image: DartsLogo
  }
];

/* Contact Info
 ************************************************************** 
  Add your formspree endpoint below.
  https://formspree.io/
*/
export const formspreeUrl = "https://formspree.io/f/mdorgokv";

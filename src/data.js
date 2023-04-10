//  icons
import {
  FiYoutube,
  FiInstagram,
  FiGithub,
  FiDribbble,
  FiLayout,
  FiSettings,
  FiPenTool,
  FiTag,
  FiMail,
  FiMapPin,
  FiLinkedin,
} from 'react-icons/fi';

// companies icons
import FreelancerBrandIcon from './assets/img/brands/freelancer.png';
import UpworkBrandIcon from './assets/img/brands/upwork.png';
import FiverBrandIcon from './assets/img/brands/fiverr.png';
import BehanceBrandIcon from './assets/img/brands/behance.png';
import DribbbleBrandIcon from './assets/img/brands/dribbble.png';

// projects images
import Project1 from './assets/img/projects/astralis.PNG';
import Project2 from './assets/img/projects/todoapp.PNG';
import Project3 from './assets/img/projects/weatherapp.PNG';
import Project4 from './assets/img/projects/restaurantapp.PNG';
// import Project5 from './assets/img/projects/p5.webp';
// import Project6 from './assets/img/projects/p6.webp';

// skills images
import SkillImg1 from './assets/img/skills/html5.png';
import SkillImg2 from './assets/img/skills/css3.png';
import SkillImg3 from './assets/img/skills/js.png';
import SkillImg4 from './assets/img/skills/reactjs.png';
import SkillImg5 from './assets/img/skills/nextjs.png';
import SkillImg6 from './assets/img/skills/nodejs.png';
import SkillImg7 from './assets/img/skills/git.png';
import SkillImg8 from './assets/img/skills/figma.png';

// testimonial images
import TestiImage1 from './assets/img/testimonials/testimonial-1.webp';
import TestiImage2 from './assets/img/testimonials/testimonial-2.webp';
import TestiImage3 from './assets/img/testimonials/testimonial-3.webp';

// navigation
export const navigation = [
  {
    name: 'Home',
    href: 'home',
  },
  {
    name: 'About',
    href: 'about',
  },
  {
    name: 'Portfolio',
    href: 'portfolio',
  },
  {
    name: 'Services',
    href: 'services',
  },
  {
    name: 'Contact',
    href: 'contact',
  },
];

// social
export const social = [
  // {
  //   icon: <FiYoutube />,
  //   href: '',
  // },
  // {
  //   icon: <Fi />,
  //   href: '',
  // },
  {
    icon: <FiGithub />,
    href: 'https://github.com/MohammadEmadidrees',
  },
  {
    icon:<FiLinkedin/>,
    href: 'https://www.linkedin.com/in/mohammad-emad-idrees-36ba571b9/',
  },
];

// companies
export const brands = [
  {
    img: FreelancerBrandIcon,
    href: '',
  },
  {
    img: UpworkBrandIcon,
    href: '',
  },
  {
    img: FiverBrandIcon,
    href: '',
  },
  // {
  //   img: BehanceBrandIcon,
  //   href: '',
  // },
  // {
  //   img: DribbbleBrandIcon,
  //   href: '',
  // },
];

// projects
export const projectsData = [
  {
    id: '1',
    image: Project1,
    name: 'Astralis Website',
    category: 'Web Developement',
    href: 'https://astralisgg-4e468.web.app',
  },
  {
    id: '2',
    image: Project2,
    name: 'Todo Web Application',
    category: 'Web Developement',
    href: 'https://todo-app-reactjs-five.vercel.app/',
  },
  {
    id: '3',
    image: Project3,
    name: 'Weather Web Application',
    category: 'Web Developement',
    href: 'https://weather-web-app-reactjs.vercel.app/',
  },
  {
    id: '4',
    image: Project4,
    name: 'Restaurant Application',
    category: 'Web Developement',
    href: 'https://restaurant-menu-11.vercel.app/',
  },
  // {
  //   id: '5',
  //   image: Project5,
  //   name: 'project name 5',
  //   category: 'web development',
  // },
  // {
  //   id: '6',
  //   image: Project6,
  //   name: 'project name 6',
  //   category: 'web development',
  // },
];

// projects
export const projectsNav = [
  {
    name: 'all',
  },
  {
    name: 'UI/UX Design',
  },
  {
    name: 'web development',
  },
  {
    name: 'branding',
  },
];

// skill
export const skills = [
  {
    image: SkillImg1,
  },
  {
    image: SkillImg2,
  },
  {
    image: SkillImg3,
  },
  {
    image: SkillImg4,
  },
  {
    image: SkillImg5,
  },
  {
    image: SkillImg6,
  },
  {
    image: SkillImg7,
  },
  {
    image: SkillImg8,
  },
];

// services
export const services = [
  {
    icon: <FiLayout />,
    name: 'Web Design',
    description:
      'I am responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website or updating an already existing site.',
  },
  {
    icon: <FiSettings />,
    name: 'Web Development',
    description:
      'Writing well designed, testable, efficient code by using best software development practices. Creating website layout or user interfaces by using standard HTML,CSS,JavaScript and ReactJs',
  },
  // {
  //   icon: <FiPenTool />,
  //   name: 'Figma',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
  // {
  //   icon: <FiTag />,
  //   name: 'SEO',
  //   description:
  //     'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio perferendis volm quibusdam ullam qui dolore.',
  // },
];

// testimonials
// export const testimonials = [
//   {
//     authorImg: TestiImage1,
//     authorText:
//       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//     authorName: 'Olivia Doe',
//     authorPosition: 'Head of Design, Google',
//   },
//   {
//     authorImg: TestiImage2,
//     authorText:
//       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//     authorName: 'Olivia Doe',
//     authorPosition: 'Head of Design, Google',
//   },
//   {
//     authorImg: TestiImage3,
//     authorText:
//       'Love the simplicity of the service and the prompt customer support. We can’t imagine working without it.',
//     authorName: 'Olivia Doe',
//     authorPosition: 'Head of Design, Google',
//   },
// ];

// contact
export const contact = [
  {
    icon: <FiMail />,
    title: 'Have a question?',
    subtitle: 'I am here to help you.',
    description: 'Email me at emadidrees99@gmail.com',
  },
  {
    icon: <FiMapPin />,
    title: 'Current Location',
    subtitle: 'Karachi, Pakistan',
    description: 'Serving clients worldwide',
  },
];

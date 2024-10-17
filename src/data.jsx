// Importing the icon properly
import { SiOpenaigym } from "react-icons/si";

// Modern way of importing images in React
import avatar1 from "./images/avatar1.jpg";
import avatar2 from "./images/avatar2.jpg";
import avatar3 from "./images/avatar3.jpg";
import avatar4 from "./images/avatar4.jpg";
import avatar5 from "./images/avatar5.jpg";

import trainer1 from "./images/trainer1.jpg";
import trainer2 from "./images/trainer2.jpg";
import trainer3 from "./images/trainer3.jpg";
import trainer4 from "./images/trainer4.jpg";
import trainer5 from "./images/trainer5.jpg";
import trainer6 from "./images/trainer6.jpg";

// Fixing JSX in plain JavaScript objects
export const links = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Gallery", path: "/gallery" },
  { name: "Plans", path: "/plans" },
  { name: "Trainers", path: "/trainers" },
  { name: "Contact", path: "/contact" },
];

export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />, // Referencing the icon function directly
    title: "Program One",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/111",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Program Two",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/222",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Program Three",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/333",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Program Four",
    info: "This is the day that the lord has made. We will rejoice!",
    path: "/programs/444",
  },
];

export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Value One",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Value Two",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Value Three",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Value Four",
    desc: "Placeat quidem facere dicta modi? Pariatur exercitationem illum.",
  },
];

export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer: "Consectetur adipisicing elit. Non ipsa dolorem...",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer: "Distinctio nihil blanditiis accusantium atque...",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer: "In publishing and graphic design, Lorem ipsum...",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer: "Molestiae quidem ab soluta exercitationem culpa...",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio or both?",
    answer: "Maiores fuga, cum praesentium esse laudantium...",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer: "Quas, est at! Molestiae quidem ab soluta exercitationem...",
  },
];

export const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote:
      "Lorem ipsum dolor sit amet co qui in. Necessitatinsectetur adipisicing elit. Sit animi odit voluptate sed. Ducimus ipsa quisquam, vero ut ea assumenda, maxime necessitatibus magnam quo libero officia adibus nobis suscipit est nihil voluptatibus...",
    avatar: avatar1,
    job: "Software Developer",
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit animi odit voluptate sed. Ducimus ipsa quisquam, vero ut ea assumenda, maxime necessitatibus magnam quo libero officia adipisci aperiam!....",
    job: "Software Engineer",
    avatar: avatar2,
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora voluptates natus numquam qui in. Necessitatibus nobis suscipit est nihil voluptatibus....",
    job: "University Lecturer",
    avatar: avatar3,
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora voluptates natus numquam qui in. Necessitatibus nobis suscipit est nihil voluptatibus....",
    job: "Talking Parrot",
    avatar: avatar4,
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit animi odit voluptate sed. Ducimus ipsa quisquam, vero ut ea assumenda, maxime necessitatibus magnam quo libero officia adipisci aperiam!....",
    job: "Pharmacist",
    avatar: avatar5,
  },
];

export const plans = [
  {
    id: 1,
    name: "Silver Package",
    desc: "This package is perfect for beginners who need constant help",
    price: 29.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: false },
      { feature: "Sixth Feature", available: false },
      { feature: "Seventh Feature", available: false },
      { feature: "Seventh Feature Plus", available: false },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 2,
    name: "Gold Package",
    desc: "This package is perfect for busy people who need home service",
    price: 49.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: false },
      { feature: "Ninth Feature", available: false },
      { feature: "Tenth Feature", available: false },
      { feature: "Eleventh Feature", available: false },
    ],
  },
  {
    id: 3,
    name: "Platinum Package",
    desc: "This is the perfect package for beginners who know what they're doing",
    price: 89.99,
    features: [
      { feature: "First Feature", available: true },
      { feature: "Second Feature", available: true },
      { feature: "Third Feature", available: true },
      { feature: "Fourth Feature", available: true },
      { feature: "Fifth Feature", available: true },
      { feature: "Fifth Feature Plus", available: true },
      { feature: "Sixth Feature", available: true },
      { feature: "Seventh Feature", available: true },
      { feature: "Seventh Feature Plus", available: true },
      { feature: "Eighth Feature", available: true },
      { feature: "Ninth Feature", available: true },
      { feature: "Tenth Feature", available: true },
      { feature: "Eleventh Feature", available: true },
    ],
  },
];

import { FaFacebookF } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsWhatsapp } from "react-icons/bs";
import { FaXTwitter } from "react-icons/fa6";

export const trainers = [
  {
    id: 1,
    image: trainer1,
    name: "John Doe",
    job: "Aerobic Trainer",
    socials: [
      {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/samviccodes",
      },
      {
        icon: <BsWhatsapp />,
        link: "https://wa.me/2348146557494",
      },
      {
        icon: <FaXTwitter />,
        link: "https://x.com/SamVicCodes",
      },
    ],
  },
  {
    id: 2,
    image: trainer2,
    name: "Daniel Vinyo",
    job: "Speed Trainer",
    socials: [
      {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/samviccodes",
      },
      {
        icon: <BsWhatsapp />,
        link: "https://wa.me/2348146557494",
      },
      {
        icon: <FaXTwitter />,
        link: "https://x.com/SamVicCodes",
      },
    ],
  },
  {
    id: 3,
    image: trainer3,
    name: "Edem Quist",
    job: "Flexibility Trainer",
    socials: [
      {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/samviccodes",
      },
      {
        icon: <BsWhatsapp />,
        link: "https://wa.me/2348146557494",
      },
      {
        icon: <FaXTwitter />,
        link: "https://x.com/SamVicCodes",
      },
    ],
  },
  {
    id: 4,
    image: trainer4,
    name: "Shatta Wale",
    job: "Body Composition Trainer",
    socials: [
      {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/samviccodes",
      },
      {
        icon: <BsWhatsapp />,
        link: "https://wa.me/2348146557494",
      },
      {
        icon: <FaXTwitter />,
        link: "https://x.com/SamVicCodes",
      },
    ],
  },
  {
    id: 5,
    image: trainer5,
    name: "Diana Ayi",
    job: "Circuit Trainer",
    socials: [
      {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/samviccodes",
      },
      {
        icon: <BsWhatsapp />,
        link: "https://wa.me/2348146557494",
      },
      {
        icon: <FaXTwitter />,
        link: "https://x.com/SamVicCodes",
      },
    ],
  },
  {
    id: 6,
    image: trainer6,
    name: "Nana Yaa",
    job: "Physical Intelligence Trainer",
    socials: [
      {
        icon: <FaFacebookF />,
        link: "https://www.facebook.com/akpobasa.victor?mibextid=rS40aB7S9Ucbxw6v",
      },
      {
        icon: <FaLinkedinIn />,
        link: "https://www.linkedin.com/in/samviccodes",
      },
      {
        icon: <BsWhatsapp />,
        link: "https://wa.me/2348146557494",
      },
      {
        icon: <FaXTwitter />,
        link: "https://x.com/SamVicCodes",
      },
    ],
  },
];

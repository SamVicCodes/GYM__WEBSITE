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

// Updated programs data
export const programs = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Strength Training",
    info: "Build muscle and improve your strength with our guided weightlifting training programs.",
    path: "/",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Cardio Workouts",
    info: "Boost your endurance and burn calories with high-energy cardio sessions for all fitness levels.",
    path: "/",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Yoga & Flexibility",
    info: "Enhance your flexibility and find your inner peace with our expert-led yoga and stretching classes.",
    path: "/",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Personal Training",
    info: "Achieve your fitness goals faster with one-on-one coaching from our certified personal trainers.",
    path: "/",
  },
];

// Updated values data
export const values = [
  {
    id: 1,
    icon: <SiOpenaigym />,
    title: "Commitment to Excellence",
    desc: "We strive to provide the highest quality facilities, equipment, and training programs to help you achieve your fitness goals.",
  },
  {
    id: 2,
    icon: <SiOpenaigym />,
    title: "Community and Support",
    desc: "We believe in fostering a supportive and inclusive community where everyone feels empowered to succeed.",
  },
  {
    id: 3,
    icon: <SiOpenaigym />,
    title: "Continuous Improvement",
    desc: "We embrace innovation and constantly improve our services to ensure our members stay ahead in their fitness journeys.",
  },
  {
    id: 4,
    icon: <SiOpenaigym />,
    title: "Passion for Wellness",
    desc: "Our passion for fitness drives us to inspire and motivate every member to live a healthier, happier life.",
  },
];


export const faqs = [
  {
    id: 1,
    question: "How often should I exercise?",
    answer:
      "It depends on your fitness goals. For general health, aim for at least 30 minutes of moderate exercise 5 days a week. For muscle building or weight loss, a combination of strength training and cardio 4-6 days a week is recommended.",
  },
  {
    id: 2,
    question: "What time of day is best to work out?",
    answer:
      "The best time to work out is when you feel most energized and can be consistent. Some people prefer morning workouts for a fresh start, while others perform better in the evening. Choose what works best for your schedule.",
  },
  {
    id: 3,
    question: "How long should my workouts be?",
    answer:
      "Workouts should last between 30 to 60 minutes, depending on the intensity and type of exercise. Shorter, high-intensity sessions can be just as effective as longer workouts for certain goals.",
  },
  {
    id: 4,
    question: "Do I need to warm up before my workouts?",
    answer:
      "Yes! Warming up prepares your body for exercise by increasing blood flow and reducing the risk of injury. A 5-10 minute dynamic warm-up with stretches is ideal.",
  },
  {
    id: 5,
    question: "Should I do strength training, cardio, or both?",
    answer:
      "Both! Strength training builds muscle and improves metabolism, while cardio enhances heart health and burns calories. A balanced routine ensures you achieve overall fitness.",
  },
  {
    id: 6,
    question: "Should I lift weights for strength training?",
    answer:
      "Absolutely! Lifting weights helps build muscle, improve bone density, and boost metabolism. Start with lighter weights and focus on proper form before progressing to heavier loads.",
  },
];
export const testimonials = [
  {
    id: 1,
    name: "Diana Ayi",
    quote:
      "Working with this team was a delight. Their professionalism and dedication to delivering quality results were outstanding!",
    avatar: avatar1,
    job: "Software Developer",
  },
  {
    id: 2,
    name: "Daniel Vinyo",
    quote:
      "This service exceeded my expectations. The attention to detail and creativity were truly impressive.",
    avatar: avatar2,
    job: "Software Engineer",
  },
  {
    id: 3,
    name: "Edem Quist",
    quote:
      "A top-notch experience from start to finish! I would highly recommend this to anyone looking for excellence.",
    avatar: avatar3,
    job: "University Lecturer",
  },
  {
    id: 4,
    name: "Grace Lavoe",
    quote:
      "They understood my needs perfectly and delivered beyond my expectations. Absolutely fantastic!",
    avatar: avatar4,
    job: "Marketing Specialist",
  },
  {
    id: 5,
    name: "Nana Yaa Dankwa",
    quote:
      "A seamless experience. Their innovative approach and commitment to quality were truly remarkable.",
    avatar: avatar5,
    job: "Pharmacist",
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
    desc: "This package is perfect for beginners with experience.",
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

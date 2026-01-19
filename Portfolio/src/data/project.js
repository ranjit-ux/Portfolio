import { CurrecnyConverter, Notes, PortfolioProject, QuizApp, SimonSays } from "../assets/images";

export const projects = [
  {
    id: 1,
    title: "Personal Portfolio Website",
    description:
      "Designed and developed a high-performance personal portfolio featuring a modern dark theme, smooth navigation, and reusable components to present projects and professional identity.",
    image: PortfolioProject,
    liveUrl: "https://portfolio-0ylk.onrender.com",
  },
  {
    id: 4,
    title: "QuizMaster",
    description:
      "A dynamic quiz platform featuring real-time scoring, smooth state management, and an engaging user flow designed for rapid interactions.",
    image: QuizApp,
    liveUrl: "https://countries-capital-quiz-production.up.railway.app/",
  },
    {
    id: 2,
    title: "Currency Converter",
    description:
      "A clean and responsive currency converter that allows users to convert amounts between multiple currencies using real-time exchange rates through an intuitive interface.",
    image: CurrecnyConverter,
    liveUrl: "https://currecnyconverter-36qm.onrender.com/", // replace with your actual converter link if different
  },
  {
    id: 3,
    title: "QuickNotes",
    description:
      "A lightweight notes application with local persistence, built for speed and simplicity while ensuring data is always available offline.",
    image: Notes,
    liveUrl: "https://notes-app-7w6j.onrender.com/",
  },
  

];

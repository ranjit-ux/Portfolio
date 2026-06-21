import { CurrecnyConverter, MatchMyResume, Notes, PortfolioProject, QuizApp, SimonSays, AlgoRetention, PrepWiseAI } from "../assets/images";

export const projects = [
  {
  id: 2,
  title: "AlgoRetention",
  description:
    "Most programmers forget 80% of solved problems within days. AlgoRetention uses AI-inspired spaced repetition to make coding patterns stick, turning solved questions into long-term interview mastery.",
  image: AlgoRetention,
  liveUrl: "https://algo-retention.vercel.app",
},
{
  id: 3,
  title: "PrepWise AI",
  description:
    "Most candidates struggle with interview preparation due to limited practice and lack of actionable feedback. PrepWise AI simulates realistic technical interviews, delivers instant AI-powered insights, and helps users improve communication, problem-solving, and interview confidence.",
  image: PrepWiseAI,
  liveUrl: "https://prep-wise-ai-nu.vercel.app",
},
{
    id: 2,
    title: "Match My Resume",
    description:
      "Match My Resume is an AI-powered platform that evaluated resumes agains job descriptions to access ATS compatibility. It performs intelligent resume-JD matching to identify missing skills, keywords, and improvement areas. Delivers actionable, AI-driven recommendations to optimize resumes for higher shortlisting and interview success.",
    image: MatchMyResume,
    liveUrl: "https://matchmyresume-frontend.onrender.com/", // replace with your actual converter link if different
  },
  {
    id: 1,
    title: "Portfolio",
    description:
      "Designed and developed a high-performance personal portfolio featuring a modern dark theme, smooth navigation, and reusable components to present projects and professional identity.",
    image: PortfolioProject,
    liveUrl: "https://portfolio-0ylk.onrender.com",
  },

];

import ProjectsShowcase from "../components/ProjectShowcase";
import NewProjectCard from "../components/NewProjectCard";
import { CurrecnyConverter, Notes, QuizApp, ReactTODO, SimonSays, AlgoRetention, MatchMyResume,PortfolioProject, PrepWiseAI } from "../assets/images";
import ProjectRow from "../components/ProjectRow";
const Project = () => {
  return (
    <section className="py-14">
      <h1 className="text-3xl font-bold text-white mb-4">
        <span className="primary text-4xl">/</span>projects
      </h1>

      <p className="text-primary font-semibold py-5"><span className="primary">#</span>highlights</p>
        <ProjectsShowcase/>

        <p className="text-primary font-semibold py-5 mt-20">
  <span className="primary">#</span>all projects
</p>

<div className="space-y-8">
  
 

<ProjectRow
  index={1}
  title="AlgoRetention"
  subtitle="DSA Revision & Spaced Repetition Platform"
  description="Built a full-stack DSA revision platform that automates personalized review scheduling using a custom spaced-repetition algorithm inspired by SM-2 while tracking 500+ coding problems, revision history, and user progress. Onboarded 200+ organic users."
  image={AlgoRetention}
  techstack={[
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "JWT",
    "Google OAuth",
    "Tailwind CSS",
    "Shadcn/ui",
  ]}
  liveUrl="https://algo-retention.vercel.app/"
  githubUrl="https://github.com/ranjit-ux/AlgoRetention"
/>
<ProjectRow
  index={2}
  title="MatchMyResume"
  subtitle="AI Resume Analysis Platform"
  description="Developed an AI-powered resume analyzer that compares resumes against job descriptions, provides ATS compatibility scores, identifies missing skills, and delivers actionable improvement suggestions with detailed analytics. Analysed 10+ resumes."
  image={MatchMyResume}
  techstack={[
    "React.js",
    "Node.js",
    "Express.js",
    "MongoDB",
    "Groq LLM API",
    "Tailwind CSS",
  ]}
  liveUrl="https://matchmyresume-frontend.onrender.com/"
  githubUrl="https://github.com/ranjit-ux/MatchMyResume"
/>
<ProjectRow
  index={3}
  title="PrepWiseAI"
  subtitle="AI Interview Preparation Platform"
  description="Created an AI-powered interview preparation platform that generates personalized mock interviews, evaluates responses, and provides structured feedback to help users improve technical and behavioral interview performance."
  image={PrepWiseAI}
  techstack={[
    "React.js",
    "Next.js",
    "MongoDB",
    "Groq API",
    "Tailwind CSS",
    "REST AI",
  ]}
  liveUrl="https://prep-wise-ai-nu.vercel.app/"
  githubUrl="https://github.com/ranjit-ux/PrepWise-AI"
/>
<ProjectRow
  index={4}
  title="Portfolio"
  subtitle="Developer Portfolio Website"
  description="Designed and developed a modern responsive portfolio showcasing projects, technical skills, achievements, and contact information with smooth animations and optimized performance across all devices."
  image={PortfolioProject}
  techstack={[
    "React.js",
    "Tailwind CSS",
    "Framer Motion",
    "JavaScript",
    "Vite",
  ]}
  liveUrl="https://ranjitkumarsingh.in/"
  githubUrl="https://github.com/ranjit-ux/Portfolio"
/>
<ProjectRow
  index={5}
  title="Notes App"
  subtitle="Personal Note-Taking Application"
  description="Created a responsive note-taking application with CRUD functionality, local data persistence, and a clean user interface for organizing and managing personal notes efficiently."
  image={Notes}
  techstack={[
    "React.js",
    "Node.js",
    "JavaScript",
    "CSS",
    "HTML",
    "MongoDB",

  ]}
  liveUrl="https://notes-app.vercel.app/"
  githubUrl="https://github.com/ranjit-ux/Notes-App"
/>
  <ProjectRow
  index={6}
  title="Countries & Capital Quiz"
  subtitle="Full-Stack Geography Quiz Platform"
  description="Built a full-stack geography quiz platform using Express.js and PostgreSQL that dynamically serves country-capital challenges while tracking user performance in real time."
  image={QuizApp}
  techstack={[
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "EJS",
    "HTML",
    "CSS",
  ]}
  liveUrl="https://countries-capital-quiz-production.up.railway.app/"
  githubUrl="https://github.com/ranjit-ux/Countries-Capital-Quiz"
/>
<ProjectRow
  index={7}
  title="Currency Converter"
  subtitle="Real-Time Currency Exchange App"
  description="Built a responsive currency conversion application that fetches live exchange rates from public APIs and instantly converts between multiple international currencies with an intuitive user interface."
  image={CurrecnyConverter}
  techstack={[
    "React.js",
    "JavaScript",
    "REST API",
    "CSS",
    "HTML",
  ]}
  liveUrl="https://currency-converter.vercel.app/"
  githubUrl="https://github.com/ranjit-ux/Currency-Converter"
/>
<ProjectRow
  index={8}
  title="React To-Do"
  subtitle="Task Management Application"
  description="Developed a responsive task management application featuring task creation, editing, completion tracking, and persistent local storage to improve daily productivity."
  image={ReactTODO}
  techstack={[
    "React.js",
    "JavaScript",
    "CSS",
    "HTML",
    "Local Storage",
  ]}
  liveUrl="https://react-todo.vercel.app/"
  githubUrl="https://github.com/ranjit-ux/React-ToDo"
/>

<ProjectRow
  index={9}
  title="Simon Game"
  subtitle="Interactive Memory Challenge"
  description="Recreated the classic Simon memory game with dynamic sequence generation, increasing difficulty levels, interactive animations, and sound effects to provide an engaging browser-based gaming experience."
  image={SimonSays}
  techstack={[
    "JavaScript",
    "HTML",
    "CSS",
    "jQuery",
  ]}
  liveUrl="https://simon-game.vercel.app/"
  githubUrl="https://github.com/ranjit-ux/Simon-Game"
/>

</div>
    </section>
  );
};

export default Project;

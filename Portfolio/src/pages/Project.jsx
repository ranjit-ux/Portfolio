import ProjectsShowcase from "../components/ProjectShowcase";
import NewProjectCard from "../components/NewProjectCard";
import { CurrecnyConverter, Notes, QuizApp, ReactTODO, SimonSays } from "../assets/images";
import ProjectRow from "../components/ProjectRow";
const Project = () => {
  return (
    <section className="py-14">
      <h1 className="text-3xl font-bold text-white mb-4">
        <span className="primary text-4xl">/</span>projects
      </h1>

      <p className="text-primary font-semibold py-5"><span className="primary">#</span>highlights</p>
        <ProjectsShowcase/>

        <p className="text-primary font-semibold py-5 mt-25"><span className="primary">#</span>all projects</p>


        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
          <NewProjectCard
          projectimg={ReactTODO}
          title="To-Do List App"
          desc="Developed a minimal and responsive to-do list application with task creation and deletion, focused on simplicity and usability."
          techstack={["HTML", "CSS", "ReactJS"]}
          githubUrl="https://reacttodo-8fzy.onrender.com/"
        />

          <NewProjectCard
          projectimg={CurrecnyConverter}
          title="Currency Converter"
          desc="Built a real-time currency converter with an intuitive UI, allowing users to convert between multiple currencies using live exchange rates."
          techstack={["HTML", "CSS", "JavaScript", "API"]}
          githubUrl="https://currecnyconverter-36qm.onrender.com/"
        />

          <NewProjectCard 
            projectimg={SimonSays}
            title="Simon Says Game"
            desc="Implemented a browser-based Simon Says game focusing on state management, game logic, and user interaction."
            techstack={["HTML","CSS","JavaScript"]}
            githubUrl="https://simon-game-xbq7.onrender.com/"
          />
        </div>
        <p className="text-primary font-semibold py-5 mt-20">
  <span className="primary">#</span>all projects
</p>

<div className="space-y-8">
  
 

  <ProjectRow
  index={1}
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

</div>
    </section>
  );
};

export default Project;

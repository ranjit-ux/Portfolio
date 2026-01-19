import ProjectsShowcase from "../components/ProjectShowcase";
import NewProjectCard from "../components/NewProjectCard";
import { CurrecnyConverter, Notes, QuizApp, ReactTODO, SimonSays } from "../assets/images";
const Project = () => {
  return (
    <section className="py-14">
      <h1 className="text-3xl font-bold text-white mb-4">
        <span className="primary text-4xl">/</span>projects
      </h1>

      <p className="text-primary font-semibold py-5"><span className="primary">#</span>highlights</p>
        <ProjectsShowcase/>

        <p className="text-primary font-semibold py-5 mt-25"><span className="primary">#</span>have a look</p>


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
    </section>
  );
};

export default Project;

import { ArrowLeft } from "lucide-react";
import Footer from "../components/Footer";
import ProjectsPage from "../components/ProjectsPage";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-dark-gradient-start dark:to-dark-gradient-end">
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => {
            window.history.pushState({}, "", "/");
            window.dispatchEvent(new PopStateEvent("popstate"));
          }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
        >
          <ArrowLeft size={20} />
          Back to Home
        </button>
      </div>

      <ProjectsPage />
      <Footer />
    </div>
  );
};

export default Projects;

import {
  ArrowLeft,
  ExternalLink,
  Github,
  ImageOff,
  Play,
  BarChart3,
  Users,
  Zap,
  Code,
  Database,
  Cloud,
  Brain,
  CheckCircle,
  Clock,
  AlertCircle,
} from "lucide-react";
import { useState } from "react";
import { getProjectById, Project } from "../data/projects";
import ErrorBoundary from "./ErrorBoundary";

const ProjectDetails = () => {
  // Get project ID from URL path
  const getProjectIdFromPath = () => {
    const path = window.location.pathname;
    const segments = path.split("/");
    return segments[segments.length - 1];
  };

  const id = getProjectIdFromPath();
  const [imageError, setImageError] = useState(false);
  const [activeTab, setActiveTab] = useState<"overview" | "technical" | "demo">(
    "overview",
  );

  // Find the project based on the ID
  const project = id ? getProjectById(id) : undefined;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Project not found
          </h2>
          <button
            onClick={() => {
              window.history.pushState({}, "", "/projects");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="text-blue-600 hover:underline inline-flex items-center gap-2"
          >
            <ArrowLeft size={20} />
            Back to projects
          </button>
        </div>
      </div>
    );
  }

  const ImageWithFallback = ({ src, alt }: { src: string; alt: string }) => {
    if (imageError) {
      return (
        <div className="w-full h-[400px] bg-gray-100 dark:bg-dark-hover flex items-center justify-center">
          <div className="text-center">
            <ImageOff size={48} className="mx-auto mb-2 text-gray-400" />
            <span className="text-sm text-gray-500">Image not available</span>
          </div>
        </div>
      );
    }

    return (
      <img
        src={src}
        alt={alt}
        className="w-full h-[400px] object-cover"
        onError={() => setImageError(true)}
      />
    );
  };

  const StatusBadge = ({ status }: { status: Project["status"] }) => {
    const statusConfig = {
      completed: {
        icon: CheckCircle,
        color: "text-green-600 bg-green-100 dark:bg-green-900/20",
        label: "Completed",
      },
      "in-progress": {
        icon: Clock,
        color: "text-yellow-600 bg-yellow-100 dark:bg-yellow-900/20",
        label: "In Progress",
      },
      planned: {
        icon: AlertCircle,
        color: "text-blue-600 bg-blue-100 dark:bg-blue-900/20",
        label: "Planned",
      },
    };

    const config = statusConfig[status];
    const Icon = config.icon;

    return (
      <span
        className={`inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs font-medium ${config.color}`}
      >
        <Icon size={12} />
        {config.label}
      </span>
    );
  };

  const MetricCard = ({
    icon: Icon,
    label,
    value,
  }: {
    icon: any;
    label: string;
    value: string | number;
  }) => (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg">
      <div className="flex items-center gap-2 mb-2">
        <Icon size={16} className="text-blue-600 dark:text-blue-400" />
        <span className="text-sm font-medium text-gray-600 dark:text-gray-400">
          {label}
        </span>
      </div>
      <div className="text-lg font-semibold text-gray-900 dark:text-white">
        {value}
      </div>
    </div>
  );

  const TechStackSection = ({
    title,
    items,
  }: {
    title: string;
    items?: string[];
  }) => {
    if (!items || items.length === 0) return null;

    return (
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
          {title}
        </h4>
        <div className="flex flex-wrap gap-2">
          {items.map((item, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    );
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
        <div className="container mx-auto px-4 py-8">
          <button
            onClick={() => {
              window.history.pushState({}, "", "/projects");
              window.dispatchEvent(new PopStateEvent("popstate"));
            }}
            className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8 group"
          >
            <ArrowLeft
              className="mr-2 group-hover:-translate-x-1 transition-transform"
              size={20}
            />
            Back to Projects
          </button>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              {/* Hero Section */}
              <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm overflow-hidden">
                <ImageWithFallback src={project.image} alt={project.title} />

                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h1 className="text-4xl font-bold mb-2 dark:text-dark-primary">
                        {project.title}
                      </h1>
                      <div className="flex items-center gap-3">
                        <StatusBadge status={project.status} />
                        <span className="text-sm text-gray-500 dark:text-gray-400 capitalize">
                          {project.type.replace("-", " & ")}
                        </span>
                      </div>
                    </div>
                  </div>

                  <p className="text-gray-600 dark:text-dark-secondary mb-6 text-lg leading-relaxed">
                    {project.longDescription || project.description}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors group"
                      >
                        <Play
                          size={20}
                          className="mr-2 group-hover:scale-110 transition-transform"
                        />
                        Live Demo
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors group"
                      >
                        <Github
                          size={20}
                          className="mr-2 group-hover:rotate-12 transition-transform"
                        />
                        View Code
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
                      >
                        <Play size={20} className="mr-2" />
                        Watch Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>

              {/* Tabs */}
              <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm">
                <div className="border-b border-gray-200 dark:border-gray-700">
                  <nav className="flex space-x-8 px-8">
                    {[
                      { id: "overview", label: "Overview", icon: BarChart3 },
                      {
                        id: "technical",
                        label: "Technical Details",
                        icon: Code,
                      },
                      { id: "demo", label: "Demo & Screenshots", icon: Play },
                    ].map(({ id, label, icon: Icon }) => (
                      <button
                        key={id}
                        onClick={() => setActiveTab(id as any)}
                        className={`flex items-center gap-2 py-4 px-1 border-b-2 font-medium text-sm transition-colors ${
                          activeTab === id
                            ? "border-blue-500 text-blue-600 dark:text-blue-400"
                            : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
                        }`}
                      >
                        <Icon size={16} />
                        {label}
                      </button>
                    ))}
                  </nav>
                </div>

                <div className="p-8">
                  {activeTab === "overview" && (
                    <div className="space-y-8">
                      {/* Metrics */}
                      {project.metrics && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4 dark:text-white">
                            Key Metrics
                          </h3>
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {project.metrics.accuracy && (
                              <MetricCard
                                icon={BarChart3}
                                label="Accuracy"
                                value={`${project.metrics.accuracy}%`}
                              />
                            )}
                            {project.metrics.performance && (
                              <MetricCard
                                icon={Zap}
                                label="Performance"
                                value={project.metrics.performance}
                              />
                            )}
                            {project.metrics.users && (
                              <MetricCard
                                icon={Users}
                                label="Users"
                                value={project.metrics.users.toLocaleString()}
                              />
                            )}
                          </div>
                          {project.metrics.impact && (
                            <div className="mt-4 p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                              <p className="text-green-800 dark:text-green-400 font-medium">
                                💡 Impact: {project.metrics.impact}
                              </p>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Challenges */}
                      {project.challenges && project.challenges.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4 dark:text-white">
                            Challenges Overcome
                          </h3>
                          <ul className="space-y-2">
                            {project.challenges.map((challenge, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <AlertCircle
                                  size={16}
                                  className="text-orange-500 mt-1 flex-shrink-0"
                                />
                                <span className="text-gray-600 dark:text-gray-400">
                                  {challenge}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}

                      {/* Learnings */}
                      {project.learnings && project.learnings.length > 0 && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4 dark:text-white">
                            Key Learnings
                          </h3>
                          <ul className="space-y-2">
                            {project.learnings.map((learning, index) => (
                              <li
                                key={index}
                                className="flex items-start gap-3"
                              >
                                <CheckCircle
                                  size={16}
                                  className="text-green-500 mt-1 flex-shrink-0"
                                />
                                <span className="text-gray-600 dark:text-gray-400">
                                  {learning}
                                </span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  {activeTab === "technical" && (
                    <div className="space-y-6">
                      <h3 className="text-xl font-semibold mb-4 dark:text-white">
                        Technology Stack
                      </h3>

                      <TechStackSection
                        title="Machine Learning & AI"
                        items={project.techStack.ml}
                      />
                      <TechStackSection
                        title="Backend"
                        items={project.techStack.backend}
                      />
                      <TechStackSection
                        title="Frontend"
                        items={project.techStack.frontend}
                      />
                      <TechStackSection
                        title="Database"
                        items={project.techStack.database}
                      />
                      <TechStackSection
                        title="Deployment & DevOps"
                        items={project.techStack.deployment}
                      />

                      {project.futureEnhancements &&
                        project.futureEnhancements.length > 0 && (
                          <div>
                            <h4 className="font-semibold text-gray-900 dark:text-white mb-3">
                              Future Enhancements
                            </h4>
                            <ul className="space-y-2">
                              {project.futureEnhancements.map(
                                (enhancement, index) => (
                                  <li
                                    key={index}
                                    className="flex items-start gap-3"
                                  >
                                    <Clock
                                      size={16}
                                      className="text-blue-500 mt-1 flex-shrink-0"
                                    />
                                    <span className="text-gray-600 dark:text-gray-400">
                                      {enhancement}
                                    </span>
                                  </li>
                                ),
                              )}
                            </ul>
                          </div>
                        )}
                    </div>
                  )}

                  {activeTab === "demo" && (
                    <div className="space-y-6">
                      {project.videoUrl && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4 dark:text-white">
                            Demo Video
                          </h3>
                          <div className="aspect-video rounded-lg overflow-hidden">
                            <iframe
                              src={project.videoUrl}
                              className="w-full h-full"
                              allowFullScreen
                              title={`${project.title} Demo`}
                            />
                          </div>
                        </div>
                      )}

                      {project.screenshots &&
                        project.screenshots.length > 0 && (
                          <div>
                            <h3 className="text-xl font-semibold mb-4 dark:text-white">
                              Screenshots
                            </h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                              {project.screenshots.map((screenshot, index) => (
                                <img
                                  key={index}
                                  src={screenshot}
                                  alt={`${project.title} screenshot ${index + 1}`}
                                  className="rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
                                  onClick={() =>
                                    window.open(screenshot, "_blank")
                                  }
                                />
                              ))}
                            </div>
                          </div>
                        )}

                      {project.demoUrl && (
                        <div>
                          <h3 className="text-xl font-semibold mb-4 dark:text-white">
                            Live Demo
                          </h3>
                          <div className="aspect-video rounded-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                            <iframe
                              src={project.demoUrl}
                              className="w-full h-full"
                              title={`${project.title} Live Demo`}
                            />
                          </div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Project Info */}
              <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">
                  Project Info
                </h3>
                <div className="space-y-4">
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Status
                    </span>
                    <div className="mt-1">
                      <StatusBadge status={project.status} />
                    </div>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Type
                    </span>
                    <p className="mt-1 text-gray-900 dark:text-white capitalize">
                      {project.type.replace("-", " & ")}
                    </p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
                      Technologies
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1">
                      {project.tools.slice(0, 6).map((tool, index) => (
                        <span
                          key={index}
                          className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded text-xs"
                        >
                          {tool}
                        </span>
                      ))}
                      {project.tools.length > 6 && (
                        <span className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded text-xs">
                          +{project.tools.length - 6} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-6">
                <h3 className="text-lg font-semibold mb-4 dark:text-white">
                  Tags
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-full text-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProjectDetails;

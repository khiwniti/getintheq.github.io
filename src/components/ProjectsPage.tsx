import {
  Github,
  Linkedin,
  LineChart,
  Search,
  Filter,
  Grid,
  List,
} from "lucide-react";
import ProjectCard from "./ProjectCard";
import { projects, Project } from "../data/projects";
import { useState, useMemo } from "react";
import ErrorBoundary from "./ErrorBoundary";

const Hero = () => {
  return (
    <div className="py-20 px-6 bg-gradient-to-br from-slate-50 to-slate-100">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-2 mb-6">
          <LineChart className="w-8 h-8 text-blue-600" />
          <h2 className="text-xl font-semibold text-blue-600">
            Data Analysis Portfolio
          </h2>
        </div>
        <h1 className="text-5xl font-bold mb-6">
          Turning Data into
          <span className="text-blue-600"> Actionable Insights</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl">
          Showcasing data analysis projects that demonstrate expertise in
          statistical analysis, data visualization, and deriving meaningful
          insights from complex datasets.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors"
          >
            <Github className="w-5 h-5" />
            GitHub
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <Linkedin className="w-5 h-5" />
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
};

const ProjectsPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState<string>("all");
  const [selectedStatus, setSelectedStatus] = useState<string>("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        project.tags.some((tag) =>
          tag.toLowerCase().includes(searchTerm.toLowerCase()),
        );

      const matchesType =
        selectedType === "all" || project.type === selectedType;
      const matchesStatus =
        selectedStatus === "all" || project.status === selectedStatus;

      return matchesSearch && matchesType && matchesStatus;
    });
  }, [searchTerm, selectedType, selectedStatus]);

  const projectTypes = Array.from(new Set(projects.map((p) => p.type)));
  const projectStatuses = Array.from(new Set(projects.map((p) => p.status)));

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-50 dark:bg-dark-bg">
        <Hero />

        {/* Filters and Search */}
        <div className="container mx-auto px-4 py-8">
          <div className="bg-white dark:bg-dark-card rounded-xl shadow-sm p-6 mb-8">
            <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search
                  className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:text-white"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-4 items-center">
                <div className="flex items-center gap-2">
                  <Filter size={16} className="text-gray-500" />
                  <select
                    value={selectedType}
                    onChange={(e) => setSelectedType(e.target.value)}
                    className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                  >
                    <option value="all">All Types</option>
                    {projectTypes.map((type) => (
                      <option key={type} value={type}>
                        {type
                          .replace("-", " & ")
                          .replace(/\b\w/g, (l) => l.toUpperCase())}
                      </option>
                    ))}
                  </select>
                </div>

                <select
                  value={selectedStatus}
                  onChange={(e) => setSelectedStatus(e.target.value)}
                  className="px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                >
                  <option value="all">All Status</option>
                  {projectStatuses.map((status) => (
                    <option key={status} value={status}>
                      {status
                        .replace("-", " ")
                        .replace(/\b\w/g, (l) => l.toUpperCase())}
                    </option>
                  ))}
                </select>

                {/* View Mode Toggle */}
                <div className="flex border border-gray-300 dark:border-gray-600 rounded-lg overflow-hidden">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 ${viewMode === "grid" ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`}
                  >
                    <Grid size={16} />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 ${viewMode === "list" ? "bg-blue-500 text-white" : "bg-white dark:bg-gray-700 text-gray-600 dark:text-gray-300"}`}
                  >
                    <List size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Results count */}
            <div className="mt-4 text-sm text-gray-600 dark:text-gray-400">
              Showing {filteredProjects.length} of {projects.length} projects
            </div>
          </div>

          {/* Projects Grid/List */}
          {filteredProjects.length > 0 ? (
            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                  : "space-y-6"
              }
            >
              {filteredProjects.map((project) => (
                <ProjectCard
                  key={project.id}
                  id={project.id}
                  title={project.title}
                  description={project.description}
                  image={project.image}
                  tags={project.tags || []}
                  tools={project.tools}
                  status={project.status}
                  type={project.type}
                  featured={project.featured}
                  viewMode={viewMode}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Try adjusting your search terms or filters
              </p>
            </div>
          )}
        </div>
      </div>
    </ErrorBoundary>
  );
};

export default ProjectsPage;

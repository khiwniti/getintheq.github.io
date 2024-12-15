interface ExperienceProps {
  isDarkMode: boolean;
}

interface ExperienceData {
  date: string;
  title: string;
  company: string;
  companyLogo: string;
  contractType: string;
  location: string;
  description: string;
  responsibilities: string[];
  relevantProjects: RelevantProject[];
  skills: string[];
}

interface RelevantProject {
  name: string;
  description: string;
  outcome: string;
}

export default ExperienceData;
export type { ExperienceProps };

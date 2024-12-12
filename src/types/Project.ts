export interface Project {
  id?: string;
  title: string;
  description: string;
  image: string;
  tools: string[]; // Make tools required
  link?: string;
  type?: string;
  tags?: string[];
  github?: string;
}

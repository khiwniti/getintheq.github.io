export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tools?: string[];
  technologies?: string[];
  link?: string;
  type?: string;
  tags: string[];
  github?: string;
}

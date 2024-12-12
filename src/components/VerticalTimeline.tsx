import React, { useRef, useEffect } from 'react';
import { Calendar, Star, Rocket } from 'lucide-react';

interface Project {
  name: string;
  description: string;
  outcome: string;
}

interface TimelineItem {
  date: string;
  title: string;
  company: string;
  contractType: string;
  location: string;
  description: string;
  responsibilities: string[];
  relevantProjects: Project[];
  skills: string[];
}

interface VerticalTimelineProps {
  items: TimelineItem[];
}

const TimelineItem = ({
  date,
  title,
  company,
  description,
  responsibilities,
  relevantProjects,
  skills,
  location
}: TimelineItem) => {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('opacity-100', 'translate-x-0');
            entry.target.classList.remove('opacity-0', 'translate-x-12');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="flex">
      {/* Left Side */}
      <div className="relative z-10 sm:ps-0 sm:pb-24 sm:w-1/4 sm:text-end">
        <div className="sm:sticky sm:top-12 sm:end-0">
          <div className="sm:pe-[1.6125rem] ps-7">
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-x-3 py-2 px-3.5 bg-white border border-transparent rounded-full mt-0.5 -ms-7 sm:ms-0 sm:-me-7 dark:bg-neutral-900">
            <div className="grow order-2 sm:order-1">
              <span className="text-xs text-gray-500 dark:text-neutral-500">
                {date}
              </span>
            </div>
            <div className="shrink-0 order-1 sm:order-2 size-6 flex justify-center items-center bg-white border border-gray-200 rounded-full shadow-sm dark:bg-neutral-800 dark:border-neutral-700">
              <Calendar className="size-3 text-gray-500 dark:text-neutral-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Right Side */}
      <div className="relative sm:w-3/4 pb-16 sm:pb-28 ps-8 md:ps-12">
        <div className="absolute -top-20 sm:top-0 bottom-0 start-0 sm:end-0 w-px -me-px sm:me-0 sm:-ms-px bg-gray-200 dark:bg-neutral-700" />

        <div
          ref={contentRef}
          className="opacity-0 translate-x-12 transition-all duration-500"
        >
          

            <h2 className="scroll-mt-10 mb-4">
              <span className="group inline-flex items-center gap-x-2 font-semibold text-xl text-gray-800 dark:text-neutral-200">
                {company}
              </span>
              <div className="text-sm text-gray-500 dark:text-neutral-400 mt-1">
                {location}
              </div>
            </h2>

            <p className="mt-2 sm:mt-3 text-sm text-gray-600 dark:text-neutral-400 mb-6">
              {description}
            </p>

            {/* Skills Section */}
            <div className="mb-6">
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 text-xs bg-gray-100 dark:bg-neutral-700 rounded-full text-gray-700 dark:text-neutral-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Responsibilities Section */}
            <div className="mt-6 sm:mt-8">
              <div className="inline-flex items-center gap-x-2 bg-gray-100 dark:bg-neutral-700 p-1.5 pe-4 text-sm text-gray-600 rounded-full dark:bg-neutral-800 dark:text-neutral-400">
                <span className="inline-flex justify-center items-center size-6 rounded-full bg-white shadow-md text-indigo-600 dark:bg-neutral-900">
                  <Star className="size-3" />
                </span>
                Responsibilities
              </div>

              <ul className="sm:list-disc text-gray-900 sm:ms-9 mt-3 space-y-2 dark:text-neutral-200">
                {responsibilities.map((item, index) => (
                  <li key={index} className="ps-1 sm:ps-1 text-sm text-gray-600 dark:text-neutral-400">
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Relevant Projects Section */}
            <div className="mt-6 sm:mt-8">
              <div className="inline-flex items-center gap-x-2 bg-gray-100 dark:bg-neutral-700 p-1.5 pe-4 text-sm text-gray-600 rounded-full dark:bg-neutral-800 dark:text-neutral-400">
                <span className="inline-flex justify-center items-center size-6 rounded-full bg-white shadow-md text-blue-600 dark:bg-neutral-900">
                  <Rocket className="size-3" />
                </span>
                Relevant Projects
              </div>

              <div className="mt-3 space-y-4">
                {relevantProjects.map((project, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 dark:bg-neutral-700/30 rounded-lg p-4"
                  >
                    <h4 className="font-medium text-base text-gray-900 dark:text-neutral-200 mb-2">
                      {project.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-neutral-400 mb-2">
                      {project.description}
                    </p>
                    <div className="text-sm font-medium text-blue-600 dark:text-blue-400">
                      Outcome: {project.outcome}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

const VerticalTimeline: React.FC<VerticalTimelineProps> = ({ items }) => {
  return (
    <div className="relative max-w-5xl mx-auto">
      <div className="space-y-0">
        {items.map((item, index) => (
          <TimelineItem key={index} {...item} />
        ))}
      </div>
    </div>
  );
};

export default VerticalTimeline;

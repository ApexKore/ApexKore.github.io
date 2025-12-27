import React from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="border-b-4 border-black bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <h2 className="brand-font text-5xl font-black uppercase tracking-tighter md:text-7xl">
            Selected Works
          </h2>
          <div className="h-4 w-full max-w-[8rem] bg-black md:h-6 md:w-64"></div>
        </div>

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative flex flex-col border-4 border-black bg-white shadow-[8px_8px_0px_0px_#000000] transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_#ff6600]"
            >
              <div className="relative aspect-video w-full overflow-hidden border-b-4 border-black">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale group-hover:grayscale-0"
                />
                <div className="absolute right-0 top-0 border-b-4 border-l-4 border-black bg-[#ff6600] px-4 py-2 text-sm font-bold uppercase text-white">
                  {project.status}
                </div>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <div className="mb-4 flex items-start justify-between">
                  <h3 className="brand-font text-3xl font-black uppercase leading-none">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-8 w-8 transition-transform group-hover:rotate-45 group-hover:text-[#ff6600]" />
                </div>

                <p className="mb-6 flex-1 text-base font-medium leading-relaxed text-gray-700">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="border-2 border-black bg-gray-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-black"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
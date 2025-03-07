import React, { useState, useRef, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { iProject } from 'types/project.type';
import { GitHubIcon } from './icons/GithubIcon';


interface ProjectCardProps extends iProject {}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  icon,
  url,
  githubUrl,
  latest,
  updated,
  category,
  techStack
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [focused, setFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);
 

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || focused) return;
    const rect = divRef.current.getBoundingClientRect();
    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    });
  };

  const handleFocus = () => {
    setFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <div
      role="contentinfo"
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative flex flex-col rounded-md border-[1px] border-neutral-300 px-3 py-4 shadow-sm dark:border-neutral-800"
    >
      <input
        aria-hidden="true"
        className={`pointer-events-none absolute left-0 top-0 z-10 h-full w-full cursor-default rounded-[0.310rem] border transition-opacity duration-500 placeholder:select-none` }
        style={{
          opacity: opacity,
          WebkitMaskImage: `radial-gradient(30% 30px at ${position.x}px ${position.y}px, black 45%, transparent)`,
          backgroundColor: 'transparent'
        }}
      />
      <div
        className="pointer-events-none absolute -inset-px rounded-md opacity-0 transition duration-300"
        style={{
          opacity: opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(97, 97, 97, 0.1), transparent 60%)`
        }}
      ></div>
      <div className="flex flex-col space-y-3">
        <div className="flex w-full items-center justify-between">
          <div className="flex items-center space-x-[10px]">
            {icon && <img src={icon} alt={title} className="h-6 w-6" />}
            {url ? (
              <a
                href={url}
                target="_blank"
                rel="noopener"
                className="group flex items-center gap-[6px] font-medium decoration-neutral-500 decoration-dotted underline-offset-[5px] hover:underline"
              >
                <span>{title}</span>
                <ArrowUpRight
                  size={13}
                  strokeWidth={2}
                  className="opacity-50 duration-200 group-hover:translate-x-[1.5px] group-hover:opacity-100"
                />
              </a>
            ) : (
              <p className="font-medium">{title}</p>
            )}
          </div>
          <div className="flex items-center gap-2">
            
            <a
              href={githubUrl}
              title={`View ${title} repository on GitHub`}
              target="_blank"
              rel="noopener"
              className="opacity-75 transition-opacity duration-100 hover:opacity-100"
            >
              <GitHubIcon height={16} />
            </a>
          </div>
        </div>
        <p className="truncate text-sm dark:text-neutral-400">{description}</p>
        <div className="flex items-center space-x-1 overflow-y-auto">
          {category.map((tag) =>
            techStack
              .filter((s) => s.stack === tag)
              .map(({ icon: Icon }) => (
                <Badge key={tag}>
                  <Icon width={14} height={14} className="flex-shrink-0" />
                  <span>{tag}</span>
                </Badge>
              ))
          )}
        </div>
      </div>
    </div>
  );
};


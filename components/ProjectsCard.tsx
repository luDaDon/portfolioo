"use client";

import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
  tech?: string[];
  link?: string;
  github: string;
}

export default function ProjectCard({
  title,
  description,
  image,
  tech = [],
  link,
  github,
}: ProjectCardProps) {
  return (
    <motion.div
      whileHover={{
        y: -8,
        scale: 1.02,
      }}
      transition={{ duration: 0.25}}
      className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm hover:shadow-xl transition-all"
      >
        {/* Project Image */}
        <div className="h-52 bg-gray-100 flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          ) : (
            <span className="text-gray-400">
              Project Screenshot
            </span>
          )}
        </div>

        {/* Content */}

        <div className="p-6">

        <h2 className="text-2xl font-bold mb-3">
          {title}
        </h2>

        <p className="text-gray-600 leading-7 mb-6">
          {description}
        </p>

        {/* Tech */}

        <div className="flex flex-wrap gap-2 mb-6">

          {tech.map((item) => (

            <span
              key={item}
              className="rounded-full bg-blue-50 border border-blue-100 px-3 py-1 text-sm font-medium text-blue-700"
            >
              {item}
            </span>

          ))}

        </div>

        {/* Buttons */}

        <div className="flex gap-3">

          {link && (

            <a
              href={link}
              target="_blank"
              className="rounded-lg bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 transition"
            >
              Live Demo
            </a>

          )}

          {github && (

            <a
              href={github}
              target="_blank"
              className="rounded-lg border border-gray-300 px-4 py-2 hover:bg-gray-100 transition"
            >
              GitHub
            </a>

          )}

        </div>
        </div>

      </motion.div>
  )
}

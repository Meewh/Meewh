"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Sparkles } from "lucide-react"

interface Project {
  id: string
  title: string
  description: string
  image: string
  tags: string[]
  liveUrl?: string
  githubUrl?: string
  featured: boolean
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className={`group relative overflow-hidden rounded-xl border border-border/50 bg-card/60 backdrop-blur-sm transition-all duration-300 hover:border-primary/30 hover:shadow-xl hover:-translate-y-2 ${
        project.featured ? "md:col-span-2 md:row-span-2" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Featured badge */}
      {project.featured && (
        <div className="absolute top-4 right-4 z-20 bg-gradient-to-r from-primary to-accent text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
          Destacado
        </div>
      )}

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={project.image || "/placeholder.svg"}
          alt={project.title}
          className={`w-full object-cover transition-transform duration-500 group-hover:scale-110 ${
            project.featured ? "h-64 md:h-80" : "h-48"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        {/* Floating sparkles on hover */}
        {isHovered && (
          <div className="absolute inset-0 pointer-events-none">
            <Sparkles className="absolute top-4 right-4 w-4 h-4 text-white animate-sparkle" />
            <Sparkles
              className="absolute bottom-6 left-6 w-3 h-3 text-white animate-sparkle"
              style={{ animationDelay: "0.5s" }}
            />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className={`font-serif font-bold text-foreground mb-3 ${project.featured ? "text-2xl" : "text-xl"}`}>
          {project.title}
        </h3>

        <p
          className={`text-muted-foreground leading-relaxed mb-4 text-balance ${project.featured ? "text-base" : "text-sm"}`}
        >
          {project.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 bg-accent/20 text-accent-foreground rounded-md text-xs font-medium">
              {tag}
            </span>
          ))}
        </div>

        {/* Action buttons */}
        <div className="flex gap-2">
          {project.liveUrl && (
            <Button size="sm" className="flex-1" asChild>
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4 mr-2" />
                Ver proyecto
              </a>
            </Button>
          )}
          {project.githubUrl && (
            <Button size="sm" variant="outline" asChild>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                <Github className="w-4 h-4" />
              </a>
            </Button>
          )}
        </div>
      </div>

      {/* Decorative border animation */}
      <div className="absolute inset-0 rounded-xl border-2 border-transparent bg-gradient-to-r from-primary via-accent to-secondary opacity-0 group-hover:opacity-20 transition-opacity duration-300 pointer-events-none" />
    </div>
  )
}

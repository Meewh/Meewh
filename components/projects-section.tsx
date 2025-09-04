"use client"

import { ProjectCard } from "@/components/project-card"
import { useLanguage } from "@/hooks/use-language"
import { Sparkles } from "lucide-react"

const projects = [
  {
    id: "portfolio",
    title: "Portfolio Personal Mágico",
    description:
      "Un espacio digital encantado donde la creatividad y la tecnología se encuentran. Diseñado con amor y atención al detalle, este portfolio refleja mi personalidad única y mis pasiones más profundas.",
    image: "/placeholder.svg?height=400&width=600",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"],
    liveUrl: "#",
    githubUrl: "#",
    featured: true,
  },
  {
    id: "pet-tracker",
    title: "Rastreador de Mascotas",
    description:
      "Una aplicación móvil para llevar registro de la salud, alimentación y actividades de nuestras mascotas queridas.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Firebase", "TypeScript"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "crochet-patterns",
    title: "Patrones de Crochet",
    description:
      "Una colección digital de mis patrones de crochet favoritos, con instrucciones detalladas y fotografías paso a paso.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Vue.js", "Nuxt", "Strapi", "CSS Grid"],
    liveUrl: "#",
    featured: false,
  },
  {
    id: "plant-care",
    title: "Cuidado de Plantas",
    description:
      "Una guía interactiva para el cuidado de plantas de interior, con recordatorios personalizados y consejos expertos.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React", "Node.js", "MongoDB", "PWA"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
  {
    id: "recipe-book",
    title: "Libro de Recetas Digital",
    description:
      "Una aplicación para organizar y compartir recetas familiares, con funciones de búsqueda avanzada y planificación de menús.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["Angular", "Firebase", "Material UI"],
    liveUrl: "#",
    featured: false,
  },
  {
    id: "meditation-app",
    title: "App de Meditación",
    description:
      "Una aplicación serena para la práctica de mindfulness, con sesiones guiadas y seguimiento de progreso personal.",
    image: "/placeholder.svg?height=300&width=400",
    tags: ["React Native", "Redux", "Audio API"],
    liveUrl: "#",
    githubUrl: "#",
    featured: false,
  },
]

export function ProjectsSection() {
  const { t } = useLanguage()

  return (
    <section id="projects" className="min-h-screen py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-4 text-balance">{t("projects")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Una colección de proyectos que nacen de la pasión por crear experiencias digitales únicas y significativas.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">¿Tienes una idea increíble? ¡Hablemos!</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-accent text-primary-foreground rounded-full font-medium hover:from-accent hover:to-primary transition-all duration-300"
          >
            Colaboremos juntos
            <Sparkles className="w-4 h-4" />
          </a>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-muted-foreground/40">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <span className="text-xs font-medium">✨ Creaciones con propósito ✨</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

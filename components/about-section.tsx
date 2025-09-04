"use client"

import { useLanguage } from "@/hooks/use-language"
import { Coffee, BookOpen, Heart, Palette } from "lucide-react"

export function AboutSection() {
  const { t } = useLanguage()

  const interests = [
    {
      icon: BookOpen,
      title: "Libros",
      description: "Perdida entre páginas y mundos infinitos",
    },
    {
      icon: Coffee,
      title: "Café & Té",
      description: "Rituales que alimentan el alma",
    },
    {
      icon: Heart,
      title: "Mascotas",
      description: "Mis compañeros más fieles y adorables",
    },
    {
      icon: Palette,
      title: "Creatividad",
      description: "Expresando arte en cada proyecto",
    },
  ]

  return (
    <section id="about" className="min-h-screen py-20 relative">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Section title */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-4 text-balance">
              {t("about.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full" />
          </div>

          {/* Main content grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text content */}
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-foreground/90 text-balance">{t("about.description")}</p>

              {/* Decorative quote */}
              <blockquote className="border-l-4 border-primary/30 pl-6 py-4 bg-card/50 rounded-r-lg">
                <p className="text-muted-foreground italic text-balance">
                  "La magia está en los pequeños momentos que compartimos con quienes amamos, ya sean humanos o
                  peluditos."
                </p>
              </blockquote>

              {/* Interest tags */}
              <div className="flex flex-wrap gap-3 pt-4">
                {["Crochet", "Plantas", "Videojuegos", "Arte Digital", "Fotografía"].map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-2 bg-accent/20 text-accent-foreground rounded-full text-sm font-medium hover:bg-accent/30 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Interests grid */}
            <div className="grid grid-cols-2 gap-4">
              {interests.map((interest, index) => {
                const Icon = interest.icon
                return (
                  <div
                    key={interest.title}
                    className="group p-6 bg-card/60 backdrop-blur-sm rounded-xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex flex-col items-center text-center space-y-3">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-serif font-semibold text-foreground">{interest.title}</h3>
                      <p className="text-sm text-muted-foreground text-balance">{interest.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Decorative elements */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 text-muted-foreground/40">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <span className="text-xs font-medium">✨ Un poco sobre mí ✨</span>
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

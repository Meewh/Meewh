"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { TypewriterEffect } from "@/components/typewriter-effect"
import { useLanguage } from "@/hooks/use-language"
import { useTheme } from "next-themes"
import { Sparkles } from "lucide-react"

export function HomeSection() {
  const { t } = useLanguage()
  const { theme } = useTheme()
  const [showTypewriter, setShowTypewriter] = useState(false)

  // Start typewriter effect after component mounts
  useState(() => {
    const timer = setTimeout(() => setShowTypewriter(true), 1000)
    return () => clearTimeout(timer)
  })

  const scrollToAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000"
        style={{
          backgroundImage: theme === "dark" ? "url(/images/fondo-noche.webp)" : "url(/images/fondo-dia.webp)",
        }}
      />

      <div className="absolute inset-0 bg-background/20 backdrop-blur-[1px]" />

      {/* Main content */}
      <div className="text-center z-20 max-w-4xl mx-auto px-4">
        <div className="relative mb-8 inline-block">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-sage-green to-mint-green p-1 animate-gentle-pulse shadow-2xl">
            <div className="w-full h-full rounded-full bg-card/90 backdrop-blur-sm flex items-center justify-center border-2 border-spring-green/30">
              <img
                src="/placeholder.svg?height=120&width=120"
                alt="meewh avatar"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
          </div>
          <div className="absolute -top-3 -right-3 text-2xl animate-sway">🌸</div>
          <div className="absolute -bottom-2 -left-3 text-xl animate-bloom">🌿</div>
          <div className="absolute top-1/2 -right-8 text-lg animate-float">✨</div>
          <div className="absolute -top-1 -left-6 text-sm animate-gentle-pulse">🦋</div>
        </div>

        {/* Title with typewriter effect */}
        <h1 className="font-dancing text-4xl md:text-6xl lg:text-7xl text-primary mb-6 leading-tight drop-shadow-lg">
          {showTypewriter ? (
            <TypewriterEffect text={t("home.title")} speed={80} className="text-balance" />
          ) : (
            <span className="opacity-0">placeholder</span>
          )}
        </h1>

        <p className="text-lg md:text-xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed text-balance font-crimson drop-shadow-sm bg-background/30 backdrop-blur-sm rounded-2xl p-4 border border-sage-green/20">
          {t("home.subtitle")}
        </p>

        <Button
          onClick={scrollToAbout}
          size="lg"
          className="group relative overflow-hidden bg-gradient-to-r from-sage-green to-mint-green hover:from-spring-green hover:to-jade-green transition-all duration-300 text-white font-medium px-8 py-3 rounded-full shadow-xl border-2 border-forest-green/30"
        >
          <span className="relative z-10 flex items-center gap-2">
            {t("home.cta")}
            <Sparkles className="w-4 h-4 group-hover:animate-spin transition-transform" />
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-forest-green to-jade-green opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </Button>

        <div className="mt-12 flex justify-center items-center gap-4 text-foreground/70">
          <div className="flex items-center gap-1">
            <span className="text-lg animate-sway">🌺</span>
            <div className="w-12 h-px bg-gradient-to-r from-transparent to-sage-green/50" />
          </div>
          <span className="text-sm font-medium bg-background/40 backdrop-blur-sm px-4 py-2 rounded-full border border-mint-green/30">
            ✨ Bienvenidos al jardín mágico ✨
          </span>
          <div className="flex items-center gap-1">
            <div className="w-12 h-px bg-gradient-to-l from-transparent to-sage-green/50" />
            <span className="text-lg animate-sway">🌸</span>
          </div>
        </div>
      </div>
    </section>
  )
}

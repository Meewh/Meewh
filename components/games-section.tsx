"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Clock, Star, Gamepad2 } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const games = [
  {
    id: "stardew-valley",
    title: "Stardew Valley",
    description:
      "Mi refugio perfecto donde puedo cultivar, criar animales y vivir una vida tranquila en el campo. Cada temporada trae nuevas aventuras y la satisfacción de construir mi propia granja desde cero.",
    image: "/placeholder.svg?height=300&width=400",
    playtime: "500+ horas",
    rating: 5,
    genre: "Simulación",
    highlights: ["Relajante", "Creatividad", "Gestión de recursos"],
  },
  {
    id: "animal-crossing",
    title: "Animal Crossing",
    description:
      "Un mundo adorable donde puedo decorar mi isla, hacer amigos con vecinos encantadores y crear el paraíso perfecto. La creatividad no tiene límites aquí.",
    image: "/placeholder.svg?height=300&width=400",
    playtime: "800+ horas",
    rating: 5,
    genre: "Simulación social",
    highlights: ["Decoración", "Colección", "Relajante"],
  },
  {
    id: "spiritfarer",
    title: "Spiritfarer",
    description:
      "Una experiencia emotiva sobre el cuidado y la despedida. Este juego me enseñó sobre la compasión, el amor y la importancia de los momentos compartidos.",
    image: "/placeholder.svg?height=300&width=400",
    playtime: "45 horas",
    rating: 5,
    genre: "Aventura",
    highlights: ["Emotivo", "Arte hermoso", "Historia profunda"],
  },
  {
    id: "gris",
    title: "GRIS",
    description:
      "Una obra de arte interactiva que explora temas profundos a través de una narrativa visual impresionante. Cada escena es una pintura en movimiento.",
    image: "/placeholder.svg?height=300&width=400",
    playtime: "4 horas",
    rating: 5,
    genre: "Aventura artística",
    highlights: ["Arte excepcional", "Música sublime", "Experiencia única"],
  },
  {
    id: "coffee-talk",
    title: "Coffee Talk",
    description:
      "Como amante del café, este juego me permite ser barista en un mundo fantástico, escuchando historias mientras preparo bebidas perfectas para cada cliente.",
    image: "/placeholder.svg?height=300&width=400",
    playtime: "20 horas",
    rating: 4,
    genre: "Simulación narrativa",
    highlights: ["Café", "Historias", "Atmosférico"],
  },
]

export function GamesSection() {
  const { t } = useLanguage()
  const [currentGameIndex, setCurrentGameIndex] = useState(0)

  const currentGame = games[currentGameIndex]

  const handlePrevious = () => {
    setCurrentGameIndex((prev) => (prev - 1 + games.length) % games.length)
  }

  const handleNext = () => {
    setCurrentGameIndex((prev) => (prev + 1) % games.length)
  }

  return (
    <section id="games" className="min-h-screen py-20 relative">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-4 text-balance">{t("games")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Los videojuegos que han marcado mi corazón y alimentado mi imaginación. Cada uno es una ventana a mundos
            extraordinarios.
          </p>
        </div>

        {/* Main game showcase */}
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
            {/* Game image */}
            <div className="relative group">
              <div className="aspect-video rounded-2xl overflow-hidden border-4 border-primary/20 shadow-2xl">
                <img
                  src={currentGame.image || "/placeholder.svg"}
                  alt={currentGame.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              {/* Floating game controller */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center animate-float">
                <Gamepad2 className="w-6 h-6 text-white" />
              </div>
            </div>

            {/* Game details */}
            <div className="space-y-6">
              <div>
                <h3 className="font-serif font-bold text-3xl text-primary mb-2">{currentGame.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    {currentGame.playtime}
                  </span>
                  <span className="px-2 py-1 bg-accent/20 rounded-full">{currentGame.genre}</span>
                </div>
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${i < currentGame.rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                    />
                  ))}
                </div>
              </div>

              <p className="text-foreground/90 leading-relaxed text-balance">{currentGame.description}</p>

              {/* Highlights */}
              <div>
                <h4 className="font-semibold text-foreground mb-3">Lo que más me gusta:</h4>
                <div className="flex flex-wrap gap-2">
                  {currentGame.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-6">
            <Button onClick={handlePrevious} variant="outline" size="icon" className="rounded-full bg-transparent">
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Game indicators */}
            <div className="flex gap-2">
              {games.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentGameIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentGameIndex ? "bg-primary scale-125" : "bg-primary/30 hover:bg-primary/50"
                  }`}
                />
              ))}
            </div>

            <Button onClick={handleNext} variant="outline" size="icon" className="rounded-full bg-transparent">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>

          {/* Games grid preview */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-5 gap-4">
            {games.map((game, index) => (
              <button
                key={game.id}
                onClick={() => setCurrentGameIndex(index)}
                className={`aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                  index === currentGameIndex
                    ? "border-primary shadow-lg scale-105"
                    : "border-border/30 hover:border-primary/50 opacity-70 hover:opacity-100"
                }`}
              >
                <img src={game.image || "/placeholder.svg"} alt={game.title} className="w-full h-full object-cover" />
              </button>
            ))}
          </div>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-muted-foreground/40">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <Gamepad2 className="w-4 h-4" />
            <span className="text-xs font-medium">Mundos que me inspiran</span>
            <Gamepad2 className="w-4 h-4" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

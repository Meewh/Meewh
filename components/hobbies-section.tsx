"use client"

import { useState } from "react"
import { HobbyBubble } from "@/components/hobby-bubble"
import { useLanguage } from "@/hooks/use-language"

const hobbies = [
  {
    id: "crochet",
    title: "Crochet",
    icon: "🧶",
    description:
      "El arte del crochet me permite crear piezas únicas llenas de amor y dedicación. Cada puntada es una meditación, cada proyecto una nueva aventura. Desde mantas acogedoras hasta amigurumis adorables, mis manos tejen historias de paciencia y creatividad.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    color: "bg-gradient-to-br from-pink-200/80 to-purple-200/80",
  },
  {
    id: "plants",
    title: "Plantas",
    icon: "🌿",
    description:
      "Mi hogar es un pequeño jardín interior donde cada planta tiene su propia personalidad. Cuidar de ellas me conecta con la naturaleza y me enseña sobre paciencia, crecimiento y la belleza de los ciclos naturales. Desde suculentas hasta helechos, cada una aporta vida y color a mi espacio.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    color: "bg-gradient-to-br from-green-200/80 to-emerald-200/80",
  },
  {
    id: "coffee",
    title: "Café & Té",
    icon: "☕",
    description:
      "Los rituales del café y el té son momentos sagrados en mi día. Cada taza es una pausa para reflexionar, crear y conectar conmigo misma. Desde el aroma matutino del café recién molido hasta la ceremonia vespertina del té, estas bebidas acompañan mis mejores momentos creativos.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    color: "bg-gradient-to-br from-amber-200/80 to-orange-200/80",
  },
  {
    id: "reading",
    title: "Lectura",
    icon: "📚",
    description:
      "Los libros son portales a mundos infinitos donde mi imaginación vuela libre. Cada página es una nueva aventura, cada historia una lección de vida. Mi biblioteca personal es mi tesoro más preciado, llena de mundos fantásticos, romances épicos y conocimientos que alimentan mi alma curiosa.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    color: "bg-gradient-to-br from-blue-200/80 to-indigo-200/80",
  },
  {
    id: "art",
    title: "Arte Digital",
    icon: "🎨",
    description:
      "El arte digital me permite expresar mi creatividad sin límites. Desde ilustraciones whimsicas hasta diseños complejos, cada creación es una extensión de mi alma artística. Las herramientas digitales son mis pinceles modernos, y la pantalla mi lienzo infinito donde los sueños toman forma.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    color: "bg-gradient-to-br from-violet-200/80 to-fuchsia-200/80",
  },
  {
    id: "photography",
    title: "Fotografía",
    icon: "📸",
    description:
      "Capturar momentos únicos y belleza en lo cotidiano es mi pasión fotográfica. Cada imagen cuenta una historia, cada encuadre revela una perspectiva nueva del mundo. Desde retratos íntimos de mis mascotas hasta paisajes que roban el aliento, mi cámara es la ventana a través de la cual comparto mi visión del mundo.",
    images: [
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
      "/placeholder.svg?height=200&width=200",
    ],
    color: "bg-gradient-to-br from-slate-200/80 to-gray-200/80",
  },
]

export function HobbiesSection() {
  const { t } = useLanguage()
  const [expandedHobby, setExpandedHobby] = useState<string | null>(null)

  const handleHobbyClick = (hobbyId: string) => {
    setExpandedHobby(hobbyId)
  }

  const handleCloseExpanded = () => {
    setExpandedHobby(null)
  }

  return (
    <section id="hobbies" className="min-h-screen py-20 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5" />

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 left-1/6 w-6 h-6 bg-primary/20 rounded-full animate-float blur-sm" />
      <div
        className="absolute bottom-1/3 right-1/5 w-8 h-8 bg-accent/15 rounded-full animate-sparkle blur-sm"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute top-2/3 left-1/3 w-4 h-4 bg-secondary/25 rounded-full animate-gentle-pulse blur-sm"
        style={{ animationDelay: "1s" }}
      />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-4 text-balance">{t("hobbies")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">
            Explora las pasiones que llenan mi vida de color, creatividad y alegría. Cada hobby es un mundo de
            posibilidades infinitas.
          </p>
        </div>

        {/* Hobbies bubbles field */}
        <div className="relative min-h-[600px] flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {hobbies.map((hobby, index) => (
            <div
              key={hobby.id}
              className="animate-float"
              style={{
                animationDelay: `${index * 0.5}s`,
                animationDuration: `${3 + (index % 3)}s`,
              }}
            >
              <HobbyBubble
                hobby={hobby}
                onClick={() => handleHobbyClick(hobby.id)}
                isExpanded={expandedHobby === hobby.id}
                onClose={handleCloseExpanded}
              />
            </div>
          ))}
        </div>

        {/* Instructions */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground/80 text-sm">
            Haz clic en cualquier burbuja para descubrir más sobre mis pasiones
          </p>
        </div>

        {/* Decorative bottom element */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-muted-foreground/40">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
            <span className="text-xs font-medium">✨ Pasiones que alimentan el alma ✨</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

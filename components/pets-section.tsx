"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const pets = [
  {
    id: "guerra",
    name: "Guerra",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    personality: "princess" as const,
    sounds: ["purr", "gentle meow"],
  },
  {
    id: "kiwi",
    name: "Kiwi",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    personality: "feisty" as const,
    sounds: ["hiss", "aggressive meow"],
  },
  {
    id: "mellyana",
    name: "Mellyana",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    personality: "dramatic" as const,
    sounds: ["loud meow", "dramatic yowl"],
  },
  {
    id: "rata",
    name: "Rata Blanca",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    personality: "playful" as const,
    sounds: ["happy purr", "playful chirp"],
  },
  {
    id: "blanquita",
    name: "Blanquita",
    images: [
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
      "/placeholder.svg?height=300&width=300",
    ],
    personality: "shy" as const,
    sounds: ["soft whimper", "gentle pant"],
  },
]

export function PetsSection() {
  const { t } = useLanguage()
  const [petImageIndexes, setPetImageIndexes] = useState<Record<string, number>>(
    pets.reduce((acc, pet) => ({ ...acc, [pet.id]: 0 }), {}),
  )

  const changePetImage = (petId: string, direction: "next" | "prev") => {
    setPetImageIndexes((prev) => {
      const pet = pets.find((p) => p.id === petId)
      if (!pet) return prev

      const currentIndex = prev[petId]
      const maxIndex = pet.images.length - 1

      let newIndex
      if (direction === "next") {
        newIndex = currentIndex >= maxIndex ? 0 : currentIndex + 1
      } else {
        newIndex = currentIndex <= 0 ? maxIndex : currentIndex - 1
      }

      return { ...prev, [petId]: newIndex }
    })
  }

  return (
    <section id="pets" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 bg-gradient-to-b from-sage-green/10 via-transparent to-mint-green/10" />

      <div className="absolute top-1/4 left-1/6 opacity-20 animate-sway">
        <span className="text-3xl">🐾</span>
      </div>
      <div className="absolute bottom-1/3 right-1/5 opacity-20 animate-bloom" style={{ animationDelay: "2s" }}>
        <span className="text-2xl">🌿</span>
      </div>
      <div className="absolute top-1/2 left-1/12 opacity-15 animate-float" style={{ animationDelay: "1s" }}>
        <span className="text-xl">🦋</span>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="font-dancing text-4xl md:text-5xl text-primary mb-4 text-balance">{t("pets.title")}</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-sage-green to-mint-green mx-auto rounded-full mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance font-crimson">
            Conoce a mis adorables compañeros de vida, cada uno con su personalidad única y encantadora.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pets.map((pet) => (
            <div key={pet.id} className="group">
              {/* Pet card with image carousel */}
              <div className="bg-card/80 backdrop-blur-sm rounded-2xl p-6 border-2 border-sage-green/20 hover:border-mint-green/40 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden">
                <div className="absolute -top-2 -left-2 text-lg animate-sway">🌸</div>
                <div className="absolute -top-2 -right-2 text-lg animate-bloom">🌿</div>
                <div className="absolute -bottom-2 -left-2 text-sm animate-float">🦋</div>
                <div className="absolute -bottom-2 -right-2 text-sm animate-gentle-pulse">✨</div>

                {/* Image carousel container */}
                <div className="relative mb-4">
                  <div className="aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-sage-green/10 to-mint-green/10">
                    <img
                      src={pet.images[petImageIndexes[pet.id]] || "/placeholder.svg"}
                      alt={`${pet.name} - foto ${petImageIndexes[pet.id] + 1}`}
                      className="w-full h-full object-cover transition-all duration-500"
                    />
                  </div>

                  <Button
                    onClick={() => changePetImage(pet.id, "prev")}
                    variant="outline"
                    size="icon"
                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border-sage-green/30 hover:border-mint-green/50 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  <Button
                    onClick={() => changePetImage(pet.id, "next")}
                    variant="outline"
                    size="icon"
                    className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm border-sage-green/30 hover:border-mint-green/50 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>

                  <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
                    {pet.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setPetImageIndexes((prev) => ({ ...prev, [pet.id]: index }))}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${
                          index === petImageIndexes[pet.id]
                            ? "bg-sage-green scale-125"
                            : "bg-white/50 hover:bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                </div>

                {/* Pet info */}
                <div className="text-center">
                  <h3 className="font-dancing text-2xl text-primary mb-2">{t(`pets.${pet.id}.name`)}</h3>
                  <p className="text-sm text-muted-foreground mb-3 font-crimson">{t(`pets.${pet.id}.description`)}</p>

                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium border-2 ${
                      pet.personality === "princess"
                        ? "bg-pink-100 text-pink-700 border-pink-200"
                        : pet.personality === "feisty"
                          ? "bg-orange-100 text-orange-700 border-orange-200"
                          : pet.personality === "dramatic"
                            ? "bg-purple-100 text-purple-700 border-purple-200"
                            : pet.personality === "playful"
                              ? "bg-green-100 text-green-700 border-green-200"
                              : "bg-blue-100 text-blue-700 border-blue-200"
                    }`}
                  >
                    <span className="text-sm">
                      {pet.personality === "princess"
                        ? "👑"
                        : pet.personality === "feisty"
                          ? "🔥"
                          : pet.personality === "dramatic"
                            ? "🎭"
                            : pet.personality === "playful"
                              ? "🎾"
                              : "💙"}
                    </span>
                    {pet.personality}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 text-muted-foreground/40">
            <div className="w-16 h-px bg-gradient-to-r from-transparent via-sage-green/30 to-transparent" />
            <span className="text-2xl animate-sway">🐾</span>
            <span className="text-xs font-medium font-crimson">Mis compañeros de vida</span>
            <span className="text-2xl animate-bloom">🌿</span>
            <div className="w-16 h-px bg-gradient-to-l from-transparent via-sage-green/30 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}

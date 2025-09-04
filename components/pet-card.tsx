"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Heart, Sparkles, Gift } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

interface Pet {
  id: string
  name: string
  image: string
  personality: "princess" | "feisty" | "dramatic" | "playful" | "shy"
  sounds: string[]
}

interface PetCardProps {
  pet: Pet
  isActive: boolean
  onClick: () => void
}

export function PetCard({ pet, isActive, onClick }: PetCardProps) {
  const { t } = useLanguage()
  const [isGivingTreat, setIsGivingTreat] = useState(false)
  const [treatCount, setTreatCount] = useState(0)

  const handleGiveTreat = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsGivingTreat(true)
    setTreatCount((prev) => prev + 1)

    // Play sound effect based on pet personality
    // In a real app, you'd play actual audio files here
    console.log(`[v0] Playing ${pet.personality} sound for ${pet.name}`)

    setTimeout(() => setIsGivingTreat(false), 1000)
  }

  const getPersonalityEffects = () => {
    switch (pet.personality) {
      case "princess":
        return {
          bgGradient: "from-pink-100/20 to-purple-100/20",
          borderColor: "border-pink-300/30",
          sparkleColor: "text-pink-400",
          treatEffect: "animate-bounce",
        }
      case "feisty":
        return {
          bgGradient: "from-orange-100/20 to-red-100/20",
          borderColor: "border-orange-300/30",
          sparkleColor: "text-orange-400",
          treatEffect: "animate-pulse",
        }
      case "dramatic":
        return {
          bgGradient: "from-purple-100/20 to-blue-100/20",
          borderColor: "border-purple-300/30",
          sparkleColor: "text-purple-400",
          treatEffect: "animate-spin",
        }
      case "playful":
        return {
          bgGradient: "from-green-100/20 to-yellow-100/20",
          borderColor: "border-green-300/30",
          sparkleColor: "text-green-400",
          treatEffect: "animate-bounce",
        }
      case "shy":
        return {
          bgGradient: "from-blue-100/20 to-gray-100/20",
          borderColor: "border-blue-300/30",
          sparkleColor: "text-blue-400",
          treatEffect: "animate-pulse",
        }
      default:
        return {
          bgGradient: "from-primary/10 to-accent/10",
          borderColor: "border-primary/30",
          sparkleColor: "text-primary",
          treatEffect: "animate-bounce",
        }
    }
  }

  const effects = getPersonalityEffects()

  return (
    <div
      className={`relative group cursor-pointer transition-all duration-500 ${
        isActive ? "scale-105 z-10" : "scale-95 opacity-70"
      }`}
      onClick={onClick}
    >
      <div
        className={`relative p-6 rounded-2xl border-2 ${effects.borderColor} bg-gradient-to-br ${effects.bgGradient} backdrop-blur-sm hover:shadow-xl transition-all duration-300 overflow-hidden`}
      >
        {/* Decorative corner elements */}
        <div className="absolute top-2 right-2">
          <Sparkles className={`w-4 h-4 ${effects.sparkleColor} animate-sparkle`} />
        </div>
        <div className="absolute bottom-2 left-2">
          <Heart className={`w-3 h-3 ${effects.sparkleColor} animate-gentle-pulse`} />
        </div>

        {/* Pet image */}
        <div className="relative mb-4">
          <div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-white/50 shadow-lg">
            <img
              src={pet.image || "/placeholder.svg"}
              alt={t(`pets.${pet.id}.name`)}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
          </div>

          {/* Treat particles when giving treat */}
          {isGivingTreat && (
            <div className="absolute inset-0 pointer-events-none">
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className={`absolute w-2 h-2 bg-yellow-400 rounded-full ${effects.treatEffect}`}
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${30 + i * 15}%`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          )}
        </div>

        {/* Pet name */}
        <h3 className="font-serif font-bold text-xl text-center text-foreground mb-2">{t(`pets.${pet.id}.name`)}</h3>

        {/* Pet description */}
        <p className="text-sm text-muted-foreground text-center leading-relaxed mb-4 text-balance">
          {t(`pets.${pet.id}.description`)}
        </p>

        {/* Give treat button */}
        <div className="flex justify-center">
          <Button
            onClick={handleGiveTreat}
            size="sm"
            variant="outline"
            className={`group/btn relative overflow-hidden border-primary/30 hover:border-primary/50 ${
              isGivingTreat ? effects.treatEffect : ""
            }`}
          >
            <Gift className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
            {t("pets.give_treat")}
            {treatCount > 0 && (
              <span className="ml-2 px-2 py-1 bg-primary/20 rounded-full text-xs font-medium">{treatCount}</span>
            )}
          </Button>
        </div>

        {/* Floating hearts when active */}
        {isActive && (
          <div className="absolute -top-2 -right-2 pointer-events-none">
            <Heart className="w-6 h-6 text-red-400 animate-float" />
          </div>
        )}
      </div>
    </div>
  )
}

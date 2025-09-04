"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { X, Sparkles } from "lucide-react"

interface Hobby {
  id: string
  title: string
  icon: string
  description: string
  images: string[]
  color: string
}

interface HobbyBubbleProps {
  hobby: Hobby
  onClick: () => void
  isExpanded: boolean
  onClose: () => void
}

export function HobbyBubble({ hobby, onClick, isExpanded, onClose }: HobbyBubbleProps) {
  const [isHovered, setIsHovered] = useState(false)

  if (isExpanded) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
        <div className="relative max-w-2xl w-full max-h-[80vh] overflow-y-auto bg-card/95 backdrop-blur-sm rounded-2xl border border-border/50 shadow-2xl">
          <div className="p-6">
            {/* Close button */}
            <Button onClick={onClose} variant="ghost" size="icon" className="absolute top-4 right-4 hover:bg-accent/20">
              <X className="w-4 h-4" />
            </Button>

            {/* Header */}
            <div className="flex items-center gap-4 mb-6">
              <div className={`text-4xl p-3 rounded-full ${hobby.color}`}>{hobby.icon}</div>
              <div>
                <h3 className="font-serif font-bold text-2xl text-foreground">{hobby.title}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-primary to-accent rounded-full mt-2" />
              </div>
            </div>

            {/* Description */}
            <p className="text-foreground/90 leading-relaxed mb-6 text-balance">{hobby.description}</p>

            {/* Images grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {hobby.images.map((image, index) => (
                <div
                  key={index}
                  className="aspect-square rounded-lg overflow-hidden border border-border/30 hover:border-primary/30 transition-colors"
                >
                  <img
                    src={image || "/placeholder.svg"}
                    alt={`${hobby.title} ${index + 1}`}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      className={`relative cursor-pointer transition-all duration-300 ${isHovered ? "scale-110 z-10" : "scale-100"}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`w-32 h-32 md:w-40 md:h-40 rounded-full ${hobby.color} flex flex-col items-center justify-center text-center p-4 border-4 border-white/50 shadow-lg hover:shadow-xl transition-all duration-300 backdrop-blur-sm`}
      >
        <div className="text-3xl md:text-4xl mb-2">{hobby.icon}</div>
        <span className="font-serif font-semibold text-sm md:text-base text-foreground">{hobby.title}</span>
      </div>

      {/* Sparkle effect on hover */}
      {isHovered && (
        <div className="absolute -top-2 -right-2 pointer-events-none">
          <Sparkles className="w-6 h-6 text-accent animate-sparkle" />
        </div>
      )}
    </div>
  )
}

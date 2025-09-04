"use client"

export function FloatingElements() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-10">
      {/* Floating decorative elements */}
      <div className="absolute top-20 left-10 w-4 h-4 bg-accent/30 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-6 h-6 bg-primary/20 rounded-full animate-sparkle" />
      <div className="absolute bottom-32 left-1/4 w-3 h-3 bg-secondary/40 rounded-full animate-gentle-pulse" />
      <div
        className="absolute top-1/3 right-1/3 w-5 h-5 bg-accent/25 rounded-full animate-float"
        style={{ animationDelay: "1s" }}
      />
      <div
        className="absolute top-2/3 left-1/5 w-4 h-4 bg-primary/15 rounded-full animate-sparkle"
        style={{ animationDelay: "2s" }}
      />
      <div
        className="absolute bottom-1/4 right-1/4 w-3 h-3 bg-secondary/30 rounded-full animate-gentle-pulse"
        style={{ animationDelay: "1.5s" }}
      />

      {/* Larger decorative shapes */}
      <div className="absolute top-1/4 left-1/2 w-8 h-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-full animate-float blur-sm" />
      <div
        className="absolute bottom-1/3 left-1/6 w-6 h-6 bg-gradient-to-br from-secondary/15 to-primary/15 rounded-full animate-sparkle blur-sm"
        style={{ animationDelay: "3s" }}
      />
    </div>
  )
}

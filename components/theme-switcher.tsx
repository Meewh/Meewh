"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Sun, Moon, Sparkles } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="hover:bg-accent/20">
        <div className="h-5 w-5" />
      </Button>
    )
  }

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="hover:bg-accent/20 relative group transition-all duration-300"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5 text-accent transition-transform group-hover:rotate-12" />
      ) : (
        <Moon className="h-5 w-5 text-primary transition-transform group-hover:-rotate-12" />
      )}
      <Sparkles className="absolute -top-1 -right-1 h-3 w-3 text-accent/60 animate-sparkle" />
    </Button>
  )
}

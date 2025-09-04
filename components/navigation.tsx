"use client"

import { ThemeSwitcher } from "@/components/theme-switcher"
import { LanguageSwitcher } from "@/components/language-switcher"
import { useLanguage } from "@/hooks/use-language"

export function Navigation() {
  const { t } = useLanguage()

  const navItems = [
    { key: "home", href: "#home" },
    { key: "about", href: "#about" },
    { key: "pets", href: "#pets" },
    { key: "games", href: "#games" },
    { key: "hobbies", href: "#hobbies" },
    { key: "projects", href: "#projects" },
    { key: "contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent animate-gentle-pulse relative">
              <div className="absolute inset-1 rounded-full bg-gradient-to-br from-secondary to-primary opacity-60 animate-sparkle" />
            </div>
            <h1 className="font-serif font-bold text-2xl text-primary">meewh</h1>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-foreground hover:text-primary transition-colors duration-300 font-medium relative group"
              >
                {t(item.key)}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          {/* Theme and Language Controls */}
          <div className="flex items-center space-x-2">
            <ThemeSwitcher />
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </nav>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

const languages = {
  es: "Español",
  pt: "Português",
  en: "English",
}

export function LanguageSwitcher() {
  const { currentLang, setLanguage } = useLanguage()

  return (
    <div className="relative group">
      <Button variant="ghost" size="icon" className="hover:bg-accent/20">
        <Globe className="h-5 w-5 text-primary" />
      </Button>
      <div className="absolute right-0 top-full mt-2 bg-card/95 backdrop-blur-sm border border-border rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 min-w-[120px]">
        {Object.entries(languages).map(([code, name]) => (
          <button
            key={code}
            onClick={() => setLanguage(code as keyof typeof languages)}
            className={`block w-full text-left px-4 py-2 hover:bg-accent/20 first:rounded-t-lg last:rounded-b-lg transition-colors ${
              currentLang === code ? "bg-accent/10 text-primary font-medium" : "text-foreground"
            }`}
          >
            {name}
          </button>
        ))}
      </div>
    </div>
  )
}

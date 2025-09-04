"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Github, Mail, Instagram, Twitter, Linkedin } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    icon: Github,
    url: "https://github.com",
    color: "hover:text-gray-600 dark:hover:text-gray-300",
    bgColor: "hover:bg-gray-100 dark:hover:bg-gray-800",
  },
  {
    name: "Email",
    icon: Mail,
    url: "mailto:hello@meewh.com",
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-50 dark:hover:bg-red-900/20",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-50 dark:hover:bg-pink-900/20",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
  },
]

export function SocialLinks() {
  const [hoveredLink, setHoveredLink] = useState<string | null>(null)

  return (
    <div className="flex justify-center gap-4">
      {socialLinks.map((link) => {
        const Icon = link.icon
        return (
          <Button
            key={link.name}
            variant="ghost"
            size="icon"
            asChild
            className={`relative group transition-all duration-300 ${link.bgColor} ${link.color}`}
            onMouseEnter={() => setHoveredLink(link.name)}
            onMouseLeave={() => setHoveredLink(null)}
          >
            <a href={link.url} target="_blank" rel="noopener noreferrer" aria-label={link.name}>
              <Icon className="w-5 h-5 transition-transform group-hover:scale-110" />
              {hoveredLink === link.name && (
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-foreground text-background px-2 py-1 rounded text-xs whitespace-nowrap">
                  {link.name}
                </div>
              )}
            </a>
          </Button>
        )
      })}
    </div>
  )
}

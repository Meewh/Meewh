"use client```tsx file=\"components/contact-form.tsx"
"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Send, Heart, Sparkles } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"

export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    setIsSubmitting(false)
    setIsSubmitted(true)

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: "", email: "", message: "" })
    }, 3000)
  }

  if (isSubmitted) {
    return (
      <div className="text-center p-8 bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl border border-primary/20">
        <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
          <Heart className="w-8 h-8 text-white animate-gentle-pulse" />
        </div>
        <h3 className="font-serif font-bold text-2xl text-primary mb-2">¡Mensaje enviado!</h3>
        <p className="text-muted-foreground">Te responderé muy pronto. ¡Gracias por contactarme!</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-foreground">
            {t("contact.name")}
          </label>
          <Input
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
            placeholder="Tu nombre mágico..."
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-foreground">
            {t("contact.email")}
          </label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors"
            placeholder="tu@email.com"
          />
        </div>
      </div>
      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-foreground">
          {t("contact.message")}
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleInputChange}
          required
          rows={6}
          className="bg-card/50 border-border/50 focus:border-primary/50 transition-colors resize-none"
          placeholder="Cuéntame tu idea, proyecto o simplemente salúdame..."
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary text-primary-foreground font-medium py-3 rounded-full transition-all duration-300 group"
      >
        {isSubmitting ? (
          <div className="flex items-center gap-2">
            <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
            Enviando...
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            {t("contact.send")}
            <Sparkles className="w-4 h-4 group-hover:animate-spin transition-transform" />
          </div>
        )}
      </Button>
    </form>
  )
}

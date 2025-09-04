"use client"

import { ContactForm } from "@/components/contact-form"
import { SocialLinks } from "@/components/social-links"
import { useLanguage } from "@/hooks/use-language"
import { Heart, Sparkles, Star } from "lucide-react"

export function ContactSection() {
  const { t } = useLanguage()

  return (
    <section id="contact" className="min-h-screen py-20 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-primary/5 to-secondary/10" />

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
        <div className="max-w-4xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="font-serif font-bold text-4xl md:text-5xl text-primary mb-4 text-balance">
              {t("contact.title")}
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-balance">{t("contact.subtitle")}</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact form */}
            <div className="space-y-8">
              <div className="bg-card/60 backdrop-blur-sm rounded-2xl border border-border/50 p-8">
                <ContactForm />
              </div>

              {/* Social links */}
              <div className="text-center">
                <p className="text-muted-foreground mb-4">También puedes encontrarme en:</p>
                <SocialLinks />
              </div>
            </div>

            {/* Avatar and thank you message */}
            <div className="text-center lg:text-left space-y-8">
              {/* Avatar with decorative elements */}
              <div className="relative inline-block">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-full bg-gradient-to-br from-primary to-accent p-2 animate-gentle-pulse">
                  <div className="w-full h-full rounded-full bg-card flex items-center justify-center overflow-hidden">
                    <img
                      src="/placeholder.svg?height=180&width=180"
                      alt="meewh avatar"
                      className="w-44 h-44 rounded-full object-cover"
                    />
                  </div>
                </div>
                {/* Decorative elements around avatar */}
                <Sparkles className="absolute -top-2 -right-2 w-8 h-8 text-accent animate-sparkle" />
                <Heart className="absolute -bottom-2 -left-2 w-6 h-6 text-primary animate-float" />
                <Star className="absolute top-1/2 -right-8 w-5 h-5 text-secondary animate-gentle-pulse" />
              </div>

              {/* Thank you message */}
              <div className="bg-card/40 backdrop-blur-sm rounded-xl border border-border/30 p-6">
                <h3 className="font-serif font-bold text-xl text-primary mb-3">¡Gracias por llegar hasta aquí!</h3>
                <p className="text-muted-foreground leading-relaxed text-balance">{t("contact.thanks")}</p>
              </div>

              {/* Fun facts */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">5</div>
                  <div className="text-sm text-muted-foreground">Mascotas adorables</div>
                </div>
                <div className="text-center p-4 bg-accent/10 rounded-lg">
                  <div className="text-2xl font-bold text-accent">∞</div>
                  <div className="text-sm text-muted-foreground">Tazas de café</div>
                </div>
                <div className="text-center p-4 bg-secondary/10 rounded-lg">
                  <div className="text-2xl font-bold text-secondary">100+</div>
                  <div className="text-sm text-muted-foreground">Libros leídos</div>
                </div>
                <div className="text-center p-4 bg-primary/10 rounded-lg">
                  <div className="text-2xl font-bold text-primary">24/7</div>
                  <div className="text-sm text-muted-foreground">Modo creativo</div>
                </div>
              </div>
            </div>
          </div>

          {/* Decorative bottom element */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center gap-4 text-muted-foreground/40">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
              <Heart className="w-4 h-4" />
              <span className="text-xs font-medium">Hecho con amor y mucho café</span>
              <Heart className="w-4 h-4" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent via-primary/30 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

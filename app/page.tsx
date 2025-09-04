import { Navigation } from "@/components/navigation"
import { FloatingElements } from "@/components/floating-elements"
import { HomeSection } from "@/components/home-section"
import { AboutSection } from "@/components/about-section"
import { PetsSection } from "@/components/pets-section"
import { GamesSection } from "@/components/games-section"
import { HobbiesSection } from "@/components/hobbies-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <FloatingElements />

      <main className="pt-20">
        <HomeSection />
        <AboutSection />
        <PetsSection />
        <GamesSection />
        <HobbiesSection />
        <ProjectsSection />
        <ContactSection />
      </main>
    </div>
  )
}

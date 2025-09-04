"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "es" | "pt" | "en"

interface LanguageContextType {
  currentLang: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string
}

const translations = {
  es: {
    // Navigation
    home: "Inicio",
    about: "Sobre mí",
    pets: "Mascotas",
    games: "Videojuegos",
    hobbies: "Hobbies",
    projects: "Proyectos",
    contact: "Contacto",

    // Home section
    "home.title": "Bienvenidos a mi mundo mágico",
    "home.subtitle": "Un espacio lleno de creatividad, mascotas adorables y pasiones infinitas",
    "home.cta": "Conóceme más",

    // About section
    "about.title": "Sobre mí",
    "about.description":
      "Soy una persona apasionada por la vida, los libros, el café y mis adorables mascotas. Me encanta crear, explorar videojuegos y sumergirme en hobbies que alimentan mi alma.",

    // Pets section
    "pets.title": "Mis Compañeros Mágicos",
    "pets.give_treat": "Dar petisco",
    "pets.guerra.name": "Guerra",
    "pets.guerra.description":
      "La gatita más vieja de las 4, bonita y peludita. Personalidad de princesa que jamás envejece, mimosa, super educada. Todo lo que hace lo hace con elegancia y clase. Muy juguetona y compañera.",
    "pets.kiwi.name": "Kiwi",
    "pets.kiwi.description":
      "Gata difícil de ganarse su confianza; agresiva con todos excepto con su persona especial. Patita corta y traviesa, ama el sol y las alturas.",
    "pets.mellyana.name": "Mellyana",
    "pets.mellyana.description":
      "Gatita que grita por todo, pide muchos mimos y se entrega fácilmente. Se enoja fácilmente pero también se perdona rápido. Comilona, duerme todo el día.",
    "pets.rata.name": "Rata Blanca",
    "pets.rata.description":
      "Gato muerto de hambre, vive jugando, comiendo y pidiendo mimos a todos. Pierde control por comida y juego, nunca se enoja.",
    "pets.blanquita.name": "Blanquita",
    "pets.blanquita.description":
      "Perra sorda, extremadamente miedosa y sensible, de una sola dueña. No confía en nadie, muy juguetona, vive 24 hs detrás de su dueña.",

    // Contact section
    "contact.title": "Conectemos",
    "contact.subtitle": "Me encantaría conocerte y compartir experiencias contigo",
    "contact.name": "Nombre",
    "contact.email": "Email",
    "contact.message": "Mensaje",
    "contact.send": "Enviar mensaje",
    "contact.thanks": "¡Gracias por visitarme! Espero que hayas disfrutado conociendo mi mundo mágico.",
  },
  pt: {
    // Navigation
    home: "Início",
    about: "Sobre mim",
    pets: "Animais",
    games: "Videojogos",
    hobbies: "Hobbies",
    projects: "Projetos",
    contact: "Contato",

    // Home section
    "home.title": "Bem-vindos ao meu mundo mágico",
    "home.subtitle": "Um espaço cheio de criatividade, animais adoráveis e paixões infinitas",
    "home.cta": "Conheça-me mais",

    // About section
    "about.title": "Sobre mim",
    "about.description":
      "Sou uma pessoa apaixonada pela vida, livros, café e meus adoráveis animais. Adoro criar, explorar videojogos e mergulhar em hobbies que alimentam minha alma.",

    // Pets section
    "pets.title": "Meus Companheiros Mágicos",
    "pets.give_treat": "Dar petisco",
    "pets.guerra.name": "Guerra",
    "pets.guerra.description":
      "A gatinha mais velha das 4, bonita e peluda. Personalidade de princesa que nunca envelhece, carinhosa, super educada. Tudo que faz é com elegância e classe. Muito brincalhona e companheira.",
    "pets.kiwi.name": "Kiwi",
    "pets.kiwi.description":
      "Gata difícil de conquistar confiança; agressiva com todos exceto com sua pessoa especial. Patinha curta e travessa, ama o sol e as alturas.",
    "pets.mellyana.name": "Mellyana",
    "pets.mellyana.description":
      "Gatinha que grita por tudo, pede muitos mimos e se entrega facilmente. Se irrita facilmente mas também perdoa rápido. Comilona, dorme o dia todo.",
    "pets.rata.name": "Rata Branca",
    "pets.rata.description":
      "Gato morto de fome, vive brincando, comendo e pedindo mimos a todos. Perde controle por comida e brincadeira, nunca se irrita.",
    "pets.blanquita.name": "Blanquita",
    "pets.blanquita.description":
      "Cadela surda, extremamente medrosa e sensível, de uma só dona. Não confia em ninguém, muito brincalhona, vive 24h atrás da sua dona.",

    // Contact section
    "contact.title": "Vamos nos conectar",
    "contact.subtitle": "Adoraria te conhecer e compartilhar experiências contigo",
    "contact.name": "Nome",
    "contact.email": "Email",
    "contact.message": "Mensagem",
    "contact.send": "Enviar mensagem",
    "contact.thanks": "Obrigada por me visitar! Espero que tenha gostado de conhecer meu mundo mágico.",
  },
  en: {
    // Navigation
    home: "Home",
    about: "About me",
    pets: "Pets",
    games: "Video Games",
    hobbies: "Hobbies",
    projects: "Projects",
    contact: "Contact",

    // Home section
    "home.title": "Welcome to my magical world",
    "home.subtitle": "A space full of creativity, adorable pets and infinite passions",
    "home.cta": "Get to know me",

    // About section
    "about.title": "About me",
    "about.description":
      "I'm a person passionate about life, books, coffee and my adorable pets. I love creating, exploring video games and diving into hobbies that feed my soul.",

    // Pets section
    "pets.title": "My Magical Companions",
    "pets.give_treat": "Give treat",
    "pets.guerra.name": "Guerra",
    "pets.guerra.description":
      "The oldest of the 4 cats, beautiful and fluffy. Princess personality that never ages, cuddly, super well-behaved. Everything she does is with elegance and class. Very playful and companionable.",
    "pets.kiwi.name": "Kiwi",
    "pets.kiwi.description":
      "Cat that's hard to gain trust from; aggressive with everyone except her special person. Short paw and mischievous, loves the sun and heights.",
    "pets.mellyana.name": "Mellyana",
    "pets.mellyana.description":
      "Little cat that screams about everything, asks for lots of cuddles and gives herself easily. Gets angry easily but also forgives quickly. Foodie, sleeps all day.",
    "pets.rata.name": "White Rat",
    "pets.rata.description":
      "Starving cat, lives playing, eating and asking everyone for cuddles. Loses control over food and play, never gets angry.",
    "pets.blanquita.name": "Blanquita",
    "pets.blanquita.description":
      "Deaf dog, extremely fearful and sensitive, belongs to one owner only. Doesn't trust anyone, very playful, lives 24/7 behind her owner.",

    // Contact section
    "contact.title": "Let's connect",
    "contact.subtitle": "I'd love to meet you and share experiences with you",
    "contact.name": "Name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.send": "Send message",
    "contact.thanks": "Thank you for visiting me! I hope you enjoyed getting to know my magical world.",
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>("es")

  // Load saved language preference
  useEffect(() => {
    const savedLang = localStorage.getItem("meewh-language") as Language
    if (savedLang && translations[savedLang]) {
      setCurrentLang(savedLang)
    }
  }, [])

  const setLanguage = (lang: Language) => {
    setCurrentLang(lang)
    localStorage.setItem("meewh-language", lang)
  }

  const t = (key: string): string => {
    return translations[currentLang][key as keyof (typeof translations)[typeof currentLang]] || key
  }

  return <LanguageContext.Provider value={{ currentLang, setLanguage, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}

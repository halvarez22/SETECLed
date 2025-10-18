import type { Content, Language } from '../types';

const contentData: Record<Language, Content> = {
  es: {
    nav: {
      services: "Servicios",
      projects: "Proyectos",
      impact: "Impacto",
      about: "Nosotros",
      contact: "Contacto",
      language: "EN",
    },
    hero: {
      title: "Innovación y Sostenibilidad en Soluciones Ecotecnológicas",
      subtitle: "Liderando la transformación energética en México con tecnología de punta y un compromiso con el planeta.",
      cta: "Descubre Más",
    },
    about: {
      title: "Nuestra Misión: Un Futuro Más Verde",
      paragraph1: "Sistemas Ecotecnológicos (Setec) es una empresa 100% mexicana dedicada a la integración de soluciones en iluminación, generación de energía y construcción. Con presencia en toda la República y patentes internacionales, nuestra misión es ofrecer tecnología que genere ahorros significativos y reduzca el impacto ambiental.",
      paragraph2: "Nuestro equipo de expertos diseña e implementa proyectos a la medida, garantizando la máxima eficiencia y un rápido retorno de inversión para nuestros clientes en los sectores público, privado e industrial.",
      valuesTitle: "Nuestros Valores",
      values: [
        {
          title: "Innovación",
          description: "Buscamos constantemente la tecnología más avanzada para ofrecer soluciones eficientes y de vanguardia."
        },
        {
          title: "Sostenibilidad",
          description: "Nuestro núcleo es el respeto por el medio ambiente, impulsando proyectos que aseguran un futuro más verde."
        },
        {
          title: "Compromiso",
          description: "Garantizamos la satisfacción total de nuestros clientes, superando sus expectativas en cada proyecto."
        }
      ]
    },
    services: {
      title: "Nuestras Divisiones de Servicio",
      divisions: {
        led: {
          title: "SetecSOLAR",
          description: "Soluciones de iluminación de alta eficiencia para cualquier aplicación, desde alumbrado público hasta naves industriales.",
          items: ["Diseños de Iluminación", "Estudios Fotométricos", "Suministro de los mejores productos LED", "Instalaciones industriales, comerciales, residenciales y planteles escolares"],
        },
        solar: {
          title: "SetecSOLAR",
          description: "Generación de energía limpia y soluciones de iluminación autónoma a través de la tecnología fotovoltaica.",
          items: ["Sistemas fotovoltaicos interconectados", "Luminarias solares autónomas", "Proyectos de generación distribuida", "Bancos de baterías"],
        },
        home: {
          title: "SetecHOME",
          description: "Soluciones integrales para la construcción y modernización de espacios, enfocadas en la eficiencia y seguridad.",
          items: ["Instalaciones eléctricas", "Sistemas de seguridad (CCTV)", "Obra pública y civil", "Diseño eléctrico y levantamientos"],
        },
        technical: {
          title: "SERVICIOS TÉCNICOS",
          description: "Servicios especializados de ingeniería eléctrica y sistemas técnicos de alta complejidad.",
          items: ["Instalación y configuración de sistemas de seguridad", "Instalación de iluminación LED", "Electrificación", "Diseños Eléctricos", "Electrificaciones en Alta y Media tensión", "Diseño y Construcción", "Código de red"],
        },
        energy: {
          title: "GENERACIÓN DE ENERGÍA",
          description: "Soluciones integrales de generación de energía renovable y proyectos de eficiencia energética.",
          items: ["Sistemas fotovoltaicos y aislados", "Residenciales, comerciales, industriales y a gran escala", "Proyectos de eficiencia energética", "Generación y gestión de energía renovable"],
        },
      },
    },
    projects: {
      title: "Proyectos Destacados",
      filter: {
        all: "Todos",
        led: "SetecLED",
        solar: "SetecSOLAR",
        home: "SetecHOME",
      },
      items: [
        {
          title: "Modernización de Alumbrado Público - Jalisco",
          category: "SetecLED",
          description: "Sustitución de 20,000 luminarias por tecnología LED, logrando un 65% de ahorro energético y mejorando la seguridad.",
          technologies: ["Luminarias LED 150W", "Fotometría Dialux", "Sistema de Telegestión"],
          image: "/images/energias verdes 2.jpg"
        },
        {
          title: "Planta Fotovoltaica - Complejo Agroindustrial, Sinaloa",
          category: "SetecSOLAR",
          description: "Diseño e instalación de un sistema fotovoltaico de 2MW para autoconsumo, cubriendo el 95% de la demanda energética de la planta.",
          technologies: ["Paneles Solares Monocristalinos", "Inversores Centrales", "Estructura de Montaje Fija"],
          image: "/images/energias verdes 3.jpg"
        },
        {
          title: "Instalación Eléctrica y CCTV - Torre Corporativa, Monterrey",
          category: "SetecHOME",
          description: "Obra eléctrica completa y sistema de seguridad con más de 100 cámaras para un nuevo edificio de oficinas de 25 pisos.",
          technologies: ["Tableros de Distribución", "Cableado Estructurado", "Cámaras IP 4K"],
          image: "/images/energias verdes 4.jpg"
        },
        {
          title: "Iluminación Industrial - Nave de Ensamble, Querétaro",
          category: "SetecSOLAR",
          description: "Proyecto de eficiencia energética con luminarias High Bay LED, mejorando los niveles de iluminación y reduciendo el consumo en un 80%.",
          technologies: ["High Bay LED 200W", "Sensores de Movimiento", "Control DALI"],
          image: "/images/energias verdes 5.jpg"
        },
        {
          title: "Luminarias Solares Autónomas - Carretera Federal",
          category: "SetecLED",
          description: "Instalación de 500 luminarias solares para un tramo carretero sin acceso a la red eléctrica, garantizando visibilidad y seguridad.",
          technologies: ["Luminaria Solar All-in-One", "Batería de Litio", "Panel Solar de Alta Eficiencia"],
          image: "/images/energias verdes 6.jpg"
        },
        {
          title: "Red Eléctrica - Fraccionamiento Residencial",
          category: "SetecHOME",
          description: "Diseño y construcción de la red de media y baja tensión para un desarrollo de 300 viviendas, cumpliendo con normativas CFE.",
          technologies: ["Transformadores Pedestal", "Red Subterránea", "Postes de Concreto"],
          image: "/images/energias verdes 1.ppg"
        }
      ]
    },
    impact: {
      title: "Resultados que Transforman",
      subtitle: "Nuestro compromiso con la eficiencia se traduce en beneficios medibles y significativos para nuestros clientes y para el planeta.",
      metrics: {
        energy: { label: "Ahorro Energético", unit: "%" },
        maintenance: { label: "Reducción de Mantenimiento", unit: "%" },
        investment: { label: "Retorno de Inversión", unit: "meses" },
        co2: { label: "Reducción de CO2 por Luminaria", unit: "kg" },
      },
    },
    certifications: {
      title: "Calidad y Confianza Garantizadas",
    },
    testimonials: {
      title: "Lo que Dicen Nuestros Clientes",
      quotes: [
        {
          quote: "La implementación del nuevo sistema de iluminación LED ha reducido nuestros costos operativos en un 80%. El profesionalismo de Setec fue excepcional.",
          author: "Gerente de Planta",
          company: "Industria Manufacturera, Monterrey",
        },
        {
          quote: "El proyecto fotovoltaico superó nuestras expectativas. Ahora generamos el 95% de nuestra propia energía. Una inversión inteligente y sostenible.",
          author: "Director General",
          company: "Complejo Agroindustrial, Sinaloa",
        },
        {
          quote: "Modernizaron todo el alumbrado público del municipio en tiempo récord. La calidad de la luz y los ahorros son notables.",
          author: "Presidente Municipal",
          company: "Gobierno Municipal, Jalisco",
        },
      ],
    },
    contact: {
      title: "Contáctanos",
      subtitle: "¿Listo para iniciar tu proyecto de eficiencia energética? Nuestro equipo está aquí para ayudarte.",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        message: "Tu Mensaje",
        submit: "Enviar Mensaje",
        success: "¡Gracias! Tu mensaje ha sido enviado.",
      },
      info: {
        title: "Nuestra Oficina",
        address: "Fray Alfonso #19, Col. El Refugio, Lagos de Moreno Jalisco, C.P. 47470",
        phone: "+52 (474) 742 1030",
        phone2: "+52 (474) 742 1031",
        email: "informes@setecled.com",
      },
    },
    footer: {
      description: "Liderando la transformación energética con soluciones sostenibles.",
      rights: "Todos los derechos reservados.",
    },
  },
  en: {
    nav: {
      services: "Services",
      projects: "Projects",
      impact: "Impact",
      about: "About Us",
      contact: "Contact",
      language: "ES",
    },
    hero: {
      title: "Innovation and Sustainability in Eco-Technological Solutions",
      subtitle: "Leading the energy transformation in Mexico with cutting-edge technology and a commitment to the planet.",
      cta: "Discover More",
    },
    about: {
      title: "Our Mission: A Greener Future",
      paragraph1: "Sistemas Ecotecnológicos (Setec) is a 100% Mexican company dedicated to integrating solutions in lighting, energy generation, and construction. With a presence throughout the Republic and international patents, our mission is to offer technology that generates significant savings and reduces environmental impact.",
      paragraph2: "Our team of experts designs and implements tailor-made projects, ensuring maximum efficiency and a rapid return on investment for our clients in the public, private, and industrial sectors.",
      valuesTitle: "Our Values",
      values: [
        {
          title: "Innovation",
          description: "We constantly seek the most advanced technology to offer efficient and cutting-edge solutions."
        },
        {
          title: "Sustainability",
          description: "Our core is respect for the environment, driving projects that ensure a greener future."
        },
        {
          title: "Commitment",
          description: "We guarantee total client satisfaction by exceeding their expectations in every project."
        }
      ]
    },
    services: {
      title: "Our Service Divisions",
      divisions: {
        led: {
          title: "SetecSOLAR",
          description: "High-efficiency lighting solutions for any application, from public street lighting to industrial warehouses.",
          items: ["Lighting Designs", "Photometric Studies", "Supply of the best LED products", "Industrial, commercial, residential and school installations"],
        },
        solar: {
          title: "SetecSOLAR",
          description: "Clean energy generation and autonomous lighting solutions through photovoltaic technology.",
          items: ["Grid-tied photovoltaic systems", "Autonomous solar luminaires", "Distributed generation projects", "Battery banks"],
        },
        home: {
          title: "SetecHOME",
          description: "Comprehensive solutions for the construction and modernization of spaces, focused on efficiency and security.",
          items: ["Electrical installations", "Security systems (CCTV)", "Public and civil works", "Electrical design and surveys"],
        },
        technical: {
          title: "TECHNICAL SERVICES",
          description: "Specialized electrical engineering services and high-complexity technical systems.",
          items: ["Installation and configuration of security systems", "LED lighting installation", "Electrification", "Electrical Designs", "High and Medium voltage electrifications", "Design and Construction", "Network code"],
        },
        energy: {
          title: "ENERGY GENERATION",
          description: "Comprehensive renewable energy generation solutions and energy efficiency projects.",
          items: ["Photovoltaic and isolated systems", "Residential, commercial, industrial and large-scale", "Energy efficiency projects", "Renewable energy generation and management"],
        },
      },
    },
    projects: {
      title: "Featured Projects",
      filter: {
        all: "All",
        led: "SetecLED",
        solar: "SetecSOLAR",
        home: "SetecHOME",
      },
      items: [
        {
          title: "Public Lighting Modernization - Jalisco Municipality",
          category: "SetecLED",
          description: "Replacement of 20,000 luminaires with LED technology, achieving 65% energy savings and improving citizen safety.",
          technologies: ["150W LED Luminaires", "Dialux Photometry", "Remote Management System"],
          image: "/images/imagen_portada.avif"
        },
        {
          title: "Photovoltaic Plant - Agro-industrial Complex, Sinaloa",
          category: "SetecSOLAR",
          description: "Design and installation of a 2MW photovoltaic system for self-consumption, covering 95% of the plant's energy demand.",
          technologies: ["Monocrystalline Solar Panels", "Central Inverters", "Fixed Mounting Structure"],
          image: "/images/imagen_portada.avif"
        },
        {
          title: "Electrical & CCTV Installation - Corporate Tower, Monterrey",
          category: "SetecHOME",
          description: "Complete electrical work and security system with over 100 cameras for a new 25-story office building.",
          technologies: ["Distribution Boards", "Structured Cabling", "4K IP Cameras"],
          image: "/images/imagen_portada.avif"
        },
        {
          title: "Industrial Lighting - Assembly Warehouse, Queretaro",
          category: "SetecSOLAR",
          description: "Energy efficiency project with High Bay LED luminaires, improving lighting levels and reducing consumption by 80%.",
          technologies: ["200W High Bay LED", "Motion Sensors", "DALI Control"],
          image: "/images/imagen_portada.avif"
        },
        {
          title: "Autonomous Solar Luminaires - Federal Highway",
          category: "SetecLED",
          description: "Installation of 500 solar luminaires for a highway section without access to the power grid, ensuring visibility and safety.",
          technologies: ["All-in-One Solar Luminaire", "Lithium Battery", "High-Efficiency Solar Panel"],
          image: "/images/imagen_portada.avif"
        },
        {
          title: "Electrical Network - Residential Development",
          category: "SetecHOME",
          description: "Design and construction of the medium and low voltage network for a 300-home development, complying with CFE regulations.",
          technologies: ["Pad-Mounted Transformers", "Underground Network", "Concrete Poles"],
          image: "/images/imagen_portada.avif"
        }
      ]
    },
    impact: {
      title: "Transformative Results",
      subtitle: "Our commitment to efficiency translates into measurable and significant benefits for our clients and the planet.",
      metrics: {
        energy: { label: "Energy Savings", unit: "%" },
        maintenance: { label: "Maintenance Reduction", unit: "%" },
        investment: { label: "Return on Investment", unit: "months" },
        co2: { label: "CO2 Reduction per Luminaire", unit: "kg" },
      },
    },
    certifications: {
      title: "Guaranteed Quality and Trust",
    },
    testimonials: {
      title: "What Our Clients Say",
      quotes: [
        {
          quote: "Implementing the new LED lighting system has reduced our operating costs by 80%. Setec's professionalism was outstanding.",
          author: "Plant Manager",
          company: "Manufacturing Industry, Monterrey",
        },
        {
          quote: "The photovoltaic project exceeded our expectations. We now generate 95% of our own energy. A smart and sustainable investment.",
          author: "CEO",
          company: "Agro-industrial Complex, Sinaloa",
        },
        {
          quote: "They modernized the entire municipal public lighting in record time. The quality of light and the savings are remarkable.",
          author: "Mayor",
          company: "Municipal Government, Jalisco",
        },
      ],
    },
    contact: {
      title: "Contact Us",
      subtitle: "Ready to start your energy efficiency project? Our team is here to help you.",
      form: {
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        submit: "Send Message",
        success: "Thank you! Your message has been sent.",
      },
      info: {
        title: "Our Office",
        address: "Fray Alfonso #19, Col. El Refugio, Lagos de Moreno Jalisco, C.P. 47470",
        phone: "+52 (474) 742 1030",
        phone2: "+52 (474) 742 1031",
        email: "informes@setecled.com",
      },
    },
    footer: {
      description: "Leading the energy transformation with sustainable solutions.",
      rights: "All rights reserved.",
    },
  },
};

export default contentData;
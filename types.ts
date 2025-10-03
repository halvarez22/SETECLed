export type Language = 'en' | 'es';

export interface Content {
  nav: {
    services: string;
    projects: string;
    impact: string;
    about: string;
    contact: string;
    language: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    paragraph1: string;
    paragraph2: string;
    valuesTitle: string;
    values: {
      title: string;
      description: string;
    }[];
  };
  services: {
    title: string;
    divisions: {
      led: {
        title: string;
        description: string;
        items: string[];
      };
      solar: {
        title:string;
        description: string;
        items: string[];
      };
      home: {
        title: string;
        description: string;
        items: string[];
      };
      technical: {
        title: string;
        description: string;
        items: string[];
      };
      energy: {
        title: string;
        description: string;
        items: string[];
      };
    };
  };
  projects: {
    title: string;
    filter: {
      all: string;
      led: string;
      solar: string;
      home: string;
    };
    items: {
      title: string;
      category: 'SetecLED' | 'SetecSOLAR' | 'SetecHOME';
      description: string;
      technologies: string[];
      image: string;
    }[];
  };
  impact: {
    title: string;
    subtitle: string;
    metrics: {
      energy: {
        label: string;
        unit: string;
      };
      maintenance: {
        label: string;
        unit: string;
      };
      investment: {
        label: string;
        unit: string;
      };
      co2: {
        label: string;
        unit: string;
      };
    };
  };
  certifications: {
    title: string;
  };
  testimonials: {
    title: string;
    quotes: {
      quote: string;
      author: string;
      company: string;
    }[];
  };
  contact: {
    title: string;
    subtitle: string;
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
      success: string;
    };
    info: {
      title: string;
      address: string;
      phone: string;
    };
  };
  footer: {
    description: string;
    rights: string;
  };
}
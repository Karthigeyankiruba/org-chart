export interface Education {
  degree: string;
  institution: string;
  year: string;
}

export interface Experience {
  company: string;
  position: string;
  duration: string;
}

export interface SocialMedia {
  linkedin?: string;
  twitter?: string;
  github?: string;
  instagram?: string;
  behance?: string;
  codepen?: string;
}

export interface Employee {
  id: string;
  name: string;
  designation: string;
  team: string;
  managerId: string | null; // null for top-level employees
  avatar: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  startDate: string;
  skills: string[];
  education: Education[];
  experience: Experience[];
  achievements: string[];
  socialMedia: SocialMedia;
}

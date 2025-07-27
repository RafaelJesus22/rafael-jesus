export interface Messages {
  navBar: {
    downloadButton: string;
  };
  Resume: {
    title: string;
    aboutSection: Section;
    skillsSection: Section;
    experienceSection: ExperienceSection;
    educationSection: EducationSection;
  };
}

export interface Section {
  sectionTitle: string;
}

export interface ExperienceSection extends Section {
  experiences: Experience[];
}

export interface Experience {
  title: string;
  company: Company;
  initialDate: string;
  finalDate: string;
  functions: string[];
}

export interface Company {
  name: string;
  location: string;
  linkedin: string;
}

export interface EducationSection extends Section {
  degrees: Degree[];
}

export interface Degree {
  title: string;
  initialDate: string;
  finalDate: string;
  institution: Institution;
}

export interface Institution {
  name: string;
  linkedin: string;
  location: string;
}

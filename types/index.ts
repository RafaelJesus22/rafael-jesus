export interface Company {
  name: string;
  location: string;
  linkedin?: string;
}

export interface Experience {
  title: string;
  company: Company;
  initialDate: string;
  finalDate: string;
  functions: string[];
}

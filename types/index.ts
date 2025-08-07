export interface Company {
  name: string;
  location: string;
  linkedin?: string;
}

export interface Role {
  title: string;
  initialDate: string;
  finalDate: string;
}

export interface Experience {
  title: string;
  company: Company;
  initialDate: string;
  finalDate: string;
  functions: string[];
  roles?: Role[];
}

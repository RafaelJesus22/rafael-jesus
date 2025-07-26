import { Experience } from "../ui/experience";
import { Section, SectionTitle } from "../ui/section";

export function ExperiencesSection() {
  return (
    <Section id="experience">
      <SectionTitle>Experience</SectionTitle>

      <Experience
        title="Senior Front-end engineer"
        company="JazzTech"
        location="São Paulo, Brazil"
        initialDate="Feb 2025"
        finalDate="Present"
        functions={[
          "Lead development and maintenance of core React Native mobile apps (iOS & Android) and web platforms using Angular (13+) and Next.js",
          "Support the tech lead in app store deployments (Apple App Store and Google Play) and feature delivery via CodePush (App Center) and Expo Updates (EAS)",
          "Actively participate in product meetings, offering technical insights and feasibility analysis",
        ]}
      />

      <Experience
        title="Mid Front-end engineer"
        company="JazzTech"
        location="São Paulo, Brazil"
        initialDate="May 2024"
        finalDate="Feb 2025"
        functions={[
          "Maintained and developed mobile/web applications with increasing ownership",
          "Built major features for the new credit card and investments modules",
          "Designed and developed key parts of a consignment loan app (React Native)",
          "Collaborated on a white-label web solution for FGTS anticipation (Next.js)",
          "Contributed to maintaining a health insurance web platform (Angular)",
        ]}
      />

      <Experience
        title="Junior Front-end engineer"
        company="JazzTech"
        location="São Paulo, Brazil"
        initialDate="Nov 2021"
        finalDate="May 2024"
        functions={[
          "Maintained the company's flagship React Native application",
          "Delivered pixel-perfect features based on Figma prototypes",
          "Integrated facial recognition and liveness detection SDK to prevent fraud",
          "Contributed to a complete visual rebranding of the mobile app",
          "Built a limit management module (daily, monthly, daytime, and nighttime limits)",
        ]}
      />

      <Experience
        title="Junior Fullstack engineer"
        company="RW3 Tecnologia"
        location="Barueri, Brazil"
        initialDate="Apr 2021"
        finalDate="Nov 2021"
        functions={[
          "Developed and maintained mobile apps (React Native) and backend services (Node.js)",
          "Built the active debt negotiation module and integrated with state APIs",
          "Participated in developing services for traffic, vehicle, document, fine, and debt consultations",
        ]}
      />

      <Experience
        title="Software Engineering Intern"
        company="Baymetris Tecnologia"
        location="Barueri, Brazil"
        initialDate="Dez 2019"
        finalDate="Dec 2020"
        functions={[
          "Built business apps using the Microsoft Power Platform",
          "Developed solutions with Power Apps and Power Automate",
        ]}
      />
    </Section>
  );
}

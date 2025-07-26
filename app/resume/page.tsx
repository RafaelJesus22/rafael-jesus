import { Avatar } from "@heroui/avatar";
import { Metadata } from "next";
import { NavBar } from "./components/ui/nav-bar";
import { ContactLink } from "./components/ui/contact-link";
import { Container } from "@/components/screen-container";
import { AboutSection } from "./components/about";
import { SkillsSection } from "./components/skills";
import { ExperiencesSection } from "./components/experiences";
import { EducationSection } from "./components/education";

export const metadata: Metadata = {
  title: "Rafael Moura | Resume",
};

export default function ResumePage() {
  return (
    <Container>
      <NavBar />

      <div className="flex flex-col sm:flex-row gap-4 items-center my-6">
        <Avatar
          src="https://github.com/RafaelJesus22.png"
          className="h-32 w-32 sm:h-40 sm:w-40"
          isBordered
          radius="md"
          color="secondary"
        />
        <div className="flex flex-col items-center sm:items-start">
          <h1 className="text-3xl sm:text-4xl font-black uppercase">
            Rafael Moura
          </h1>
          <h3 className="font-extrabold mb-2 sm:text-2xl uppercase">
            Front-end & Mobile Developer
          </h3>
          <div className="flex gap-4 justify-center sm:justify-start">
            <ContactLink
              href="https://www.linkedin.com/in/rafaeljesuscm/"
              imgSrc="/linkedin.svg"
              imgAlt="Linkedin"
              width={15}
            >
              LinkedIn
            </ContactLink>
            <ContactLink
              href="mailto:im.13.45.rafael@gmail.com"
              imgSrc="/email.svg"
              imgAlt="E-mail"
              width={18}
            >
              E-mail
            </ContactLink>
            <ContactLink
              href="https://github.com/RafaelJesus22"
              imgSrc="/github.svg"
              imgAlt="Github"
              width={22}
            >
              Github
            </ContactLink>
          </div>
        </div>

        <div></div>
      </div>

      <AboutSection />
      <SkillsSection />
      <ExperiencesSection />
      <EducationSection />
    </Container>
  );
}

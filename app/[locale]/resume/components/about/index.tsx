"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Section, SectionTitle } from "../ui/section";
import { Strong } from "../ui/strong";

export function AboutSection() {
  const t = useTranslations("Resume");
  const pathName = usePathname();

  return (
    <Section id="about">
      <SectionTitle>{t("aboutSection.sectionTitle")}</SectionTitle>

      <div className="px-2">
        {pathName === "/en/resume" ? <EnglishAbout /> : <PortugueseAbout />}
      </div>
    </Section>
  );
}

function PortugueseAbout() {
  return (
    <div className="flex-col gap-2">
      <p>
        Sou <Strong>desenvolvedor front-end sênior</Strong> com mais de{" "}
        <Strong>5 anos de experiência</Strong>
        {" na "}
        <Strong>criação</Strong> e <Strong>manutenção</Strong> de{" "}
        <Strong>aplicações mobile</Strong> com <Strong>React Native</Strong> e
        web com
        <Strong>Next.js</Strong>, <Strong>React</Strong> e{" "}
        <Strong>Angular</Strong>, atuando em todo o ecossistema
        <Strong>JavaScript/TypeScript</Strong> — sempre com foco em{" "}
        <Strong>performance</Strong> e <Strong>experiência do usuário</Strong>.
      </p>
      <p>
        Tenho atuado em <Strong>ambientes ágeis</Strong> (<Strong>Scrum</Strong>{" "}
        e <Strong>Kanban</Strong>) como parte de{" "}
        <Strong>times multidisciplinares</Strong>, desenvolvendo soluções para
        os setores <Strong>bancário</Strong>,<Strong>governamental</Strong> e{" "}
        <Strong>corporativo</Strong>.
      </p>
      <p>
        Possuo experiência em <Strong>publicação de apps</Strong> nas lojas (
        <Strong>Google Play</Strong> e<Strong>App Store</Strong>
        ), <Strong>integração com APIs REST/GraphQL</Strong> e{" "}
        <Strong>gerenciamento de estado</Strong>(<Strong>Redux</Strong>,{" "}
        <Strong>Zustand</Strong>, <Strong>React Context</Strong>
        ). Tenho <Strong>inglês avançado</Strong> e facilidade para colaborar
        com <Strong>equipes internacionais</Strong>.
      </p>
      <p>
        Com vivência em empresas de produto, desenvolvi fortes habilidades em
        <Strong>resolução de problemas</Strong>,{" "}
        <Strong>trabalho em equipe</Strong> e <Strong>inovação</Strong>,
        adquiridas pela atuação em diferentes indústrias e contextos de
        negócio."
      </p>
    </div>
  );
}

function EnglishAbout() {
  return (
    <div className="flex flex-col gap-3">
      <p>
        I am a <Strong>Senior Front-End Developer</Strong> with solid experience
        in building and maintaining <Strong>mobile applications</Strong> using{" "}
        <Strong>React Native</Strong>, as well as{" "}
        <Strong>web applications</Strong> using <Strong>Next.js</Strong>,{" "}
        <Strong>React</Strong>, <Strong>Angular</Strong>, and the entire
        <Strong>JavaScript/TypeScript</Strong> ecosystem — always with a strong
        focus on <Strong>user experience</Strong> and{" "}
        <Strong>user experience</Strong>.
      </p>
      <p>
        I have been working in <Strong>agile environments</Strong> for over{" "}
        <Strong>5 years</Strong>, collaborating in{" "}
        <Strong>cross-functional teams</Strong> that follow{" "}
        <Strong>Scrum</Strong> and/or <Strong>Kanban</Strong>
        methodologies. I’ve developed applications in the{" "}
        <Strong>banking</Strong>, <Strong>government services</Strong>, and{" "}
        <Strong>enterprise solutions</Strong> sectors.
      </p>
      <p>
        With a background in <Strong>product-driven companies</Strong>, I bring
        strong
        <Strong>problem-solving skills</Strong>, <Strong>teamwork</Strong>, and
        a mindset for <Strong>innovation</Strong>. I'm also experienced in
        publishing mobile apps to both the <Strong>Apple App Store</Strong> and
        <Strong>Google Play Store</Strong>,{" "}
        <Strong>integrating with APIs</Strong>, and implementing modern{" "}
        <Strong>state management</Strong> solutions such as{" "}
        <Strong>Redux</Strong>, <Strong>Zustand</Strong> and
        <Strong>Context API</Strong>.
      </p>
      <p>
        I have <Strong>advanced English skills</Strong>, which allows me to
        collaborate effectively in <Strong>international</Strong> and{" "}
        <Strong>multicultural teams</Strong>.
      </p>
    </div>
  );
}

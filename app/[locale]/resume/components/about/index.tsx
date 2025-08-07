"use client";

import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import { Section, SectionTitle } from "../ui/section";
import { Strong as S } from "../ui/strong";

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
        Sou <S>desenvolvedor front-end sênior</S> com mais de{" "}
        <S>5 anos de experiência</S> na <S>criação</S> e <S>manutenção</S> de{" "}
        <S>aplicações mobile</S> com <S>React Native</S> e web com{" "}
        <S>Next.js</S>, <S>React</S> e <S>Angular</S>, atuando em todo o
        ecossistema <S>JavaScript/TypeScript</S> — sempre com foco em{" "}
        <S>performance</S> e <S>experiência do usuário</S>.
      </p>
      <p>
        Tenho atuado em <S>ambientes ágeis</S> (<S>Scrum</S> e <S>Kanban</S>)
        como parte de <S>times multidisciplinares</S>, desenvolvendo soluções
        para os setores <S>bancário</S>, <S>governamental</S> e{" "}
        <S>corporativo</S>.
      </p>
      <p>
        Possuo experiência em <S>publicação de apps</S> nas lojas (
        <S>Google Play</S> e <S>App Store</S>
        ), <S>integração com APIs REST/GraphQL</S> e{" "}
        <S>gerenciamento de estado</S> (<S>Redux</S>, <S>Zustand</S>,{" "}
        <S>React Context</S>
        ). Tenho <S>inglês avançado</S> e facilidade para colaborar com{" "}
        <S>equipes internacionais</S>.
      </p>
      <p>
        Com vivência em empresas de produto, desenvolvi fortes habilidades em{" "}
        <S>resolução de problemas</S>, <S>trabalho em equipe</S> e{" "}
        <S>inovação</S>, adquiridas pela atuação em diferentes indústrias e
        contextos de negócio.
      </p>
    </div>
  );
}

function EnglishAbout() {
  return (
    <div className="flex flex-col gap-3">
      <p>
        I am a <S>Senior Front-End Developer</S> with solid experience in
        building and maintaining <S>mobile applications</S> using{" "}
        <S>React Native</S>, as well as <S>web applications</S> using{" "}
        <S>Next.js</S>, <S>React</S>, <S>Angular</S>, and the entire{" "}
        <S>JavaScript/TypeScript</S> ecosystem — always with a s focus on{" "}
        <S>user experience</S> and <S>user experience</S>.
      </p>
      <p>
        I have been working in <S>agile environments</S> for over <S>5 years</S>
        , collaborating in <S>cross-functional teams</S> that follow{" "}
        <S>Scrum</S> and/or <S>Kanban</S> methodologies. I’ve developed
        applications in the <S>banking</S>, <S>government services</S>, and{" "}
        <S>enterprise solutions</S> sectors.
      </p>
      <p>
        With a background in <S>product-driven companies</S>, I bring s{" "}
        <S>problem-solving skills</S>,. I'm also experienced in publishing
        mobile apps to both the <S>Apple App Store</S> and{" "}
        <S>Google Play Store</S>, <S>integrating with APIs</S>, and implementing
        modern <S>state management</S> solutions such as <S>Redux</S>,{" "}
        <S>Zustand</S> and <S>Context API</S>.
      </p>
      <p>
        I have <S>advanced English skills</S>, which allows me to collaborate
        effectively in <S>international</S> and <S>multicultural teams</S>.
      </p>
    </div>
  );
}

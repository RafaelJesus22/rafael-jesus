import { Avatar } from "@heroui/avatar";
import { Metadata } from "next";
import { ReactNode } from "react";
import { Card, CardBody } from "@heroui/card";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";

export const metadata: Metadata = {
  title: "Rafael Moura | Resume",
};

export default function ResumePage() {
  return (
    <Container>
      <div className="flex gap-4 items-center mb-6">
        <Avatar
          src="https://github.com/RafaelJesus22.png"
          className="h-24 w-24"
          isBordered
          color="secondary"
        />
        <div>
          <h1 className="text-3xl font-black uppercase">Rafael Moura</h1>
          <h3 className="font-semibold mb-2">Front-end and Mobile Developer</h3>
          <div className="flex gap-1">
            <ContactLink
              href="https://www.linkedin.com/in/rafaeljesuscm/"
              imgSrc="/linkedin.svg"
              imgAlt="Linkedin"
              width={15}
            >
              LinkedIn
            </ContactLink>
            <Divider orientation="vertical" />
            <ContactLink
              href="mailto:im.13.45.rafael@gmail.com"
              imgSrc="/email.svg"
              imgAlt="E-mail"
              width={18}
            >
              E-mail
            </ContactLink>
            <Divider orientation="vertical" />
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
      </div>

      <Section>
        <SectionTitle>About me</SectionTitle>

        <div className="px-2 flex flex-col gap-2">
          <p>
            I am a software developer with over 5 years of professional
            experience, specializing in mobile and web development. Focused on
            creating beautiful, user-friendly and high performant applications.
          </p>
          <p>
            Throughout my career, I've worked on large-scale, public-facing
            projects, honing my mobile and frontend development skills. I'm
            driven by creating solutions that optimize users' lives, always
            focusing on quality, organization, and technical excellence.
          </p>
          <p>
            I currently work as a Senior Frontend Developer at Jazz Tech, where
            I contribute to the development of high-performance interfaces and
            user experiences using technologies such as React Native, Next.js,
            and Angular, as well as agile practices based on Scrum.
          </p>
        </div>
      </Section>

      <Section>
        <SectionTitle>Skills</SectionTitle>
        <ul className="flex gap-2 flex-wrap justify-center">
          <SkillChip imgSrc="/react.svg" imgAlt="React.js">
            React Native
          </SkillChip>
          <SkillChip imgSrc="/react.svg" imgAlt="React.js">
            React.js
          </SkillChip>
          <SkillChip imgSrc="/nextjs.svg" imgAlt="Next.js">
            Next.js
          </SkillChip>
          <SkillChip imgSrc="/js.svg" imgAlt="JavaScript">
            JavaScript
          </SkillChip>
          <SkillChip imgSrc="/ts.svg" imgAlt="TypeScript">
            TypeScript
          </SkillChip>
          <SkillChip imgSrc="/angular.svg" imgAlt="Angular">
            Angular
          </SkillChip>
          <SkillChip imgSrc="/redux.svg" imgAlt="Redux">
            Redux
          </SkillChip>
        </ul>
      </Section>

      <Section>
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

      <Section>
        <SectionTitle>Education</SectionTitle>
        <div>
          <h4 className="font-bold text-xl mb-1">
            Associate&apos;s Degree in Systems Analysis and Development
          </h4>
          <p className="italic">
            Centro Paula Souza - FATEC, Santana de Parnaiba, Brazil | Aug 2019 -
            Jul 2022
          </p>
        </div>
      </Section>
    </Container>
  );
}

function Container({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="px-4 max-w-[720px] m-auto mt-4">{children}</div>;
}

function Section({ children }: Readonly<{ children: ReactNode }>) {
  return <section className="my-4 rounded bg-[#0cdf790]">{children}</section>;
}

function SectionTitle({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <Card radius="sm" isBlurred={false} className="mb-2">
      <CardBody>
        <h1 className="font-bold uppercase">{children}</h1>
      </CardBody>
    </Card>
  );
}

function Experience({
  company,
  finalDate,
  functions,
  initialDate,
  location,
  title,
}: Readonly<{
  title: string;
  company: string;
  location: string;
  initialDate: string;
  finalDate: string;
  functions: string[];
}>) {
  return (
    <div className="mb-4">
      <h4 className="font-bold text-xl mb-1">{title}</h4>
      <p className="italic">
        {company} - {location} | {initialDate} - {finalDate}
      </p>
      <ul className="list-disc ml-4">
        {functions.map((fun) => (
          <li key={fun.slice(0, 10)}>{fun}</li>
        ))}
      </ul>
    </div>
  );
}

function ContactLink({
  children,
  href,
  imgAlt,
  imgSrc,
  width,
}: Readonly<{
  href: string;
  imgSrc: string;
  imgAlt: string;
  children: ReactNode;
  width: number;
}>) {
  return (
    <Link href={href} target="_blanck" color="foreground">
      <Chip
        classNames={{
          base: "bg-linear-to-br from-purple-600  to-cyan-500 border-none border-white/50 shadow-indigo-500/30",
          content: "drop-shadow-xs shadow-black text-white text-xs",
        }}
        variant="shadow"
        radius="sm"
        color="secondary"
        size="sm"
        startContent={
          <Image src={imgSrc} alt={imgAlt} width={width * 0.6} radius="none" />
        }
      >
        {children}
      </Chip>
    </Link>
  );
}

function SkillChip({
  children,
  imgSrc,
  imgAlt,
}: Readonly<{ children: ReactNode; imgSrc: string; imgAlt: string }>) {
  return (
    <li>
      <Chip
        size="lg"
        radius="sm"
        startContent={
          imgSrc && <Image src={imgSrc} alt={imgAlt} width={18} radius="none" />
        }
        classNames={{
          base: "bg-linear-to-br from-purple-600  to-cyan-500 border-none border-white/50 shadow-indigo-500/30",
          content:
            "drop-shadow-xs shadow-black text-white text-xs font-semibold",
        }}
      >
        {children}
      </Chip>
    </li>
  );
}

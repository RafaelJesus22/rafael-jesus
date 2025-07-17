import { Metadata } from "next";
import { ReactNode } from "react";

export const metadata: Metadata = {
  title: "Rafael Moura | Resume",
};

export default function ResumePage() {
  return (
    <Container>
      <h1>Rafael Moura</h1>
      <h3>Front-end and Mobile Developer</h3>

      <section>
        <h3>Contact</h3>
        <div>
          <p>
            <span>LinkedIn</span>:{" "}
            <a
              href="https://www.linkedin.com/in/rafaeljesuscm/"
              target="_blank"
            >
              /in/rafaeljesuscm/
            </a>
          </p>
          <p>
            <span>E-mail</span>:{" "}
            <a href="mailto:im.13.45.rafael@gmail.com" target="_blank">
              Gmail - Rafael Moura
            </a>
          </p>
          <p>
            <span>Github</span>:{" "}
            <a href="https://github.com/RafaelJesus22" target="_blank">
              RafaelJesus22
            </a>
          </p>
        </div>
      </section>

      <section>
        <h3>Skills</h3>
        <ul>
          <li>React Native</li>
          <li>React.js</li>
          <li>Next.js</li>
          <li>JavaScript</li>
          <li>TypeScript</li>
          <li>Angular</li>
          <li>Redux</li>
        </ul>
      </section>

      <section>
        <h3>Experience</h3>

        <div>
          <h4>Senior Front-end engineer</h4>
          <p>JazzTech - São Paulo, Brazil | Feb 2025 - Present</p>
          <ul>
            <li>
              Lead development and maintenance of core React Native mobile apps
              (iOS & Android) and web platforms using Angular (13+) and Next.js
            </li>
            <li>
              Support the tech lead in app store deployments (Apple App Store
              and Google Play) and feature delivery via CodePush (App Center)
              and Expo Updates (EAS)
            </li>
            <li>
              Actively participate in product meetings, offering technical
              insights and feasibility analysis
            </li>
          </ul>
        </div>

        <div>
          <h4>Mid Front-end engineer</h4>
          <p>JazzTech - São Paulo, Brazil | May 2024 - Feb 2025</p>
          <ul>
            <li>
              Maintained and developed mobile/web applications with increasing
              ownership
            </li>
            <li>
              Built major features for the new credit card and investments
              modules
            </li>
            <li>
              Designed and developed key parts of a consignment loan app (React
              Native)
            </li>
            <li>
              Collaborated on a white-label web solution for FGTS anticipation
              (Next.js)
            </li>
            <li>
              Contributed to maintaining a health insurance web platform
              (Angular)
            </li>
          </ul>
        </div>

        <div>
          <h4>Junior Front-end engineer</h4>
          <p>JazzTech - São Paulo, Brazil | Nov 2021 - May 2024</p>
          <ul>
            <li>
              Maintained the company&apos;s flagship React Native application
            </li>
            <li>Delivered pixel-perfect features based on Figma prototypes</li>
            <li>
              Integrated facial recognition and liveness detection SDK to
              prevent fraud
            </li>
            <li>
              Contributed to a complete visual rebranding of the mobile app
            </li>
            <li>
              Built a limit management module (daily, monthly, daytime, and
              nighttime limits)
            </li>
          </ul>
        </div>

        <div>
          <h4>Junior Fullstack engineer</h4>
          <p>RW3 Tecnologia - Barueri, Brazil | Apr 2021 - Nov 2021</p>
          <ul>
            <li>
              Developed and maintained mobile apps (React Native) and backend
              services (Node.js)
            </li>
            <li>
              Built the active debt negotiation module and integrated with state
              APIs
            </li>
            <li>
              Participated in developing services for traffic, vehicle,
              document, fine, and debt consultations
            </li>
          </ul>
        </div>

        <div>
          <h4>Software Engineering Intern</h4>
          <p>Baymetris Tecnologia - Barueri, Brazil | Dez 2019 - Dec 2020</p>
          <ul>
            <li>Built business apps using the Microsoft Power Platform</li>
            <li>Developed solutions with Power Apps and Power Automate</li>
          </ul>
        </div>
      </section>

      <section>
        <h3>Education</h3>
        <div>
          <h4>Associate&apos;s Degree in Systems Analysis and Development</h4>
          <p>
            Centro Paula Souza - FATEC, Santana de Parnaiba, Brazil | Aug 2019 -
            Jul 2022
          </p>
        </div>
      </section>
    </Container>
  );
}

function Container({ children }: Readonly<{ children: ReactNode }>) {
  return <div className="p-8">{children}</div>;
}

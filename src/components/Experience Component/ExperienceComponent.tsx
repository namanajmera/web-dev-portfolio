import React, { useState } from "react";
import IdBadgeComponent from "../IdBadgeComponent/IdBadgeComponent";
import styles from "./ExperienceComponent.module.scss";
import {
  magicEdtech,
  oneSilverbullet,
  reactBox,
  vue,
  nextjs,
} from "../../assets/images";
import CardsComponent from "../CardsComponent/CardsComponent";
import DetailsModalComponent from "./DetailsModalComponent/DetailsModalComponent";

type Props = {};

const ExperienceComponent = (props: Props) => {
  const [expcardsDetails] = useState([
    {
      title: "Magic EdTech",
      imgUrl: magicEdtech,
      techUsed: [reactBox, vue, nextjs],
      exp: "2 yrs 9 mos",
      location: "Noida, Uttar Pradesh, India",
      expsDetails: [
        {
          title: "Consultant",
          type: "Full-time",
          period: "Apr 2023 - Dec 2023 · 9 mos",
          startMonth: "Apr",
          startYear: 2023,
          endMonth: "Dec",
          endYear: 2023,
          details: "Hybrid",
          skills: [
            "Next Js",
            "Python (Programming Language)",
            "Web Projects",
            "React.js",
            "Node Js",
          ],
        },
        {
          title: "Senior Associate",
          type: "Full-time",
          period: "Apr 2022 - Apr 2023 · 1 yr 1 mo",
          startMonth: "Apr",
          startYear: 2023,
          endMonth: "Apr",
          endYear: 2023,
          details:
            "Working as a Front End Developer by using Vue Js Developer and React Js Developer.",
          skills: [
            "JavaScript",
            "TypeScript",
            "Vue.js",
            "Java",
            "React.js",
            "Software Development",
            "Gitlab",
          ],
        },
        {
          title: "Associate Software Engineer",
          type: "Full-time",
          period: "Aug 2021 - Apr 2022 · 9 mos",
          startMonth: "Aug",
          startYear: 2021,
          endMonth: "Apr",
          endYear: 2022,
          details: "",
          responsibilities: [
            "Promoted to Associate Software Engineer after successful training.",
            "Experience working on Bellxcel Project in which I have done coding and problem solving to achieve set goals in a given time frame.",
            "Experience in working on stories with solid VUEJS and Typescript skills.",
            "Good skills in debugging.",
            "Developed new features with a minimum number of bugs.",
            "Suggest innovative approaches for solving complex issues.",
            "Experience in making common components for complex features.",
          ],
          skills: [
            "JavaScript",
            "TypeScript",
            "Vue.js",
            "Jest",
            "Vuex",
            "Software Development",
            "LESS (Stylesheet Language)",
          ],
        },
        {
          title: "Software Trainee",
          type: "Apprenticeship",
          period: "Apr 2021 - Aug 2021 · 5 mos",
          startMonth: "Apr",
          startYear: 2021,
          endMonth: "Aug",
          endYear: 2021,
          details: "",
          responsibilities: [
            "Understanding project requirements and completing all duties assigned by the Supervisor.",
            "Worked on Basic concepts of Web Development Techs and Java.",
            "Participating in meetings and attending workshops and other training initiatives.",
            "Worked on Unit Test Cases.",
          ],
          skills: [],
        },
      ],
    },
    {
      title: "1Silverbullet.tech",
      imgUrl: oneSilverbullet,
      techUsed: [reactBox, vue],
      exp: "Dec 2023 - Present",
      location: "Pune, Maharashtra, India",
      expsDetails: [
        {
          title: "Software Development Engineer - I",
          type: "Full-time",
          period: "Dec 2023 - Present 6 months",
          startMonth: "Dec",
          startYear: 2023,
          endMonth: "Present",
          endYear: "",
          details: "Hybrid",
          skills: [
            "Next Js",
            "Python (Programming Language)",
            "React.js",
            "Node Js",
          ],
        },
      ],
    },
  ]);

  return (
    <div className={styles["exp-container"]}>
      <div className={styles["top-container"]}>
        <IdBadgeComponent />
      </div>
      <CardsComponent cardsDetails={expcardsDetails}>
        <DetailsModalComponent />
      </CardsComponent>
    </div>
  );
};

export default ExperienceComponent;

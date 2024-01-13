import React from "react";
import { Container, Row, Col, Text, Button, Spacer } from "@nextui-org/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { experiences } from "../constants";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#111615",
        color: "#fff"
      }}
      contentArrowStyle={{ borderRight: "7px solid  #608fa1" }}
    //   width: 39px;
    //   height: 38px;
    //   left: 51%;
    //   margin-left: -30px;
      iconStyle={{ background: experience.iconBg, width: "39px", height: "38px", left: "51%"}}
      icon={
        <div className="flex justify-center items-center w-full h-full">
        </div>
      }
    >
      <div>
      <Text
        h3
        size={30}
        css={{
          textGradient: "45deg, $blue600 -20%, $pink600 50%",
        }}
        weight="bold"
      >{experience.title}</Text>
      <Text
        h2
        size={30}
        css={{
          textGradient: "45deg, $yellow600 -20%, $red600 100%",
        }}
        weight="bold"
      >
          {experience.company_name}
        </Text>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
            style={{textAlign:"left"}}
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
    <Spacer y={2}/>
      <motion.div variants={textVariant()}>
               <Text size={41} h1 color = "#00b7ff" css ={{marginLeft:"5%", fontFamily: "monospace"}}>
                Way to get Digital Skill.</Text>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default Experience;

import React from "react";
import { motion } from "framer-motion";

import { textVariant } from "../utils/motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import Card from "./CarouselComponents/Card";
import Carousel from "./CarouselComponents/Carousel";


const Feedbacks = () => {
  let cards = [
    {
      key: 1,
      content: (
        <Card imagen="https://raw.githubusercontent.com/NathanKlump/images/main/developer-portfolio-v2/letters%20of%20rec/Nameeta-Rec-1.png" />
      )
    },
    {
      key: 2,
      content: (
        <Card imagen="https://raw.githubusercontent.com/NathanKlump/images/main/developer-portfolio-v2/letters%20of%20rec/Joel-Rec-1.png" />
      )
    },
    {
      key: 3,
      content: (
        <Card imagen="https://raw.githubusercontent.com/NathanKlump/images/main/developer-portfolio-v2/letters%20of%20rec/Chris-Rec-1.png" />
      )
    },
    {
      key: 4,
      content: (
        <Card imagen="https://raw.githubusercontent.com/NathanKlump/images/main/developer-portfolio-v2/letters%20of%20rec/Dave-Rec-1.png" />
      )
    },
  ];
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          What my employers think
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Recommendations
        </h2>
      </motion.div>
      <div className="w-2/3 mx-auto">
      <Carousel
        cards={cards}
        height="500px"
        width="50%"
        margin="0 auto"
        offset={2}
        showArrows={false}
      />
      </div>
    </>
  );
};

export default SectionWrapper(Feedbacks, "feedback");

import React, { useEffect, useState } from "react";
import styles from "./OurStory.module.scss";
import { useSelector } from "react-redux";
import strings from "../../../localization/strings";
import tinder from "../../../images/Tinder5.png";
import vasaparken from "../../../images/vasaparken.jpg";
import mariestad from "../../../images/mariestad.jpeg";
import danderyds from "../../../images/danderyd.jpeg";
import lissabon from "../../../images/lissabon.jpg";
import hornstull from "../../../images/hornstull.jpg";
import akersberga from "../../../images/akersberga.jpg";
import ica from "../../../images/ica.jpg";
import bebis from "../../../images/bebis.jpg";
import mallis from "../../../images/mallis.jpg";
import { BrowserView, MobileView, isMobile } from "react-device-detect";
import StoryCard from "./StoryCard/StoryCard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "../../../common/SectionHeader/SectionHeader";
const contentful = require("contentful");

const client = contentful.createClient({
  space: "0vnrdhavlmrm",
  accessToken: "_oVxGH7dZ9rdh0b_YNziUCwC26cB7CyY3CoK1oXE4Dg"
});

const sortImages = (a, b) => {
  const aOrder = a.fields.order;
  const bOrder = b.fields.order;
  if (aOrder < bOrder) {
    return -1;
  }
  if (aOrder > bOrder) {
    return 1;
  }
  return 0;
};


const storyImages = [
  "http://s3.amazonaws.com/pp2030-images/Tinder5.jpg",
  vasaparken,
  danderyds,
  lissabon,
  mariestad,
  ica,
  hornstull,
  bebis,
  mallis,
  akersberga,
];

const MAX_LEFT = 40;
const MIN_LEFT = -3000;

const OurStory = ({ pageRef }) => {
  const [left, setLeft] = useState(isMobile ? 0 : 40);
  const [selectedCardId, setSelectedCardId] = useState(0);
  const [images, setImages] = useState([]);
  const language = useSelector((state) => state.language);
  const { ourStory } = strings[language];

  useEffect(() => {
    client
        .getEntries()
        .then(({items}) => {
          const _images = items.sort(sortImages).map(({fields}) => fields.image.fields);
          setImages(_images);
        })
        .catch(err => console.log(err));
  }, []);


  const selectedCard = ourStory?.story?.[selectedCardId];

  const scrollLeft = () => {
    setLeft((oldLeft) => oldLeft + 340);
    if (selectedCardId > 0) {
      setSelectedCardId((oldCard) => oldCard - 1);
    }
  };

  const scrollRight = () => {
    setLeft((oldLeft) => oldLeft - 340);
    if (selectedCardId < ourStory.story.length - 1) {
      setSelectedCardId((oldCard) => oldCard + 1);
    }
  };

  return (
    <div className={styles.container}>
      <SectionHeader pageRef={pageRef} title={ourStory.header} />
      <MobileView>
        <div>
          {ourStory.story.map((story, i) => (
            <div className={styles.mobileCard} key={i}>
              <StoryCard {...story} image={images[i]} isSelected />
              <div className={styles.text}>
                <span>{story.text}</span>
              </div>
            </div>
          ))}
        </div>
      </MobileView>
      <div className={styles.stripe}>
        <BrowserView>
          <button
            className={styles.leftButton}
            onClick={scrollLeft}
            disabled={left >= MAX_LEFT}
          >
            <FontAwesomeIcon icon={faChevronLeft} className={styles.icon} />
          </button>
          <div className={styles.content} style={{ left }}>
            {ourStory.story.map((story, i) => (
              <StoryCard
                {...story}
                isSelected={selectedCardId === i}
                image={images[i]}
                key={i}
              />
            ))}
          </div>
          <button
            className={styles.rightButton}
            onClick={scrollRight}
            disabled={left <= MIN_LEFT}
          >
            <FontAwesomeIcon icon={faChevronRight} className={styles.icon} />
          </button>
        </BrowserView>
      </div>
      <BrowserView>
        <div className={styles.text}>
          <span>{selectedCard.text}</span>
        </div>
      </BrowserView>
    </div>
  );
};

export default OurStory;

import React, { useState, useRef, useEffect } from "react";

import HeadBand from "../../component/HeadBand/HeadBand";
import Progress from "../../component/UI/Progress/Progress";
import FooterBand from "../../component/Footer/FooterBand/FooterBand";
import Flex from "../../component/Flex/Flex";

const Skills = (props) => {
  const divRef = useRef(null);
  const footerRef = useRef(null);

  const headBandState = useState({
    content:
      "Let me show you what programming language and other related skills I have",
    title: "Skills",
    src:
      "https://images.unsplash.com/photo-1510915228340-29c85a43dcfe?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80",
  })[0];

  const skillColState = useState([
    {
      id: "colS_3",
      heading: "Code Myself",
      content: [
        'More than skills, I have always coded manullay. I have never done something like "paste and copy". These coding and testing experiences make me strong and confident when it comes to learning and applying a new skill.',
        "Trial and Failure is my learning style. Rather than simply referring to other`s codes, I take a time to find a solution.",
      ],
      // need to be changed
      isButton: true,
      url: "works",
      btnText: "Go To Projects",
    },
    {
      id: "colS_4",
      imageSrc:
        "https://c0.wallpaperflare.com/preview/745/709/180/analysis-business-computer-connection.jpg",
    },
  ])[0];

  const [showState, setShowState] = useState(false);

  useEffect(() => {
    const handleScrollTwo = (e) => {
      const topPos = divRef.current.getBoundingClientRect().top;

      if (topPos - window.innerHeight < -180) {
        setShowState(true);
      }
      if (topPos - window.innerHeight >= -170) {
        setShowState(false);
      }
    };

    window.addEventListener("scroll", handleScrollTwo);

    return () => {
      window.removeEventListener("scroll", handleScrollTwo);
    };
  }, []);

  const skillRef = useRef(null);

  return (
    <div ref={skillRef} className={"bg-white"}>
      <HeadBand information={headBandState} />
      <Progress />
      <div ref={divRef}>
        <Flex show={showState} information={skillColState} />
      </div>
      <FooterBand ref={footerRef} />
    </div>
  );
};

export default React.memo(Skills);

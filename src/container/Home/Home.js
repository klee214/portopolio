import React, { useState, useEffect, useRef } from "react";

import Slider from "../../component/Slider/Slider";
import Flex from "../../component/Flex/Flex";
import Aux from "../../Hoc/Auxiliary";
import BrandLayout from "../../component/BandLayout/BrandLayout";
import FooterBand from "../../component/Footer/FooterBand/FooterBand";

import heart from "../../assets/icon/heart.png";
import idea from "../../assets/icon/idea.png";
import think from "../../assets/icon/think.png";
import book from "../../assets/icon/book.png";
import chat from "../../assets/icon/chat.png";
import link from "../../assets/icon/link.png";
import weather from "../../assets/icon/weather.png";
import profile from "../../assets/icon/profile.jpg";

const Home = (props) => {
  const carouselState = useState({
    url: [book, chat, link, weather],
    head: ["BooKim", "WhosApp", "LinkedDev", "How is the weather"],
    text: [
      "Are you ready to ENJOY your life? You can either BOOK or HOST a awesome place!",
      "Chat with your friends and have some fun with them! Thanks to socket, you can communicate with other clients simultaneously!",
      "Build your own profile! Upload your photo, post your profile! You can keep in touch with other developers just like likedIn!!",
      "Is is sunny now? Do you wonder what weather is outside your city or anywhere? Find out weather by City!",
    ],
    visit: [
      "https://bookim.herokuapp.com/",
      "https://kimin-weather-app.herokuapp.com/",
      "https://linkeddevv1.herokuapp.com/",
      "https://kimin-weather-app.herokuapp.com/weather",
    ],
    styles: {
      right: "text-right",
      center: "text-center",
      left: "text-left",
    },
  })[0];

  const stengthColState = useState([
    {
      id: "col_0-1",
      heading: "PASSION",
      content: [
        "What I love, What I desire is learning a new skill, developing my skills and by doing so, contributing to a developer team.",
      ],
      icon: heart,
    },
    {
      id: "col_0-2",
      heading: "COOPERATION",
      content: [
        '"If you want to go fast, go alone. If you want to go far, go together." I believe in togetherness, it does make a huge difference',
      ],
      icon: idea,
    },
    {
      id: "col_0-3",
      heading: "IDEA",
      content: [
        "Everyhing keeps changing and becomes obsolete, so does a computer technology. I and my idea is relatively fresh!",
      ],
      icon: think,
    },
  ])[0];

  const aboutMeBandState = useState({
    content: "Seneca student, computer geek and Kimin Lee. What else about me?",
    title: "About Me",
    src:
      "https://appliedtechnology.humber.ca/assets/images/programs/diploma/computer-programmer/computer-programmer-banner.jpg",
  })[0];

  const aboutColState = useState([
    {
      id: "col_1",
      imageSrc: profile,
      styles: {
        marginTop: "-100px",
      },
      class_name: " rounded-circle d-md-block mx-auto",
    },
    {
      id: "col_2",
      heading: "Who I am",
      content: [
        "I am currently learning Computer Programming Analysis in Seneca college which is 3 years program. " +
          "2 years ago, I did military service back in my country and was discharged as sergeant in 2018. " +
          "It was great experience of learning how people could work for one goal and make an group achievement.",
        "With this idea, I have been trying to apply the skills to projects with group members in school. " +
          "Among many topics that I have learned, I am especially interested in Web Programming and an automated testing. I have mainly learned and practiced MERN/MEAN stack by coding some programs. I have done a couple of my personal projects with these. I am ready to contribute to your organization with my skills",
      ],
      class_name: " display-2 d-md-block d-none",
      //need to be changed
      isButton: true,
      url: "Contact",
      btnText: "Contact Me",
    },
  ])[0];

  const skillBandState = useState({
    content:
      "Database, Web Programming, Object Oriented programming, System Management, Data Communication and even Security. There are a lot of topics that I am familiar with",
    title: "So! What can I do and have?",
    src:
      "https://vividcomm.files.wordpress.com/2019/12/gettyimages-638678352-c-68c1c89.jpg",
  })[0];

  const skillColState = useState([
    {
      id: "col_3",
      heading: "My Skills",
      content: [
        "From planning to testing and deploying, I have always worked in SDLC. No more words! Please look at what I have",
      ],
      // need to be changed
      isButton: true,
      url: "skills",
      btnText: "Learn More",
    },
    {
      id: "col_4",
      imageSrc:
        "https://c0.wallpaperflare.com/preview/745/709/180/analysis-business-computer-connection.jpg",
    },
  ])[0];

  const [showStateOne, setShowStateOne] = useState(false);
  const [showStateTwo, setShowStateTwo] = useState(false);

  const divRef_1 = useRef(null);
  const divRef_2 = useRef(null);

  useEffect(() => {
    const handleScrollTwo_ = (e) => {
      const topPos = divRef_1.current.getBoundingClientRect().top;
      const topPos_2 = divRef_2.current.getBoundingClientRect().top;

      if (topPos - window.innerHeight < -200) {
        setShowStateOne(true);
        console.log("one to true");
      }
      if (topPos - window.innerHeight >= -190) {
        setShowStateOne(false);
      }
      if (topPos_2 - window.innerHeight < -200) {
        setShowStateTwo(true);
        console.log("two to true");
      }
      if (topPos_2 - window.innerHeight >= -190) {
        setShowStateTwo(false);
      }
    };

    window.addEventListener("scroll", handleScrollTwo_);

    return () => {
      window.removeEventListener("scroll", handleScrollTwo_);
    };
  }, []);

  return (
    <Aux>
      <Slider information={carouselState} />
      <div>
        <Flex alwayShow={true} information={stengthColState} />
      </div>
      <BrandLayout information={aboutMeBandState} />
      <div ref={divRef_1}>
        <Flex show={showStateOne} information={aboutColState} />
      </div>
      <BrandLayout information={skillBandState} />
      <div ref={divRef_2}>
        <Flex show={showStateTwo} information={skillColState} />
      </div>
      <FooterBand />
    </Aux>
  );
};

export default Home;

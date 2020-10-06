import React from "react";
import Carousel from "react-bootstrap/Carousel";
import classes from "./Slider.module.css";

const Slider = (props) => {
  let carouselItem = null;
  if (props.information.url) {
    carouselItem = props.information.url.map((item, index) => {
      let textPosition = props.information.styles.right;
      if (index % 3 === 1) {
        textPosition = props.information.styles.left;
      }
      if (index % 3 === 2) {
        textPosition = props.information.styles.cetner;
      }
      const itemStyle = ["d-block w-100"];
      itemStyle.push(classes.Carousel);

      if (props.fullSize) {
        itemStyle.push(classes.FullSize);
      }

      return (
        <Carousel.Item key={item + 1}>
          <img className={itemStyle.join(" ")} src={item} alt="First slide" />
          <div className={classes.Dark_overlay}>
            <Carousel.Caption>
              <div className="container">
                <div className={textPosition + " mb-5"}>
                  <h1 className="display-3">{props.information.head[index]}</h1>
                  <p className="text-light lead d-none d-sm-block">
                    {props.information.text[index]}
                  </p>
                  <a className='btn btn-light btn-lg' href={props.information.visit[index]}>
                    Find More
                  </a>
                </div>
              </div>
            </Carousel.Caption>
          </div>
        </Carousel.Item>
      );
    });
  }

  return <Carousel interval={2000}>{carouselItem}</Carousel>;
};

export default Slider;

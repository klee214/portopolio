import React from "react";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

import Button from "../../UI/Button/Button";
import Aux from "../../../Hoc/Auxiliary";

const FlexItm = (props) => {
  const btnCol = props.info.isButton ? (
    <Link to={"/" + props.info.url}>
      <div className="btn btn-outline-danger btn-lg">{props.info.btnText}</div>
    </Link>
  ) : null;

  let styles = null;
  let class_name = null;

  if (props.info.class_name) {
    class_name = props.info.class_name;
  }

  if (props.info.styles) {
    styles = { ...props.info.styles };
    console.log(styles);
  }

  let pComponent = null;

  if (props.info.content) {
    pComponent = props.info.content.map((p, i) => (
      <p key={props.info.id + i + "p"} className="d-none d-md-block lead">
        {p}
      </p>
    ));
  }

  const colItm = props.info.imageSrc ? (
    <img
      src={props.info.imageSrc}
      style={{ height: "350px", ...styles }}
      alt=""
      className={"img-fluid" + class_name}
    />
  ) : (
    <Aux>
      <img
        src={props.info.icon}
        style={{ width: "100px", ...styles }}
        alt=""
        className={"mb-2" + class_name}
      ></img>
      <h3 className={class_name}>{props.info.heading}</h3>
      {pComponent}
      {btnCol}
    </Aux>
  );

  return (
    <Col md className="mb-4 text-center align-self-center">
      {colItm}
    </Col>
  );
};

export default FlexItm;

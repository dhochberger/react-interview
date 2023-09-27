import {
  faAngleLeft,
  faAngleRight,
  faAnglesLeft,
  faAnglesRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

export class AnglesRight extends Component {
  render() {
    return <FontAwesomeIcon icon={faAnglesRight} />;
  }
}

export class AngleRight extends Component {
  render() {
    return <FontAwesomeIcon icon={faAngleRight} />;
  }
}

export class AnglesLeft extends Component {
  render() {
    return <FontAwesomeIcon icon={faAnglesLeft} />;
  }
}

export class AngleLeft extends Component {
  render() {
    return <FontAwesomeIcon icon={faAngleLeft} />;
  }
}

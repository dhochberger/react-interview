import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

export class ThumbsUp extends Component {
  render() {
    return <FontAwesomeIcon icon={faThumbsUp} />;
  }
}

export class ThumbsDown extends Component {
  render() {
    return <FontAwesomeIcon icon={faThumbsDown} />;
  }
}

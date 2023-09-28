import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Component } from "react";

export class Delete extends Component {
  render() {
    return <FontAwesomeIcon icon={faTrash} style={{ color: "red" }} />;
  }
}

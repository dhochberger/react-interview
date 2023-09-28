import { faThumbsDown, faThumbsUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FunctionComponent } from "react";

type Props = {
  color: string;
};

export const ThumbsUp: FunctionComponent<Props> = ({ color }) => {
  return <FontAwesomeIcon icon={faThumbsUp} style={{ color }} />;
};

export const ThumbsDown: FunctionComponent<Props> = ({ color }) => {
  return <FontAwesomeIcon icon={faThumbsDown} style={{ color }} />;
};

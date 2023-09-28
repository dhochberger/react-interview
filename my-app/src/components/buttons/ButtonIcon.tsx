import { FunctionComponent, ReactNode } from "react";

type Props = {
  title?: string;
  icon: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const ButtonIcon: FunctionComponent<Props> = ({
  title,
  icon,
  disabled,
  onClick,
}) => {
  return (
    <button disabled={disabled} title={title} onClick={onClick}>
      {icon}
    </button>
  );
};

export default ButtonIcon;

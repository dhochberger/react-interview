import { ReactNode } from "react";

type Props<T> = {
  title?: string;
  icon: ReactNode;
  disabled?: boolean;
  onClick: () => void;
};

const ButtonIcon = <T,>({
  title,
  icon,
  disabled,
  onClick,
}: Props<T>): JSX.Element => {
  return (
    <button disabled={disabled} title={title} onClick={onClick}>
      {icon}
    </button>
  );
};

export default ButtonIcon;

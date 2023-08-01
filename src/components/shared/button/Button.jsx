import { Btn } from './Button.styled';

const Button = ({
  id,
  disabled = false,
  type = 'button',
  onClick,
  children,
  white = false,
  light = false
}) => {
  return (
    <Btn
      id={id}
      disabled={disabled}
      white={white}
      light={light}
      type={type}
      onClick={onClick}
    >
      {children}
    </Btn>
  );
};

export default Button;

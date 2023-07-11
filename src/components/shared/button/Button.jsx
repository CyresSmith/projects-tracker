import { Btn } from './Button.styled';

const Button = ({ type = 'button', onClick, children, white = false }) => {
  return (
    <Btn white={white} type={type} onClick={onClick}>
      {children}
    </Btn>
  );
};

export default Button;

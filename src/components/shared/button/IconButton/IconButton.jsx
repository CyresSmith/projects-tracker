import theme from 'theme';
import StyledButton from './IconButton.styled';

const IconButton = ({
  icon: Icon = null,
  iconSize,
  type = 'button',
  disabled = false,
  ariaLabel,
  round,
  onClick,
  backgroundColor = `${theme.colors.secondary.dark}`,
  color = `${theme.colors.white}`,
}) => {
  return (
    <StyledButton
      type={type}
      disabled={disabled}
      aria-labelledby={ariaLabel}
      round={round}
      onClick={onClick}
      backgroundColor={backgroundColor}
      color={color}
    >
      {Icon && <Icon size={iconSize} />}
    </StyledButton>
  );
};

export default IconButton;

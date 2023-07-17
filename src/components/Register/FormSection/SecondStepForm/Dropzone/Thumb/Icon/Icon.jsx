import theme from 'theme';
import { ThumbIcon, ThumbName } from '../Thumb.styled';

const Icon = ({ icon: Icon, name }) => {
  const nameTrim = () => {
    if (name.length > 16) {
      return `${name.substr(0, 12)}...`;
    }
    return name;
  };

  return (
    <ThumbIcon>
      <Icon size={76} color={theme.colors.secondary.dark} height="50%" />
      <ThumbName>{nameTrim()}</ThumbName>
    </ThumbIcon>
  );
};

export default Icon;

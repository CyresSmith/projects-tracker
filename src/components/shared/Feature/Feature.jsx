import { FeatureBox, FeatureText, Icon } from './Feature.styled';

const Feature = ({
  children,
  color = '#fff',
  textColor = '#000',
  icon,
  right = 0,
  bottom = 0,
  transform = 0,
  small = false,
}) => {
  return (
    <FeatureBox
      color={color}
      right={right}
      bottom={bottom}
      transform={transform}
      small={small}
    >
      <Icon src={icon} small={small} />
      <FeatureText textColor={textColor} small={small}>
        {children}
      </FeatureText>
    </FeatureBox>
  );
};

export default Feature;

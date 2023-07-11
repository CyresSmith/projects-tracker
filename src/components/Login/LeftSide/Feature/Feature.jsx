import { FeatureBox, FeatureText, Icon } from './Feature.styled';

const Feature = ({
  children,
  color = '#fff',
  textColor = '#000',
  icon,
  right = 0,
  bottom = 0,
  transform = 0,
}) => {
  return (
    <FeatureBox
      color={color}
      right={right}
      bottom={bottom}
      transform={transform}
    >
      <Icon src={icon} />
      <FeatureText textColor={textColor}>{children}</FeatureText>
    </FeatureBox>
  );
};

export default Feature;

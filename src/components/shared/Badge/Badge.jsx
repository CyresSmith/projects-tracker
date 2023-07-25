import { BadgeBox, BadgeNumber } from './Badge.styled';

const Badge = ({ number = 0 }) => {
  return (
    <BadgeBox>
      <BadgeNumber>{number}</BadgeNumber>
    </BadgeBox>
  );
};

export default Badge;

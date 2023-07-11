import Feature from '../../shared/Feature/Feature';
import { LeftSideBox, LeftSideContainer, Title } from './LeftSide.styled';
import Logo from 'components/shared/Logo/Logo';

import hands from 'assets/images/image 353.png';
import smile from 'assets/images/image 50.png';
import eyes from 'assets/images/image 381.png';
import result from 'assets/images/image 270.png';

const LeftSide = () => {
  return (
    <LeftSideBox>
      <LeftSideContainer>
        <Logo />
        <Title>Here’s the place where you hand-off all routine</Title>

        <Feature
          color="#01C62C"
          textColor="#fff"
          icon={hands}
          right={304}
          bottom={132}
          transform={'3.043deg'}
        >
          Be focused on right things
        </Feature>

        <Feature
          color="#FF9053"
          textColor="#fff"
          icon={smile}
          right={5}
          bottom={108}
          transform={'-9.715deg'}
        >
          Take control
        </Feature>

        <Feature
          color="#E067FE"
          textColor="#fff"
          icon={eyes}
          right={373}
          bottom={19}
          transform={'-12.305deg'}
        >
          Trust
        </Feature>

        <Feature
          color="#67FEE3"
          textColor="#000"
          icon={result}
          right={108}
          bottom={21}
          transform={'8.488deg'}
        >
          Get results
        </Feature>
      </LeftSideContainer>
    </LeftSideBox>
  );
};

export default LeftSide;

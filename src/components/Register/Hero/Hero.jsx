import Logo from 'components/shared/Logo/Logo';
import { HeroSection, Title } from './Hero.styled';
import Container from 'components/shared/Container';
import Button from 'components/shared/button';
import Feature from 'components/shared/Feature';

import hands from 'assets/images/image 353.png';
import smile from 'assets/images/image 50.png';
import eyes from 'assets/images/image 381.png';
import result from 'assets/images/image 270.png';

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Logo />
        <Title>Please fill the form and we almoust set up</Title>
        <Button white>Fill the form</Button>

        <Feature
          color="#67FEE3"
          textColor="#000"
          icon={result}
          right={620}
          bottom={-88}
          transform={'-4.123deg'}
          small
        >
          Get results
        </Feature>

        <Feature
          color="#01C62C"
          textColor="#fff"
          icon={hands}
          right={550}
          bottom={-110}
          transform={'3.043deg'}
          small
        >
          Be focused on right things
        </Feature>

        <Feature
          color="#E067FE"
          textColor="#fff"
          icon={eyes}
          right={-635}
          bottom={5}
          transform={'7.169deg'}
          small
        >
          Trust
        </Feature>

        <Feature
          color="#FF9053"
          textColor="#fff"
          icon={smile}
          right={-575}
          bottom={-18}
          transform={'-9.715deg'}
          small
        >
          Take control
        </Feature>
      </Container>
    </HeroSection>
  );
};

export default Hero;

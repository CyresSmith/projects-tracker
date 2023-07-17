import Logo from 'components/shared/Logo/Logo';
import { Box, HeroSection, Title } from './Hero.styled';
import Container from 'components/shared/Container';
import Button from 'components/shared/button';
import Feature from 'components/shared/Feature';

import hands from 'assets/images/image 353.png';
import smile from 'assets/images/image 50.png';
import eyes from 'assets/images/image 381.png';
import result from 'assets/images/image 270.png';
import { useEffect } from 'react';

const Hero = ({ step, setStep }) => {
  const handleBtnClick = () => {
    setStep(1);
  };

  useEffect(() => {
    const body = document.querySelector('body');

    if (step) {
      body.style.overflow = 'auto';
    }

    if (!step) {
      body.style.overflow = 'hidden';
    }
  }, [step]);

  return (
    <HeroSection step={step}>
      <Container>
        <Logo />

        <Title step={step}>
          {step !== 2
            ? `Please fill the form and we almoust set up`
            : `You filled out 90% of the required information! It remains to fill
            in the key points ...`}
        </Title>

        <Box step={step}>
          <Button onClick={handleBtnClick} white>
            Fill the form
          </Button>

          <Feature
            color="#67FEE3"
            textColor="#000"
            icon={result}
            right={1223}
            bottom={74}
            transform={'-4.123deg'}
            small
          >
            Get results
          </Feature>

          <Feature
            color="#01C62C"
            textColor="#fff"
            icon={hands}
            right={1116}
            bottom={12}
            transform={'3.043deg'}
            small
          >
            Be focused on right things
          </Feature>

          <Feature
            color="#E067FE"
            textColor="#fff"
            icon={eyes}
            right={8}
            bottom={81}
            transform={'7.169deg'}
            small
          >
            Trust
          </Feature>

          <Feature
            color="#FF9053"
            textColor="#fff"
            icon={smile}
            right={68}
            bottom={15}
            transform={'-9.715deg'}
            small
          >
            Take control
          </Feature>
        </Box>
      </Container>
    </HeroSection>
  );
};

export default Hero;

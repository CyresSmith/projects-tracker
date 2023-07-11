import Container from 'components/shared/Container';
import { Section } from './FormSection.styled';
import RegisterForm from './RegisterForm/RegisterForm';

const FormSection = () => {
  return (
    <Section>
      <Container>
        <RegisterForm />
      </Container>
    </Section>
  );
};

export default FormSection;

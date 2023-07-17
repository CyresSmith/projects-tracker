import Container from 'components/shared/Container';
import { HideForm, Section } from './FormSection.styled';
import FirstStepForm from './FirstStepForm';
import SecondStepForm from './SecondStepForm';
import { useState } from 'react';

const FormSection = ({ step, setStep }) => {
  const [firstStepData, setFirstStepData] = useState({});

  return (
    <Section formActive={step}>
      {!step && <HideForm />}
      <Container>
        <>
          {step !== 2 && (
            <FirstStepForm
              setStep={setStep}
              setFirstStepData={setFirstStepData}
            />
          )}
          {step === 2 && (
            <SecondStepForm setStep={setStep} firstStepData={firstStepData} />
          )}
        </>
      </Container>
    </Section>
  );
};

export default FormSection;

import Hero from 'components/Register/Hero';
import FormSection from 'components/Register/FormSection';
import { useState } from 'react';

const Register = () => {
  const [step, setStep] = useState(null);

  return (
    <>
      <Hero step={step} setStep={setStep} />
      <FormSection step={step} setStep={setStep} />
    </>
  );
};

export default Register;

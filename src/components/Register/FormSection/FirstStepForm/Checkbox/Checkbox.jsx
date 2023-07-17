import theme from 'theme';
import { CheckBox, LabelBox, Label } from './Checkbox.styled';

import { ImCheckboxUnchecked, ImCheckboxChecked } from 'react-icons/im';

const Checkbox = ({ name, id, label, arrayHelpers }) => {
  const { services } = arrayHelpers.form.values;
  const checked = services.includes(name);

  const handleClick = () => {
    if (checked) {
      services.forEach((service, index) => {
        if (service === name) {
          arrayHelpers.remove(index);
        }
      });
    } else {
      arrayHelpers.push(name);
    }
  };

  return (
    <LabelBox>
      <CheckBox type="checkbox" name={name} id={id} onClick={handleClick} />
      {checked ? (
        <ImCheckboxChecked
          size={24}
          color={theme.colors.primary.regular}
          onClick={handleClick}
        />
      ) : (
        <ImCheckboxUnchecked
          size={24}
          color={theme.colors.primary.regular}
          onClick={handleClick}
        />
      )}
      <Label htmlFor={id} checked={checked}>
        {label}
      </Label>
    </LabelBox>
  );
};

export default Checkbox;

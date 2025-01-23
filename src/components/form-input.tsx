import { useId, type ComponentProps } from 'react';
import FormRadioOrCheckbox from './form-raido-or-checkbox';

type FormInputProps = ComponentProps<'input'> & {
  label: string;
};

function FormInput({ label, type, ...restProps }: FormInputProps) {
  const inputId = useId();

  if (type === 'radio' || type === 'checkbox') {
    return <FormRadioOrCheckbox label={label} type={type} {...restProps} />;
  }

  return (
    <div className="formControl">
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} {...restProps} />
    </div>
  );
}

export default FormInput;

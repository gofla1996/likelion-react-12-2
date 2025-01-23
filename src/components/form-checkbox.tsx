import { useId, type ComponentProps } from 'react';

type FormCheckboxProps = ComponentProps<'input'> & {
  label: string;
};

function FormCheckbox({ label, ...restProps }: FormCheckboxProps) {
  const inputId = useId();

  return (
    <div className="formCheckboxControl">
      <input type="checkbox" id={inputId} {...restProps} />
      <label htmlFor={inputId}>{label}</label>
    </div>
  );
}

export default FormCheckbox;

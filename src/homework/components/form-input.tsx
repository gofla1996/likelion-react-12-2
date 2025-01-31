// CSS
// import './form-input.css';

// CSS Modules
import S from './form-input.module.css';

import { useState } from 'react';

import { type ComponentProps, useId } from 'react';
import { IconEyeOff, IconEyeOn } from './icon-eye';

type FormInputProps = ComponentProps<'input'> & {
  label: string;
  hasToggleButton?: boolean;
};

function FormInput({
  label,
  hasToggleButton = false,
  type = 'text',
  ...inputProps
}: FormInputProps) {
  const id = useId();

  const [isOff, setIsOff] = useState(true);
  const handleToggle = () => {
    setIsOff((isOff) => !isOff);
  };

  if (type === 'password' && !isOff) {
    type = 'text';
  }

  const buttonLabel = isOff ? '표시' : '감춤';

  return (
    // CSS
    // <div className="FormInput">

    // CSS Modules
    <div className={S.formInput}>
      <label className={S.formInputLabel} htmlFor={id}>
        {label}
      </label>
      <div className={S.group}>
        <input id={id} type={type} {...inputProps} />
        {hasToggleButton && (
          <button
            type="button"
            title={`패스워드 ${buttonLabel}`}
            onClick={handleToggle}
          >
            {isOff ? <IconEyeOff /> : <IconEyeOn />}
            <span className="sr-only">패스워드 {buttonLabel}</span>
          </button>
        )}
      </div>
    </div>
  );
}

export default FormInput;

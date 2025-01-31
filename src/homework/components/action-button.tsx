import { ComponentProps } from 'react';
import S from './action-button.module.css';

function ActionButton({
  type = 'submit',
  className = '',
  ...buttonProps
}: ComponentProps<'button'>) {
  const classNames = `${S.actionButton} ${className}`;

  return <button type={type} className={classNames} {...buttonProps}></button>;
}

export default ActionButton;

'use client';
import React from 'react';
import Icon, { TIcons } from './Icon';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: TIcons;
  containerClassName?: string;
  className?: string;
};

const Input = ({ containerClassName = '', className = '', icon, ...props }: Props) => {
  return (
    <div className={`flex gap-3 py-3 px-4 ${containerClassName}`}>
      {icon ? <Icon name={icon} size={24} /> : null}
      <input className={`${className}`} {...props} />
    </div>
  );
};

export default Input;

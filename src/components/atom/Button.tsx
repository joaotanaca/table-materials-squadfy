'use client';
import React, { memo } from 'react';

const colors = {
  success: 'bg-success text-white',
  outline: 'border-1 border-success text-success',
  gray: 'bg-moss-200 text-moss-500',
};

const formats = {
  default: 'py-[10px] px-3',
  square: 'p-2',
  small: 'p-1',
};

type Props = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> & {
  color?: keyof typeof colors;
  format?: keyof typeof formats;
  className?: string;
};

const Button = ({ color = 'success', format = 'default', className = '', children, ...props }: Props) => {
  return (
    <button className={`${className} ${colors[color]} ${formats[format]}`} {...props}>
      {children}
    </button>
  );
};

export default memo(Button);

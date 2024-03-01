'use client';
import React, { useCallback, useRef } from 'react';
import Icon, { TIcons } from './Icon';

type Props = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: TIcons;
  containerClassName?: string;
  className?: string;
};

const Input = ({ containerClassName = '', className = '', icon, ...props }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  const focus = useCallback(() => ref?.current?.focus(), []);
  return (
    <div className={`border-moss-300 border-1 relative ${containerClassName}`}>
      {icon ? (
        <div onClick={focus}>
          <Icon className="absolute left-4 top-1/2 -translate-y-1/2 cursor-pointer" name={icon} size={24} />
        </div>
      ) : null}
      <input
        ref={ref}
        className={`placeholder:text-moss-500 text-moss-500 flex gap-3 py-3 outline-none ${icon ? ' pl-12 pr-4' : 'px-4'} ${className}`}
        {...props}
      />
    </div>
  );
};

export default Input;

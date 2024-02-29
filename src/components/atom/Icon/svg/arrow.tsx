import React from 'react';
import { IconProps } from '..';

const Arrow = ({ size = 24, color = '#288154', className }: IconProps) => {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M15.41 16.58L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.58Z" fill={color} />
    </svg>
  );
};

export default Arrow;

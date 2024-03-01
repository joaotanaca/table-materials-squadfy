import React from 'react';
import { IconProps } from '..';

const Minus = ({ className, color = '#6D7561', size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.8001 9.16668H3.46674V7.83334H12.8001V9.16668Z" fill={color} />
    </svg>
  );
};

export default Minus;

import React from 'react';
import { IconProps } from '..';

const More = ({ className, color = '#6D7561', size }: IconProps) => {
  return (
    <svg
      width={size}
      height={size}
      className={className}
      viewBox="0 0 17 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.8001 9.16668H8.80007V13.1667H7.46674V9.16668H3.46674V7.83334H7.46674V3.83334H8.80007V7.83334H12.8001V9.16668Z"
        fill={color}
      />
    </svg>
  );
};

export default More;

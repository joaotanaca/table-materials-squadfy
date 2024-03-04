import positions from '@/src/constants/positions';
import { ColumnProps } from '@/src/types/ColumnProps';
import React, { PropsWithChildren } from 'react';

type Props = ColumnProps & {
  className?: string;
};

const Column = ({ children, position = 'left', className }: PropsWithChildren<Props>) => {
  return (
    <th className={`text-base text-left text-moss-500 px-4 py-3 font-normal ${positions[position]} ${className}`}>
      {children}
    </th>
  );
};

export default Column;

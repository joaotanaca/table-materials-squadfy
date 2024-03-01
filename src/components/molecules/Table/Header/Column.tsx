import positions from '@/src/constants/positions';
import { ColumnProps } from '@/src/types/ColumnProps';
import React, { PropsWithChildren } from 'react';

const Column = ({ children, position = 'left' }: PropsWithChildren<ColumnProps>) => {
  return (
    <th className={`text-base text-left text-moss-500 px-4 py-3 font-normal ${positions[position]}`}>{children}</th>
  );
};

export default Column;

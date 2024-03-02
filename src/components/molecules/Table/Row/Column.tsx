'use client';
import positions from '@/src/constants/positions';
import { ColumnProps } from '@/src/types/ColumnProps';
import React, { PropsWithChildren, memo } from 'react';

const Column = ({ children, position = 'left', column, id }: PropsWithChildren<ColumnProps>) => (
  <td colSpan={1} className={`text-gray-800 text-base px-4 py-3 ${positions[position]}`} id={`${column}_${id}`}>
    {children}
  </td>
);

export default memo(Column);

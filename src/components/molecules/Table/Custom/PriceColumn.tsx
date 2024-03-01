'use client';
import { Product } from '@/src/types/Product';
import React, { PropsWithChildren, memo, useMemo } from 'react';
import positions from '@/src/constants/positions';
import { ColumnProps } from '@/src/types/ColumnProps';
import BRLFormat from '@/src/helpers/BRLFormat';

type Props = Product & ColumnProps;

const PriceColumn = ({ children, column, position = 'left', index }: PropsWithChildren<Props>) => {
  const price = useMemo(() => BRLFormat.format(Number(children)), [children]);
  return (
    <td colSpan={1} className={`text-gray-800 text-base px-4 py-3 ${positions[position]}`} id={`${column}_${index}`}>
      {price}
    </td>
  );
};

export default memo(PriceColumn as React.FC);

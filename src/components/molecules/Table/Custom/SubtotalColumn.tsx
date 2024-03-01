'use client';
import { Product } from '@/src/types/Product';
import React, { PropsWithChildren, memo, useMemo } from 'react';
import positions from '@/src/constants/positions';
import { ColumnProps } from '@/src/types/ColumnProps';

type Props = Product & ColumnProps;

const SubtotalColumn = ({ subtotal: subtotalProp, position = 'left', index }: PropsWithChildren<Props>) => {
  const subtotal = useMemo(
    () =>
      subtotalProp.toLocaleString('pt-BR', {
        currency: 'BRL',
        maximumFractionDigits: 2,
        minimumFractionDigits: 2,
      }),
    [subtotalProp],
  );
  return (
    <td colSpan={1} className={`text-gray-800 text-base px-4 py-3 ${positions[position]}`} id={`subtotal_${index}`}>
      {subtotal}
    </td>
  );
};

export default memo(SubtotalColumn as React.FC);

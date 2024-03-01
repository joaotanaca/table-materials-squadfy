'use client';
import { Product } from '@/src/types/Product';
import React, { PropsWithChildren, memo, useCallback } from 'react';
import positions from '@/src/constants/positions';
import { ColumnProps } from '@/src/types/ColumnProps';
import Button from '@/src/components/atom/Button';
import { useAtom } from 'jotai';
import { rowsAtom, totalAtom } from '@/src/store/DataTable';

type Props = Product &
  ColumnProps & {
    index: number;
  };

const UnitQuantityColumn = ({ price, unit_quantity, position = 'left', index }: PropsWithChildren<Props>) => {
  const [rows, setRows] = useAtom(rowsAtom);
  const [total, setTotal] = useAtom(totalAtom);
  const handleChangeUnitQuantity = useCallback(() => {
    const prevState = [...rows];
    prevState[index].unit_quantity = +prevState[index].unit_quantity + 1;
    prevState[index].subtotal = (+prevState[index].unit_quantity * +price).toLocaleString('pt-BR', {
      currency: 'BRL',
      maximumFractionDigits: 2,
      minimumFractionDigits: 2,
    });
    setTotal(total + +price);
    (document.querySelector(`#unit_quantity_${index}`) as HTMLElement).innerText = `${prevState[index].unit_quantity}`;
    (document.querySelector(`#subtotal_${index}`) as HTMLElement).innerText = `${prevState[index].subtotal}`;
    setRows(prevState);
  }, [index, price, rows, setRows, setTotal, total]);

  return (
    <td colSpan={1} className={`text-gray-800 text-base px-4 py-3 ${positions[position]}`}>
      <span id={`unit_quantity_${index}`}>{unit_quantity}</span>
      <Button format="square" color="gray" onClick={handleChangeUnitQuantity}>
        +
      </Button>
    </td>
  );
};

export default memo(UnitQuantityColumn as React.FC);

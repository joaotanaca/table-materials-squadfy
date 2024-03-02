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

const UnitQuantityColumn = ({ price, unit_quantity, index, id }: PropsWithChildren<Props>) => {
  const [rows, setRows] = useAtom(rowsAtom);
  const [total, setTotal] = useAtom(totalAtom);
  const handleChangeUnitQuantity = useCallback(
    (type: 'increment' | 'decrement' = 'increment') => {
      const prevState = [...rows];
      const unitQuantityColumn = document.querySelector(`#unit_quantity_${id}`) as HTMLElement;
      const subtotalElementColumn = document.querySelector(`#subtotal_${id}`) as HTMLElement;
      const priceNew = Number(price);
      let unit_quantity = Number(prevState[index].unit_quantity);

      if (type === 'increment') {
        unit_quantity += 1;
        setTotal(total + Number(price));
      } else if (unit_quantity > 0) {
        unit_quantity -= 1;
        setTotal(total - Number(price));
      }
      setRows(prevState);

      prevState[index].unit_quantity = unit_quantity;
      prevState[index].subtotal = unit_quantity * priceNew;
      unitQuantityColumn.innerText = `${prevState[index].unit_quantity}`;
      subtotalElementColumn.innerText = BRLFormat.format(prevState[index].subtotal as number);
    },
    [id, index, price, rows, setRows, setTotal, total],
  );

  return (
    <td colSpan={1} className={`text-gray-800 text-base px-4 py-3 flex items-center justify-end gap-3 text-right`}>
      <span id={`unit_quantity_${id}`}>{unit_quantity}</span>
      <div className="flex flex-col gap-0.5">
        <Button format="small" color="gray" onClick={() => handleChangeUnitQuantity('increment')}>
          <Icon name="more" size={16} />
        </Button>
        <Button format="small" color="gray" onClick={() => handleChangeUnitQuantity('decrement')}>
          <Icon name="minus" size={16} />
        </Button>
      </div>
    </td>
  );
};

export default memo(UnitQuantityColumn as React.FC);

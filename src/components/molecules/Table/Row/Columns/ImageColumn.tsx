import React, { memo } from 'react';
import Image from 'next/image';
import { ColumnProps } from '@/src/types/ColumnProps';
import positions from '@/src/constants/positions';

const ImageColumn = ({ position = 'left', column, id }: ColumnProps) => {
  return (
    <td className={`text-gray-800 text-base px-4 py-3 w-20 ${positions[position]}`} id={`${column}_${id}`}>
      <Image width={40} height={40} src="/product.webp" alt={''} />
    </td>
  );
};

export default memo(ImageColumn as React.FC);

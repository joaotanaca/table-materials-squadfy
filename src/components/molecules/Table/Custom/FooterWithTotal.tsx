'use client';
import { totalAtom } from '@/src/store/DataTable';
import { useAtomValue } from 'jotai';
import React, { memo } from 'react';

const FooterWithTotal = () => {
  const total = useAtomValue(totalAtom);
  return (
    <tfoot className="bg-moss-200 text-gray-800 min-w-[400px]">
      <tr>
        <td>
          Total <span>{total}</span>
        </td>
      </tr>
    </tfoot>
  );
};

export default memo(FooterWithTotal);

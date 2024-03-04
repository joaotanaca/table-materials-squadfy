'use client';
import { totalFormatedAtom } from '@/src/store/DataTable';
import { useAtomValue } from 'jotai';
import React, { memo } from 'react';

const Footer = () => {
  const total = useAtomValue(totalFormatedAtom);
  return (
    <tfoot>
      <tr>
        <td>
          <div className="bg-moss-200 border-moss-300 border-y-1 text-gray-800 min-w-[400px] w-fit px-4 py-3 float-right flex justify-between">
            Total <span>{total}</span>
          </div>
        </td>
      </tr>
    </tfoot>
  );
};

export default memo(Footer);

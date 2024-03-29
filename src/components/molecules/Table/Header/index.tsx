'use client';
import React, { useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import Column from './Column';
import { useAtomValue } from 'jotai';
import { headersAtom } from '@/src/store/DataTable';
import { TableHeader } from '@/src/components/organisms/DataTable';

const Header = () => {
  const headers = useAtomValue(headersAtom) as TableHeader[];
  const HeaderColumns = useMemo(
    () =>
      headers?.map(({ label, position, name }) => (
        <Column key={uuid()} position={position} className={name === 'image' ? 'w-20' : ''}>
          {label}
        </Column>
      )),
    [headers],
  );
  return (
    <tr className="text-base text-left text-moss-500 bg-moss-200 px-4 py-3 font-normal table table-fixed w-full border-moss-300 border-y-1">
      {HeaderColumns}
    </tr>
  );
};

export default Header;

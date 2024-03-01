'use client';
import React, { memo, useMemo } from 'react';
import Row from './Row';
import { useAtomValue } from 'jotai';
import { headersAtom } from '@/src/store/DataTable';
import { Rows } from '@/src/types/Rows';
import { TableHeader } from '../../organisms/DataTable';

const Rows = ({ rows }: { rows: Rows }) => {
  const headers = useAtomValue(headersAtom) as TableHeader[];
  const RowsView = useMemo(
    () => rows?.map?.((row, index) => <Row key={row.id} columns={headers} value={{ index, ...row }} />),
    [headers, rows],
  );
  return <>{RowsView}</>;
};

export default memo(Rows);

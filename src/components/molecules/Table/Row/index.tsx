'use client';
import React, { Fragment, memo, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { TableHeader } from '@/src/components/organisms/DataTable';
import Column from './Column';
import ColumnsComponents from './Columns';
import { useAtomValue } from 'jotai';
import { searchAtom } from '@/src/store/DataTable';
import { Product } from '@/src/types/Product';

type Props = {
  columns: TableHeader[];
  value: Product;
};
const Row = ({ columns, value }: Props) => {
  const search = useAtomValue(searchAtom);
  const hidden = useMemo(
    () =>
      !search ||
      value?.name?.toLowerCase().includes(search.toLowerCase()) ||
      value?.type?.toLowerCase().includes(search.toLowerCase()) ||
      value?.brand?.toLowerCase().includes(search.toLowerCase())
        ? 'block'
        : 'hidden',
    [search, value],
  );

  const Columns = useMemo(
    () =>
      columns.map(({ custom: customName, name, position = 'left' }) => {
        const Col = customName ? ColumnsComponents[customName] : Column;
        return (
          <Fragment key={uuid()}>
            <Col {...value} column={name} position={position}>
              {value[name]}
            </Col>
          </Fragment>
        );
      }),
    [columns, value],
  );
  return <tr className={`table table-fixed w-full border-moss-300 border-b-1 ${hidden}`}>{Columns}</tr>;
};

export default memo(Row);

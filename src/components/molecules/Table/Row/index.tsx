'use client';
/* eslint-disable no-unused-vars */
import React, { Fragment, memo, useMemo } from 'react';
import { v4 as uuid } from 'uuid';
import { TableHeader } from '@/src/components/organisms/DataTable';
import Column from './Column';
import { Row } from '@/src/types/Rows';
import Custom from '../Custom';
import { useAtomValue } from 'jotai';
import { searchAtom } from '@/src/store/DataTable';

type Props = {
  columns: TableHeader[];
  value: Row;
};
const Row = ({ columns, value }: Props) => {
  const search = useAtomValue(searchAtom);
  const hidden = useMemo(
    () =>
      !search || (value?.name as string).toLowerCase().toLowerCase().includes(search.toLowerCase())
        ? 'block'
        : 'hidden',
    [search, value?.name],
  );

  const Columns = useMemo(
    () =>
      columns.map(({ custom: customName, name, position = 'left' }) => {
        const Col = customName ? Custom[customName] : Column;
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
  return <tr className={`table table-fixed w-full ${hidden}`}>{Columns}</tr>;
};

export default memo(Row);

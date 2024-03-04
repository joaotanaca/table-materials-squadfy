'use client';
import React from 'react';
import Table from '../molecules/Table';
import { ColumnProps } from '@/src/types/ColumnProps';
import { DataTableStore, HydrateAtoms, headersAtom, rowsAtom, totalAtom } from '@/src/store/DataTable';
import { Rows } from '@/src/types/Rows';
import Columns from '../molecules/Table/Row/Columns';
import { Provider } from 'jotai';
import Footer from '../molecules/Table/Footer';
import SubmitButtom from '../molecules/Table/Footer/SubmitButton';

export type TableHeader = ColumnProps & {
  name: string;
  label: string;
  custom?: keyof typeof Columns;
};

type Props = React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & {
  headers: TableHeader[];
  rows: Rows;
  initialTotalPrice: number;
};

const DataTable = ({ headers, rows, initialTotalPrice, ...props }: Props) => {
  return (
    <Provider store={DataTableStore}>
      <HydrateAtoms
        initialValues={[
          [rowsAtom, rows],
          [headersAtom, headers],
          [totalAtom, initialTotalPrice],
        ]}
      >
        <Table.Header.SearchInput />
        <table {...props}>
          <thead className="block w-full pr-[15px]">
            <Table.Header.Component />
          </thead>
          <tbody className="block w-full h-[50vh] overflow-auto">
            <Table.Rows rows={rows} />
          </tbody>
          <Footer />
        </table>
        <SubmitButtom />
      </HydrateAtoms>
    </Provider>
  );
};

export default DataTable;

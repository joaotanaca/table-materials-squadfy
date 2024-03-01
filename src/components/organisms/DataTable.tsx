import React from 'react';
import Table from '../molecules/Table';
import { ColumnProps } from '@/src/types/ColumnProps';
import { DataTableStore, HydrateAtoms, headersAtom, rowsAtom } from '@/src/store/DataTable';
import { Rows } from '@/src/types/Rows';
import Custom from '../molecules/Table/Custom';
import { Provider } from 'jotai';
import Footer from '../molecules/Table/Footer';

export type TableHeader = ColumnProps & {
  name: string;
  label: string;
  custom?: keyof typeof Custom;
};

type Props = React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & {
  headers: TableHeader[];
  rows: Rows;
};

const DataTable = ({ headers, rows, ...props }: Props) => {
  return (
    <Provider store={DataTableStore}>
      <HydrateAtoms
        initialValues={[
          [rowsAtom, rows],
          [headersAtom, headers],
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
      </HydrateAtoms>
    </Provider>
  );
};

export default DataTable;

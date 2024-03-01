import React from 'react';
import Table from '../molecules/Table';
import { ColumnProps } from '@/src/types/ColumnProps';
import { DataTableStore, HydrateAtoms, headersAtom, rowsAtom } from '@/src/store/DataTable';
import { Rows } from '@/src/types/Rows';
import Custom from '../molecules/Table/Custom';
import { Provider } from 'jotai';

export type TableHeader = ColumnProps & {
  name: string;
  label: string;
  custom?: keyof typeof Custom;
};

type Props = React.DetailedHTMLProps<React.TableHTMLAttributes<HTMLTableElement>, HTMLTableElement> & {
  headers: TableHeader[];
  rows: Rows;
  footer?: () => JSX.Element;
};

const DataTable = ({ headers, rows, footer: Footer, ...props }: Props) => {
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
          <tbody className="block w-full h-[60vh] overflow-auto">
            <Table.Rows rows={rows} />
          </tbody>
          {Footer ? <Footer /> : null}
        </table>
      </HydrateAtoms>
    </Provider>
  );
};

export default DataTable;

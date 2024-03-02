import { PropsWithChildren } from 'react';
import { atom, createStore } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { Rows } from '../types/Rows';
import { TableHeader } from '../components/organisms/DataTable';

type HydrateAtomsProps = { initialValues: any };

export const rowsAtom = atom([] as Rows);
export const headersAtom = atom([] as TableHeader[]);
export const searchAtom = atom('');
export const totalAtom = atom(0);
export const totalFormatedAtom = atom((get) =>
  get(totalAtom)?.toLocaleString('pt-BR', {
    currency: 'BRL',
    style: 'currency',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  }),
);

export const DataTableStore = createStore();

export const HydrateAtoms = ({ initialValues, children }: PropsWithChildren<HydrateAtomsProps>) => {
  'use client'
  useHydrateAtoms(initialValues);
  return children;
};

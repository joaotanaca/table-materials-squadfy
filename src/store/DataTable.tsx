/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { PropsWithChildren } from 'react';
import { atom, createStore } from 'jotai';
import { useHydrateAtoms } from 'jotai/utils';
import { Rows } from '../types/Rows';
import { TableHeader } from '../components/organisms/DataTable';

export const rowsAtom = atom([] as Rows);
export const headersAtom = atom([] as TableHeader[]);
export const totalAtom = atom(0);
export const searchAtom = atom('');

export const DataTableStore = createStore();

export const HydrateAtoms = ({ initialValues, children }: PropsWithChildren<{ initialValues: any }>) => {
  useHydrateAtoms(initialValues);
  return children;
};

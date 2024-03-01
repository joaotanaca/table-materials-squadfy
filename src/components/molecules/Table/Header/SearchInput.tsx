'use client';
import Input from '@/src/components/atom/Input';
import { searchAtom } from '@/src/store/DataTable';
import { useSetAtom } from 'jotai';
import React from 'react';

const SearchInput: React.FC = () => {
  const setSearch = useSetAtom(searchAtom);
  return (
    <div className="flex items-start w-full mb-4">
      <Input icon="search" onChange={(e) => setSearch(e.currentTarget.value)} placeholder="Busque materiais..." />
    </div>
  );
};

export default SearchInput;

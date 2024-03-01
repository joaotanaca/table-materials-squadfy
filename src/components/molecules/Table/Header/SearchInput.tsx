'use client';
import Input from '@/src/components/atom/Input';
import { searchAtom } from '@/src/store/DataTable';
import { useSetAtom } from 'jotai';
import React from 'react';

const SearchInput: React.FC = () => {
  const setSearch = useSetAtom(searchAtom);
  return (
    <div>
      <Input onChange={(e) => setSearch(e.currentTarget.value)} />
    </div>
  );
};

export default SearchInput;

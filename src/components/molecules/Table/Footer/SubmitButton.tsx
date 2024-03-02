'use client';
import React from 'react';
import { saveProducts } from '@/src/actions';
import Button from '@/src/components/atom/Button';
import { rowsAtom } from '@/src/store/DataTable';
import { useAtomValue } from 'jotai';

const SubmitButtom: React.FC = () => {
  const rows = useAtomValue(rowsAtom);
  const handleSubmitProducts = () => {
    saveProducts(rows);
  };
  return (
    <div className="w-full flex justify-end mt-10">
      <Button onClick={handleSubmitProducts}>Próximo</Button>
    </div>
  );
};

export default SubmitButtom;

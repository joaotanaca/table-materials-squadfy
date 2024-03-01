import DataTable from '@/src/components/organisms/DataTable';
import service from '@/src/service';

export default async function Home() {
  const products = await service.products.get();
  return (
    <main className="flex flex-col items-center justify-between py-10">
      <DataTable
        className="w-full"
        headers={[
          { label: 'Material', name: 'name' },
          { label: 'Tipo de material', name: 'type' },
          { label: 'Marca', name: 'brand' },
          { label: 'Preço', name: 'price', custom: 'price', position: 'right' },
          { label: 'Quantidade mínima', name: 'minimum_quantity', position: 'right' },
          { label: 'Quantidade unitária', name: 'unit_quantity', custom: 'unit_quantity', position: 'right' },
          { label: 'Subtotal', name: 'subtotal', custom: 'price', position: 'right' },
        ]}
        rows={products}
      />
    </main>
  );
}

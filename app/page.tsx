import Table from '@/src/components/molecules/Table';
import service from '@/src/service';

export default async function Home() {
  const products = await service.products.get();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between py-10">
      {products.map(({ id, name }) => (
        <div key={id}>{name}</div>
      ))}
      <table className='w-full'>
        <Table.Header.Container>
          <Table.Header.Column>Test</Table.Header.Column>
          <Table.Header.Column>Preço</Table.Header.Column>
          <Table.Header.Column>Unidade</Table.Header.Column>
        </Table.Header.Container>
      </table>
    </main>
  );
}

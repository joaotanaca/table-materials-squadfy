import { NextResponse } from 'next/server';
import database from '@/database/database.json';
import { writeFileSync } from 'fs';

export async function GET() {
  return NextResponse.json(database.products);
}

export async function POST(request: Request) {
  const data = await request.json();
  writeFileSync('./database/database.json', JSON.stringify({ products: data }), 'utf8');
  return NextResponse.json({ data });
}

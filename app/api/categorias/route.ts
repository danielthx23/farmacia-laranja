import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
  const categorias = await prisma.categoria.findMany();
  return NextResponse.json(categorias);
}

export async function POST(request: Request) {
  const data = await request.json();
  
  try {
    const categoria = await prisma.categoria.create({
      data,
    });
    return NextResponse.json(categoria, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Falha ao criar uma categoria' }, { status: 400 });
  }
}
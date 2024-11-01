import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET() {
    const produtos = await prisma.produto.findMany();
    return NextResponse.json(produtos);
}

export async function POST(request: Request) {
    const data = await request.json();

    try {
        const produto = await prisma.produto.create({
            data,
        });
        return NextResponse.json(produto, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create product' }, { status: 400 });
    }
}

import { PrismaClient } from '@prisma/client';
import { NextResponse } from 'next/server';

const prisma = new PrismaClient();

export async function GET({ params }: { params: { id: string } }) {
    const { id } = params;

    const categoria = await prisma.categoria.findUnique({
        where: { id_categoria: id },
    });

    if (!categoria) {
        return NextResponse.json({ error: 'Categoria não encontrada' }, { status: 404 });
    }

    return NextResponse.json(categoria);
}

export async function PUT(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;
    const data = await request.json();

    try {
        const produto = await prisma.produto.update({
            where: { id_produto: id },
            data,
        });
        return NextResponse.json(produto);
    } catch (error) {
        return NextResponse.json({ error: 'Falha ao atualizar a Categoria' }, { status: 400 });
    }
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const { id } = params;

    try {
        await prisma.produto.delete({
            where: { id_produto: id },
        });
        return NextResponse.json({}, { status: 204 });
    } catch (error) {
        return NextResponse.json({ error: 'Falha ao deletar a Categorias' }, { status: 400 });
    }
}

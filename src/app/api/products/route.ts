import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/mongoose';
import Product from '@/models/Product';

// GET /api/products - List all products
export async function GET() {
  await dbConnect();
  const products = await Product.find({});
  return NextResponse.json(products);
}

// POST /api/products - Create a new product
export async function POST(req: NextRequest) {
  await dbConnect();
  const data = await req.json();
  const product = await Product.create(data);
  return NextResponse.json(product, { status: 201 });
} 
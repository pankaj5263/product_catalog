import { NextResponse } from 'next/server';
import Product from '@/models/Product';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET(request) {
  await connectToDatabase();
  const { searchParams } = new URL(request.url);
  const category = searchParams.get('category');

  try {
    const topProducts = await Product.aggregate([
      { $match: { category } },
      { $sort: { price: -1 } },
      { $limit: 5 }
    ]);

    return NextResponse.json(topProducts);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

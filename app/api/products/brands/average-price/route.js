import { NextResponse } from 'next/server';
import Product from '@/models/Product';
import { connectToDatabase } from '@/lib/mongodb';

export async function GET() {
  await connectToDatabase();

  try {
    const brandAverages = await Product.aggregate([
      {
        $group: {
          _id: "$brand",
          avgPrice: { $avg: "$price" },
          totalProducts: { $sum: 1 }
        }
      }
    ]);

    return NextResponse.json(brandAverages);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

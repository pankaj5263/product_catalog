import Product from '@/models/Product';
import { connectToDatabase } from '@/lib/mongodb';

export async function generateStaticParams() {
  await connectToDatabase();
  const products = await Product.find({}, '_id');
  return products.map((product) => ({ id: product._id.toString() }));
}

export default async function ProductPage({ params }) {
  await connectToDatabase();
  if(!params?.id){
    return <p>Id is not defined</p>;
  }
  const product = await Product.findById(params.id).lean();

  if (!product) {
    return <p>Product not found</p>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Category: {product.category}</p>
      <p>Price: ${product.price}</p>
      <p>Brand: {product.brand}</p>
      <p>Stock: {product.stock}</p>
    </div>
  );
}

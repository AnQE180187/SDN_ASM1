import Image from 'next/image';
import Link from 'next/link';

async function getProduct(id: string) {
  const res = await fetch(`http://localhost:3000/api/products/${id}`, { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch product');
  }
  return res.json();
}

export default async function ProductPage({ params }: { params: { id: string } }) {
  const product = await getProduct(params.id);

  return (
    <div className="max-w-6xl mx-auto">
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="grid md:grid-cols-2 gap-8">
          {product.image && (
            <div className="relative h-[500px] w-full">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover"
              />
            </div>
          )}
          <div className="p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-2xl font-bold text-blue-600 mb-6">${product.price}</p>
            <div className="prose prose-lg text-gray-600 mb-8">
              <p>{product.description}</p>
            </div>
            <div className="flex space-x-4">
              <Link
                href={`/products/${product._id}/edit`}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
              >
                Edit Product
              </Link>
              <Link
                href="/"
                className="bg-gray-100 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors"
              >
                Back to Products
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 
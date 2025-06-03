import Link from 'next/link';
import Image from 'next/image';

async function getProducts() {
  const res = await fetch('http://localhost:3000/api/products', { cache: 'no-store' });
  if (!res.ok) {
    throw new Error('Failed to fetch products');
  }
  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <div>
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Welcome to Fashion Store</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Discover our latest collection of trendy clothing and accessories. Find your perfect style with our carefully curated products.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {products.map((product: any) => (
          <div key={product._id} className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden">
            {product.image && (
              <div className="relative h-64 w-full">
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
              </div>
            )}
            <div className="p-6">
              <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4 line-clamp-2">{product.description}</p>
              <div className="flex justify-between items-center">
                <p className="text-2xl font-bold text-blue-600">${product.price}</p>
                <div className="flex space-x-2">
                  <Link
                    href={`/products/${product._id}`}
                    className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    View
                  </Link>
                  <Link
                    href={`/products/${product._id}/edit`}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors"
                  >
                    Edit
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {products.length === 0 && (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">No Products Found</h2>
          <p className="text-gray-600 mb-6">Start by adding your first product!</p>
          <Link
            href="/products/new"
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors inline-block"
          >
            Add Product
          </Link>
        </div>
      )}
    </div>
  );
}

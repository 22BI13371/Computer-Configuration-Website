'use client';
import { useRouter } from 'next/router';
import { products } from '../build_data'; // Import products from build_data

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query; // Get the id from the URL query parameter

  // Ensure 'id' is a number and match with the 'id' in products
  const product = products.find((product) => product.id === Number(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h1>{product.title}</h1>
      <p>{product.specs.join(", ")}</p> {/* Joining specs into a string */}
      <p>Price: ${product.price}</p>
    </div>
  );
};

export default ProductDetail;

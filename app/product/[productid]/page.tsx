import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";

import { products } from "@/utils/products";
import Link from "next/link";

interface IPrams {
  productId?: string;
}

const Product = async ({ params }: { params: IPrams }) => {
  const resolvedParams = await Promise.resolve(params);
  console.log("Resolved Params:", resolvedParams);

  console.log("Resolved Params:", params);
  const product = products.find((item) => item.id === params.productid);

  console.log("Product Found:", product);

  if (!product) {
    return (
      <div className="p-8">
        <Container>
          <div className="text-center">
            <h1 className="text-3xl font-bold text-red-500">
              Product Not Found
            </h1>
            <p className="text-lg mt-4">
              {"We couldn't find the product you're looking for."}
            </p>
            <Link href="/" className="text-blue-500 underline mt-6">
              Go back to Home
            </Link>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="p-8">
      <Container>
        <ProductDetails product={product} />
      </Container>
    </div>
  );
};

export default Product;

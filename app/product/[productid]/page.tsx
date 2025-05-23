import Container from "@/app/components/Container";
import ProductDetails from "./ProductDetails";
import { products } from "@/utils/products";
import Link from "next/link";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ productid: string }>;
}) {
  const { productid } = await params;

  const product = products.find((item) => item.id === productid);

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
}

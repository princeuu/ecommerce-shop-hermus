export const revalidate = 0;

import { products } from "@/utils/products";
import Container from "./components/Container";
import HomeBanner from "./components/HomeBanner";
import { truncateText } from "@/utils/truncateText";
import ProductCard from "./components/products/ProductCard";

export default function Home() {
  return (
    <div className="">
      <Container>
        <div>
          <HomeBanner />
        </div>
        <div className="mt-8 text-center" id="brands-section">
          <h2
            className="
              text-4xl 
              font-bold 
              text-black 
              uppercase 
              
              
              inline-block 
              pb-2
              mb-16
            "
          >
            Vehicles
          </h2>
        </div>
        <div
          className="
        grid grid-cols-2 
        sm:grid-cols-3 
        lg:grid-cols-4 
        xl:grid-cols-5 
        2xl:grid-cols-6 
        gap-8"
        >
          {products.map((product: any) => {
            return <ProductCard key={product.id} data={product} />;
          })}
        </div>
      </Container>
    </div>
  );
}

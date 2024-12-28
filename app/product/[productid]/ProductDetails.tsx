"use client";

import Button from "@/app/components/Button";
import ProductImage from "@/app/components/products/ProductImage";
import SetColor from "@/app/components/products/SetColor";
import { useCart } from "@/hooks/useCart";
import { useRouter } from "next/navigation";
import React, { useState, useCallback, useEffect } from "react";
import { MdCheckCircle } from "react-icons/md";

interface ProductDetailsProps {
  product: any;
}

export type CartProductType = {
  id: string;
  name: string;
  description: string;
  brand: string;
  selectedImg: selectedImgType;
  price: number;
  horsepower: number;
  zeroToSixty: number;
  topSpeed: number;
};

export type selectedImgType = {
  color: string;
  colorCode: string;
  image: string;
  name: string;
  description: string;
  horsepower: number;
  zeroToSixty: number;
  topSpeed: number;
};

const Horizontal = () => {
  return <hr className="w-[40%] my-4" />;
};

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  const { handleAddProductToCart, cartProducts } = useCart();
  const [isProductInCart, setIsProductInCart] = useState(false);

  const [cartProduct, setCartProduct] = useState<CartProductType>({
    id: product.id,
    name: product.name,
    description: product.description,
    brand: product.brand,
    selectedImg: { ...product.images[0] },
    price: product.price,
    horsepower: product.horsepower,
    zeroToSixty: product.zeroToSixty,
    topSpeed: product.topSpeed,
  });

  const router = useRouter()
  console.log(cartProducts);

  useEffect(() => {
    setIsProductInCart(false);
    if (cartProducts) {
      const existingIndex = cartProducts.findIndex(
        (item) => item.id === product.id
      );

      if (existingIndex > -1) {
        setIsProductInCart(true);
      }
    }
  }, [cartProducts]);

  const handleColorSelect = useCallback(
    (value: selectedImgType) => {
      setCartProduct((prev) => ({
        ...prev,
        selectedImg: value,
        name: value.name, // Update name
        description: value.description, // Update description
        horsepower: value.horsepower, // Update horsepower
        zeroToSixty: value.zeroToSixty, // Update 0-60 time
        topSpeed: value.topSpeed, // Update top speed
      }));
    },
    [setCartProduct]
  );

  return (
    <div
      className="
        grid 
        grid-cols-1
        md:grid-cols-2
        gap-12
      "
    >
      <ProductImage
        cartProduct={cartProduct}
        product={product}
        handleColorSelect={handleColorSelect}
      />
      <div>
        <h2 className="text-3xl font-medium text-slate-700">
          {cartProduct.name}
        </h2>

        <Horizontal />
        <div className="text-justify">{cartProduct.description}</div>
        <Horizontal />
        <div>
          <span className="font-semibold">BRAND:</span> {cartProduct.brand}
        </div>
        <Horizontal />
        <div>
          <ul>
            <li>
              <span className="font-semibold">Horsepower:</span>{" "}
              {cartProduct.horsepower} hp
            </li>
            <Horizontal />
            <li>
              <span className="font-semibold">0-60 mph:</span>{" "}
              {cartProduct.zeroToSixty} seconds
            </li>
            <Horizontal />
            <li>
              <span className="font-semibold">Top Speed:</span>{" "}
              {cartProduct.topSpeed} mph
            </li>
          </ul>
        </div>
        <Horizontal />

        {isProductInCart ? (
          <>
            <p
              className="
          mb-2
          textslate-500 
          flex
          items-center
          gap-1
          "
            >
              <MdCheckCircle className="
                text-teal-400
                size={20}"
              />
              <span>Product added to cart</span>
              </p>
              <div className="max-w-[500px]">
                <Button
                  label="View Cart"
                  outline
                  onClick={() => {
                    router.push("/cart");
                  }}
                />
              </div>
            
          </>
        ) : (
          <>
            <SetColor
              cartProduct={cartProduct}
              images={product.images}
              handleColorSelect={handleColorSelect}
            />
            <Horizontal />
            <div className="max-w-[500px]">
              <Button
                label="Add to Cart"
                onClick={() => handleAddProductToCart(cartProduct)}
              />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductDetails;

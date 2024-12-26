"use client";

import {
  CartProductType,
  selectedImgType,
} from "@/app/product/[productid]/ProductDetails";
import { dividerClasses } from "@mui/material";
import Image from "next/image";

interface ProductImageProps {
  cartProduct: CartProductType;
  product: any;
  handleColorSelect: (value: selectedImgType) => void;
}

const ProductImage: React.FC<ProductImageProps> = ({
  cartProduct,
  product,
  handleColorSelect,
}) => {
  return (
    <div
      className="
        grid 
        grid-cols-1 
        sm:grid-cols-4 
        gap-4 
        max-h-[500px]
        sm:min-h-[400px]
    "
    >
      <div
        className="
        flex 
          flex-col 
          gap-4 
          overflow-y-auto
        "
      >
        {product.images.map((image: selectedImgType) => {
          return (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`
                relative 
                w-[60px] 
                h-[60px] 
                sm:w-[80px] 
                sm:h-[80px] 
                rounded-lg 
                border-2 
                transition 
                cursor-pointer
                ${
                  cartProduct.selectedImg.color === image.color
                    ? "border-[1.5px]"
                    : "border-none"
                }
                `}
            >
              <Image
                src={image.image}
                alt={image.color}
                fill
                className="
                    object-contain
                    "
              />
            </div>
          );
        })}
      </div>
      <div></div>
    </div>
  );
};

export default ProductImage;

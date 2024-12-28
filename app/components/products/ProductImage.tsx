"use client";

import {
  CartProductType,
  selectedImgType,
} from "@/app/product/[productid]/ProductDetails";
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
        grid-cols-6 
        gap-2
        h-full
        max-h-[500px]
        min-h-[300px]
        sm:min-h-[400px]
      "
    >
      {/* Thumbnail Images */}
      <div
        className="
          flex 
          flex-col 
          gap-4 
          overflow-y-auto
        "
      >
        {product.images.map((image: selectedImgType) => (
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
                  ? "border-teal-500"
                  : "border-gray-300"
              }
              hover:border-teal-500
            `}
          >
            <Image
              src={image.image}
              alt={image.color}
              fill
              className="
                object-cover 
                rounded-lg
              "
            />
          </div>
        ))}
      </div>

      {/* Main Image */}
      <div
        className="
          col-span-5 
          relative 
          aspect-square 
          
        "
      >
        <Image
          fill
          src={cartProduct.selectedImg.image}
          alt={cartProduct.name}
          className="
            object-contain
            max-h-[500px]
            min-h-[300px]
            sm:min-h-[400px]
            rounded-lg
          "
        />
      </div>
    </div>
  );
};

export default ProductImage;

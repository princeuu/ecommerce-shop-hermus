"use client";

import {
  CartProductType,
  selectedImgType,
} from "@/app/product/[productid]/ProductDetails";

interface SetColorProps {
  images: selectedImgType[];
  cartProduct: CartProductType;
  handleColorSelect: (value: selectedImgType) => void;
}

const SetColor: React.FC<SetColorProps> = ({
  images,
  cartProduct,
  handleColorSelect,
}) => {
  return (
    <div>
      <div className="flex flex-col gap-4 items-start">
        <span className="font-semibold">MODEL: </span>
        <div className="flex flex-wrap gap-2">
          {images.map((image) => (
            <div
              key={image.color}
              onClick={() => handleColorSelect(image)}
              className={`
                px-4
                py-2
                rounded-md
                cursor-pointer
                text-sm
                font-semibold
                ${
                  cartProduct.selectedImg.color === image.color
                    ? "bg-black text-white"
                    : "bg-white text-black border border-black hover:bg-gray-200"
                }
              `}
            >
              {image.color}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SetColor;

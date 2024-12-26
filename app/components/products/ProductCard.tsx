"use client";

import { formatPrice } from "@/utils/formatPrice";
import { truncateText } from "@/utils/truncateText";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  data: any;
}

const ProductCard: React.FC<ProductCardProps> = ({ data }) => {

    const router = useRouter();

  return (
    
    <div
    onClick={() => router.push(`/product/${data.id}`)} 
      className="
        col-span-1 
        cursor-pointer 
        border-[1.2px]
        border-slate-200
        bg-slate-50
        rounded-sm
        overflow-hidden
        relative
        group
        rounded-lg
        
      "
    >
      {/* Image Container */}
      <div
        className="
          aspect-square
          overflow-hidden
          relative
          w-full
          rounded-lg
        "
      >
        <Image
          fill
          src={data.images[0].image}
          alt={data.name}
          className="
            w-full 
            h-full
            object-cover
            transition
            group-hover:scale-110
          "
        />
      </div>

      {/* Overlay */}
      <div
        className="
          absolute 
          bottom-0 
          left-0 
          w-full 
          bg-gradient-to-t 
          from-black/70 
          via-black/30 
          to-transparent 
          p-4
          text-white
        "
      >
        <div className="text-lg font-semibold">{truncateText(data.name)}</div>
        <div className="text-sm font-medium mt-1">
          {formatPrice(data.price)}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

"use client";

import { useRouter } from "next/navigation";
import {CiShoppingCart} from "react-icons/ci"

const CartCount = () => {
  const router = useRouter();

  return (
    <div
      className="relative cursor-pointer"
      onClick={() => router.push("/cart")}
    >
      {/* Cart Icon with Modern Style */}
      <div
        className="
              flex 
    items-center 
    justify-center 
    w-12 
    h-12 
    bg-gray-100 
    rounded-full 
    text-gray-700 
    hover:bg-gray-200 
    shadow-lg 
    hover:shadow-xl 
    transition
        "
      >
        <CiShoppingCart size={24} />
      </div>
    </div>
  );
};
 
export default CartCount;
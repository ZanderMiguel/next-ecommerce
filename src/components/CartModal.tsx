"use client";

import React from "react";
import Image from "next/image";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="absolute border-2 rounded-md p-4 shadow top-12 z-20">
      {!cartItems ? (
        <div> Cart is Empty</div>
      ) : (
        <div className="">
          <Image
            src=""
            alt=""
            width={72}
            height={96}
            className="object-cover rounded-md"
          />
        </div>
      )}
    </div>
  );
};

export default CartModal;

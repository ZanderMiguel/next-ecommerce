"use client";

import React from "react";
import Image from "next/image";
import pexels from "../../public/pexels.jpg";

const CartModal = () => {
  const cartItems = true;

  return (
    <div className="w-max absolute border-2 rounded-md p-4 shadow top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems ? (
        <div className="text-center"> Cart is Empty</div>
      ) : (
        //List
        <>
          <h3 className="font-semibold text-lg">Shopping Cart</h3>
          <div className="flex flex-col gap-8">
            {/* 1st Item */}
            <div className="flex gap-4">
              <Image
                src="https://images.pexels.com/photos/20619304/pexels-photo-20619304/free-photo-of-man-in-t-shirt-and-with-blonde-dreadlocks.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="dress"
                width={70}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="">$49</div>
                  </div>
                  {/* Desc */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty: 1</span>
                  <span className="text-blue-600 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
            {/* 2nd item */}
            <div className="flex gap-4">
              <Image
                src={pexels}
                alt="dress"
                width={70}
                height={96}
                className="object-cover rounded-md"
              />
              <div className="flex flex-col justify-between w-full">
                {/* Top */}
                <div className="">
                  {/* Title */}
                  <div className="flex items-center justify-between gap-8">
                    <h3 className="font-semibold">Product Name</h3>
                    <div className="">$49</div>
                  </div>
                  {/* Desc */}
                  <div className="text-sm text-gray-500">available</div>
                </div>
                {/* Bottom */}
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Qty: 1</span>
                  <span className="text-blue-600 cursor-pointer">Remove</span>
                </div>
              </div>
            </div>
            {/* Subtotal and action */}
            <div className="">
              <div className="flex items-center justify-between font-semibold">
                <span className="">Subtotal</span>
                <span className="">$49</span>
              </div>
              <p className="text-gray-500 text-sm mt-2 mb-4 ">
                Shipping and taxes calculated at checkout.
              </p>
              <div className="flex justify-between text-sm">
                <button className="rounded-md py-3 px-4 ring-1 ring-gray-500">
                  View Cart
                </button>
                <button className="rounded-md py-3 px-4 bg-black text-white">
                  Checkout
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default CartModal;

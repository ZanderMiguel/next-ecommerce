"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import CartModal from "./CartModal";

const NavIcons = () => {
  const [isProfileOpen, setProfileOpen] = useState(false);
  const [isNotificationOpen, setNotificationOpen] = useState(false);
  const [isCartOpen, setCartOpen] = useState(false);

  const router = useRouter();

  const isLoggedIn = true;

  const handleProfile = () => {
    if (!isLoggedIn) {
      router.push("/login");
    }
    setProfileOpen((prev) => !prev);
  };

  return (
    <div className="flex items-center justify-center gap-3 xl:gap-6 relative">
      <Image
        src="/profile.png"
        alt="Profil"
        width={22}
        height={22}
        className="cursor-pointer"
        onClick={() => {
          handleProfile();
        }}
      />
      {isProfileOpen && (
        <div className="border-2 absolute p-4 rounded-md top-12 left-0 text-sm shadow z-20">
          <Link href="/">Profile</Link>
          <div className="mt-2 cursor-pointer">Logout</div>
        </div>
      )}

      <Image
        src="/notification.png"
        alt="Notif"
        width={22}
        height={22}
        className="cursor-pointer"
      />
      <div
        className="relative cursor-pointer"
        onClick={() => setCartOpen((prev) => !prev)}
      >
        <Image
          src="/cart.png"
          alt="Cart"
          width={22}
          height={22}
          className="cursor-pointer"
        />
        <div className="absolute -top-4 -right-4 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-sm">
          2
        </div>
      </div>
      {isCartOpen && <CartModal />}
    </div>
  );
};

export default NavIcons;

import Link from "next/link";
import Image from "next/image";
import Menu from "../components/Menu";
import SearchBar from "./SearchBar";
import NavIcons from "./NavIcons";

const Navbar = () => {
  return (
    <nav className="h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative">
      {/* Mobile Screen */}
      <section className="h-full flex items-center justify-between md:hidden">
        <Link href="/">
          <div className="text-2xl tracking-wide">SHOP</div>
        </Link>
        <Menu />
      </section>
      {/* Bigger Screen */}
      <section className="hidden md:flex items-center justify-between gap-8 h-full">
        {/* Left */}
        <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
          <Link href="/" className="flex items-center gap-4">
            <Image src="/logo.png" alt="cartLogo" height={24} width={24} />
            <div className="text-2xl tracking-wide">SHOP</div>
          </Link>
          <div className="hidden xl:flex gap-4">
            <Link href="/">Homepage</Link>
            <Link href="/">Shop</Link>
            <Link href="/">Deals</Link>
            <Link href="/">About</Link>
            <Link href="/">Contact</Link>
          </div>
        </div>
        {/* Right */}
        <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
          <SearchBar />
          <NavIcons />
        </div>
      </section>
    </nav>
  );
};

export default Navbar;

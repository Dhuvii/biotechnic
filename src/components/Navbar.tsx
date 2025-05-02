import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="relative w-full max-w-7xl mx-auto flex items-center justify-between">
      <Link href="/">
        <img src="logo.png" alt="logo" className="size-32 object-cover" />
      </Link>

      <div className="flex items-center justify-end gap-5 ">
        <Link
          href="/about"
          className="bg-radial uppercase from-black/80 from-40% to-black/80 hover:from-white/10 transition-all duration-200 border border-white shadow-xl shadow-white/60 px-3 py-2.5 text-sm font-semibold rounded-xs text-white "
        >
          About us
        </Link>
        <Link
          href="/faq"
          className="bg-radial uppercase from-black/80 from-40% to-black/80 hover:from-white/10 transition-all duration-200 border border-white shadow-xl shadow-white/60 px-3 py-2.5 text-sm font-semibold rounded-xs text-white "
        >
          FAQ
        </Link>
        <Link
          href="/contact"
          className="bg-radial uppercase from-black/80 from-40% to-black/80 hover:from-white/10 transition-all duration-200 border border-white shadow-xl shadow-white/60 px-3 py-2.5 text-sm font-semibold rounded-xs text-white "
        >
          contact
        </Link>
        <Link
          href="./apply-now"
          className="bg-radial uppercase from-[#00FF80] from-40% to-[#00FF80] hover:from-white/10 transition-all duration-200 border border-black shadow-xl shadow-white/60 px-5 py-2.5 text-sm font-semibold rounded-full text-black "
        >
          Apply Now
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

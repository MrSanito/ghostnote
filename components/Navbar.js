import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full py-4 px-6 bg-black text-white shadow-lg">
      <div className="max-w-5xl mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold tracking-wide">Ghost Note</h1>
        <div className="space-x-6">
          <Link
            href="/"
            className="hover:text-gray-400 transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="hover:text-gray-400 transition duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

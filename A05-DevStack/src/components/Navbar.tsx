import Logo from "../assets/logo-text.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-100 bg-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4">

        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={Logo} alt="Logo" />
        </div>

        {/* Menu */}
        <div className="hidden items-center gap-8 md:flex">
          <a className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 bg-clip-text text-sm font-medium text-transparent">
            Home
          </a>

          <a className="text-sm text-gray-600">Technologies</a>
          <a className="text-sm text-gray-600">Projects</a>
          <a className="text-sm text-gray-600">About</a>
          <a className="text-sm text-gray-600">Contact</a>
        </div>

        {/* Buttons */}
        <div className="flex items-center gap-2">
          <button className="hidden text-sm text-gray-600 sm:block">
            Sign In
          </button>

          {/* Primary Button */}
          <button className="rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-violet-500 px-4 py-2 text-sm font-medium text-white">
            Sign Up
          </button>
        </div>

      </div>
    </nav>
  );
}
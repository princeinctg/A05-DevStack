import Logo from "../assets/logo-text.png";
export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10">

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand Block */}
          <div>
            <div className="mb-3 flex items-center gap-2">
              <img src={Logo} />

            </div>

            <p className="max-w-xs text-[12px] leading-5 text-[#64748B]">
              Curated tools, technologies, and resources for developers
              building modern software.
            </p>

            {/* Social Links */}
            <div className="mt-4 flex gap-4 text-[12px] text-[#475569]">
              <a href="#" className="hover:text-slate-900">
                GitHub
              </a>

              <a href="#" className="hover:text-slate-900">
                Twitter
              </a>

              <a href="#" className="hover:text-slate-900">
                LinkedIn
              </a>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase text-slate-900">
              Product
            </h3>

            <div className="space-y-2 text-[12px] text-[#64748B]">
              <a href="#" className="block hover:text-slate-900">
                Home
              </a>

              <a href="#" className="block hover:text-slate-900">
                Technologies
              </a>

              <a href="#" className="block hover:text-slate-900">
                Projects
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase text-slate-900">
              Company
            </h3>

            <div className="space-y-2 text-[12px] text-[#64748B]">
              <a href="#" className="block hover:text-slate-900">
                About
              </a>

              <a href="#" className="block hover:text-slate-900">
                Contact
              </a>

              <a href="#" className="block hover:text-slate-900">
                Careers
              </a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-[10px] font-semibold uppercase text-slate-900">
              Legal
            </h3>

            <div className="space-y-2 text-[12px] text-[#64748B]">
              <a href="#" className="block hover:text-slate-900">
                Privacy Policy
              </a>

              <a href="#" className="block hover:text-slate-900">
                Terms of Service
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col gap-3 border-t border-slate-100 pt-5 text-[12px] text-[#94A3B8] sm:flex-row sm:items-center sm:justify-between">

          <p>
            © 2026 Dev Stack. All rights reserved.
          </p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-slate-700">
              Privacy
            </a>

            <a href="#" className="hover:text-slate-700">
              Terms
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
}
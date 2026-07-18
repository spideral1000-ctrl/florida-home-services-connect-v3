import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-4">

          {/* Company */}
          <div>
            <h3 className="text-2xl font-extrabold text-orange-500">
              Florida Home Services Connect
            </h3>

            <p className="mt-4 leading-7 text-slate-300">
              Connecting Florida homeowners with trusted local contractors for
              roofing, HVAC, electrical, plumbing, solar, remodeling, and more.
            </p>

            <p className="mt-6 text-sm text-slate-400">
              Serving homeowners throughout Florida.
            </p>
          </div>

          {/* Homeowners */}
          <div>
            <h4 className="text-lg font-bold text-white">
              Homeowners
            </h4>

            <ul className="mt-6 space-y-3 text-slate-300">

              <li>
                <Link href="/#estimate" className="hover:text-orange-400 transition">
                  Get Free Estimates
                </Link>
              </li>

              <li>
                <Link href="/#services" className="hover:text-orange-400 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link href="/#about" className="hover:text-orange-400 transition">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="/#contact" className="hover:text-orange-400 transition">
                  Contact
                </Link>
              </li>

            </ul>
          </div>

          {/* Contractors */}
          <div>
            <h4 className="text-lg font-bold text-white">
              Contractors
            </h4>

            <ul className="mt-6 space-y-3 text-slate-300">

              <li>
                <Link href="#contractors" className="hover:text-orange-400 transition">
                  Join Our Network
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="hover:text-orange-400 transition">
                  Contractor Dashboard
                </Link>
              </li>

              <li>
                <Link href="/dashboard" className="hover:text-orange-400 transition">
                  Contractor Login
                </Link>
              </li>

            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-lg font-bold text-white">
              Legal
            </h4>

            <ul className="mt-6 space-y-3 text-slate-300">

              <li>
                <Link href="/privacy" className="hover:text-orange-400 transition">
                  Privacy Policy
                </Link>
              </li>

              <li>
                <Link href="/terms" className="hover:text-orange-400 transition">
                  Terms of Service
                </Link>
              </li>

              <li>
                <Link href="/cookies" className="hover:text-orange-400 transition">
                  Cookie Policy
                </Link>
              </li>

            </ul>
          </div>

        </div>

        <div className="mt-12 border-t border-slate-700 pt-8">

          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">

            <p className="text-center text-slate-400 md:text-left">
              © {currentYear} Florida Home Services Connect. All rights reserved.
            </p>

            <div className="flex gap-6 text-slate-400">

              <span>Roofing</span>

              <span>HVAC</span>

              <span>Electrical</span>

              <span>Plumbing</span>

              <span>Solar</span>

              <span>Remodeling</span>

            </div>

          </div>

        </div>

      </div>
    </footer>
  );
}
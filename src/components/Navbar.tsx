"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/", label: "首页" },
  { href: "/services", label: "服务项目" },
  { href: "/cases", label: "成功案例" },
  { href: "/cloud", label: "云平台" },
  { href: "/about", label: "关于我们" },
  { href: "/contact", label: "联系我们" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold text-blue-900">
          <span className="text-blue-600">佳杭</span>生物
        </Link>
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm transition-colors ${
                pathname === link.href
                  ? "text-blue-600 font-semibold"
                  : "text-gray-600 hover:text-blue-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Mobile menu button */}
        <MobileMenu />
      </div>
    </nav>
  );
}

function MobileMenu() {
  return (
    <details className="md:hidden relative">
      <summary className="list-none cursor-pointer p-2 text-gray-600">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </summary>
      <div className="absolute right-0 top-full bg-white border border-gray-100 rounded-lg shadow-lg p-2 w-40">
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className="block px-4 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </details>
  );
}

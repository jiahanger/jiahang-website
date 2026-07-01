"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const links = [
  { href: "/admin", label: "概览" },
  { href: "/admin/inquiries", label: "咨询管理" },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    document.cookie = "token=; path=/; max-age=0";
    router.push("/admin/login");
  };

  return (
    <aside className="w-56 bg-gray-900 text-gray-300 min-h-screen flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <Link href="/admin" className="text-white font-bold text-lg">
          佳杭生物 · 管理
        </Link>
      </div>
      <nav className="flex-1 p-3 space-y-1">
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`block px-3 py-2 rounded text-sm transition-colors ${
              pathname === link.href
                ? "bg-gray-700 text-white"
                : "hover:bg-gray-800 hover:text-white"
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="p-3 border-t border-gray-700">
        <button
          onClick={handleLogout}
          className="w-full text-left px-3 py-2 rounded text-sm hover:bg-gray-800 hover:text-white transition-colors"
        >
          退出登录
        </button>
      </div>
    </aside>
  );
}

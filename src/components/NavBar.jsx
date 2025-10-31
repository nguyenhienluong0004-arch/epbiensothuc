import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { FaPhoneAlt, FaSearch } from "react-icons/fa";

const links = [
  { to: "/", label: "TRANG CHỦ" },
  { to: "/about", label: "GIỚI THIỆU" },
  { to: "/products", label: "SẢN PHẨM THỰC TẾ" },
  { to: "/restore", label: "PHỤC HỒI BIỂN SỐ" },
  { to: "/news", label: "TIN TỨC" },
  { to: "/contact", label: "LIÊN HỆ" },
];

export default function NavBar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 py-3 border-b border-gray-200">
        <div className="flex items-center gap-4">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
            alt="Logo"
            className="w-16 h-16"
          />
          <div>
            <h1 className="text-3xl font-extrabold text-red-800">THỨC BIỂN SỐ</h1>
            <p className="text-gray-600 text-sm">Phục hồi biển số cũ - Đẹp như mới</p>
          </div>
        </div>
        <div className="mt-4 md:mt-0 flex items-center gap-3 text-red-700 font-semibold">
          <FaPhoneAlt className="text-blue-700 text-xl" />
          <div className="text-right">
            <p className="text-sm text-gray-700">Tư Vấn Hỗ Trợ 24/7:</p>
            <p className="text-2xl font-bold text-red-700">0352 429 477</p>
          </div>
        </div>
      </div>

      <nav className="bg-blue-900 text-white font-semibold">
        <div className="flex justify-between items-center px-6 h-12">
          <ul className="hidden md:flex space-x-6 uppercase text-sm tracking-wide">
            {links.map((l, i) => (
              <li key={i}>
                <Link
                  to={l.to}
                  className={`hover:bg-red-700 px-4 py-2 rounded ${
                    i === 0 ? "bg-red-700" : ""
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
          <FaSearch className="hidden md:block text-white text-lg" />
          <button onClick={() => setOpen(true)} className="md:hidden text-white text-2xl">
            <Menu />
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="fixed inset-0 bg-black/60 md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="absolute right-0 top-0 h-full w-64 bg-blue-900 p-6 text-white"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="font-bold text-lg">MENU</span>
                <button onClick={() => setOpen(false)}>
                  <X className="h-6 w-6" />
                </button>
              </div>
              <ul className="space-y-4">
                {links.map((l, i) => (
                  <li key={i}>
                    <Link
                      to={l.to}
                      className="block px-3 py-2 hover:bg-red-700 rounded"
                      onClick={() => setOpen(false)}
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </nav>
    </header>
  );
}

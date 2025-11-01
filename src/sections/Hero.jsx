import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

const images = [
  "https://i.postimg.cc/fyKcnM56/1.jpg",
  "https://i.postimg.cc/vTzrFG3y/2.jpg",
  "https://i.postimg.cc/hvrLWKpF/3.jpg",
  "https://i.postimg.cc/0jfYR9cs/4.jpg",
  "https://i.postimg.cc/dQmmT9vh/5.jpg",
];

function Hero() {
  const [index, setIndex] = useState(0);

  // ⏳ Tự động đổi ảnh mỗi 5 giây
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Ảnh nền động */}
      <AnimatePresence>
        <motion.div
          key={index}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${images[index]})` }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
        />
      </AnimatePresence>

      {/* Lớp phủ tối */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Nội dung chữ */}
      <div className="relative z-10 text-center text-white px-6">
        <motion.h1
          className="text-5xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          ÉP BIỂN SỐ <span className="text-yellow-400">THỨC</span>
        </motion.h1>

        <p className="text-lg md:text-xl mb-6 opacity-90 max-w-2xl mx-auto">
          Chuyên phục hồi – ép mới – làm đẹp biển số xe máy & ô tô <br />
          <span className="text-yellow-300 font-semibold">
            Đẹp như mới - Bền như gốc!
          </span>
        </p>

        <motion.a
          href="#contact"
          className="px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition"
          whileHover={{ scale: 1.05 }}
        >
          Liên hệ ngay
        </motion.a>
      </div>
    </section>
  );
}

export default Hero;

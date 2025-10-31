import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1580128637393-5b0d9857b65c?q=80&w=1600')] bg-cover bg-center">
      <div className="absolute inset-0 bg-black/60"></div>
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
          <span className="text-yellow-300 font-semibold">Đẹp như mới - Bền như gốc!</span>
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

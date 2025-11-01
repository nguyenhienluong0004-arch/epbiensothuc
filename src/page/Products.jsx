import { motion } from "framer-motion";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
export default function Products() {
  const items = [
    {
      before: "https://i.postimg.cc/br90nWVY/30.jpg",
      after: "https://i.postimg.cc/zXqmnpgt/6.jpg",
    },
    {
      before: "https://i.postimg.cc/C5sC8Xrh/32.jpg",
      after: "https://i.postimg.cc/vTt7nk2Q/33.jpg",
    },
    {
      before: "https://i.postimg.cc/kGvNSzY4/34.jpg",
      after: "https://i.postimg.cc/sx4PWqH2/35.jpg",
    },
    {
      before: "https://i.postimg.cc/L53kPwQ5/36.jpg",
      after: "https://i.postimg.cc/QCJg7wYV/37.jpg",
    },
    {
      before: "https://i.postimg.cc/d3jRCpNh/38.jpg",
      after: "https://i.postimg.cc/QCJg7wYK/39.jpg",
    },
    {
      before: "https://i.postimg.cc/qqxcKSD3/40.jpg",
      after: "https://i.postimg.cc/Hn90MRv7/41.jpg",
    },
  ];

  const realImages = [
    "https://i.postimg.cc/0jfYR9cs/4.jpg",
    "https://i.postimg.cc/dQmmT9vh/5.jpg",
    "https://i.postimg.cc/XY4jxh2R/42.jpg",
    "https://i.postimg.cc/rFSy1cJV/43.jpg",
    "https://i.postimg.cc/PrmfWh4T/44.jpg",
    "https://i.postimg.cc/kXxMQ9c7/45.jpg",
    "https://i.postimg.cc/htcDMwyc/46.jpg",
    "https://i.postimg.cc/nhpFT5RZ/47.jpg",
    "https://i.postimg.cc/nhpFT5Rn/48.jpg",
    "https://i.postimg.cc/Dwnv5Dj2/49.jpg",
    "https://i.postimg.cc/bwpyLMCY/50.jpg",
    "https://i.postimg.cc/9QCm1S80/52.jpg",
    "https://i.postimg.cc/7ZwHXcsb/53.jpg",
    "https://i.postimg.cc/2SrkTJc1/54.jpg",
    "https://i.postimg.cc/jStxv9gW/55.jpg",
    "https://i.postimg.cc/Vkmf4TGr/56.jpg",
    "https://i.postimg.cc/bwpyLMCb/58.jpg",
    "https://i.postimg.cc/P5TXKc3Y/59.jpg",
    "https://i.postimg.cc/52b4pG78/60.jpg",
    "https://i.postimg.cc/vZbYXjqW/61.jpg",
    "https://i.postimg.cc/Z5HTQc2W/62.jpg",
    "https://i.postimg.cc/cLhszm2r/63.jpg",
    "https://i.postimg.cc/htsSYr6Q/64.jpg",
    "https://i.postimg.cc/6pc9P0gM/66.jpg",
    "https://i.postimg.cc/GmKcfQVq/67.jpg",
    "https://i.postimg.cc/fRCwPKpr/68.jpg",
    "https://i.postimg.cc/g2sY7DQQ/70.jpg",
  ];

  return (
    <section
      id="products"
      className="relative  bg-gradient-to-b from-gray-50 via-white to-indigo-50 overflow-hidden"
    >
      {/* Tiêu đề trước/sau */}
      <motion.h2
        className="text-2xl md:text-5xl font-extrabold text-center text-indigo-800 mb-12"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        SẢN PHẨM <span className="text-yellow-500">TRƯỚC / SAU</span>
      </motion.h2>

      {/* Cặp ảnh trước/sau */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        {items.map((p, i) => (
          <motion.div
            key={i}
            className="relative grid grid-cols-2 overflow-hidden rounded-xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src={p.before}
                alt={`Trước ${i + 1}`}
                className="w-full h-64 md:h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-blue-700 text-white font-bold px-4 py-1 rounded-md text-xs shadow">
                TRƯỚC
              </div>
            </div>
            <div className="relative">
              <img
                src={p.after}
                alt={`Sau ${i + 1}`}
                className="w-full h-64 md:h-72 object-cover"
                loading="lazy"
              />
              <div className="absolute top-2 left-2 bg-red-600 text-white font-bold px-4 py-1 rounded-md text-xs shadow">
                SAU
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <motion.div
        className="text-center mt-16 mb-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-700 text-lg mb-6">
          Mỗi biển số là một câu chuyện biến đổi từ cũ kỹ thành <strong>đẹp như mới</strong>.  
          <strong>ÉP BIỂN SỐ THỨC</strong> tự hào mang đến chất lượng tốt nhất cho khách hàng.
        </p>
        <a
          href="#contact"
          className="inline-block bg-yellow-400 text-gray-900 font-semibold px-8 py-3 rounded-full hover:bg-yellow-300 shadow-md transition-all"
        >
          Liên hệ ngay
        </a>
      </motion.div>

      {/* ===== HÌNH ẢNH THỰC TẾ ===== */}
      <motion.div
        className="mt-12 max-w-7xl mx-auto px-4"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h3 className="text-4xl font-bold text-center text-indigo-700 mb-10">
          HÌNH ẢNH <span className="text-yellow-500">THỰC TẾ TẠI CỬA HÀNG</span>
        </h3>

        <div className="columns-2 md:columns-3 gap-4 space-y-4">
          {realImages.map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Hình thực tế ${i + 1}`}
              className="w-full rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 hover:scale-[1.03] object-cover"
              loading="lazy"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            />
          ))}
        </div>
      </motion.div>

      {/* Hiệu ứng nền */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-yellow-200/40 rounded-full blur-3xl" />
      <Contact />
      <Footer />
    </section>
  );
}

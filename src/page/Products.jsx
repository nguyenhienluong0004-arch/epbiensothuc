import { motion } from "framer-motion";

export default function Products() {
  const items = [
    {
      before: "https://source.unsplash.com/random/800x600?motorbike-old",
      after: "https://source.unsplash.com/random/800x600?motorbike-new",
    },
    {
      before: "https://source.unsplash.com/random/800x600?car-old",
      after: "https://source.unsplash.com/random/800x600?car-new",
    },
    {
      before: "https://source.unsplash.com/random/800x600?license-plate-old",
      after: "https://source.unsplash.com/random/800x600?license-plate-new",
    },
    {
      before: "https://source.unsplash.com/random/800x600?truck-old",
      after: "https://source.unsplash.com/random/800x600?truck-new",
    },
  ];

  return (
    <div className="py-20 bg-gray-100 relative overflow-hidden">
      <h1 className="text-5xl font-extrabold text-center text-indigo-800 mb-16 drop-shadow-lg">
        SẢN PHẨM TRƯỚC / SAU
      </h1>

      <div className="flex flex-col gap-16 max-w-7xl mx-auto px-4 sm:px-6">
        {items.map((p, i) => (
          <motion.div
            key={i}
            className="flex flex-row flex-wrap justify-center items-center gap-4 bg-white rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 hover:-translate-y-2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Ảnh TRƯỚC */}
            <div className="relative flex-1 min-w-[45%] overflow-hidden group">
              <img
                src={p.before}
                alt="Trước"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Label ở góc trên trái */}
              <div className="absolute top-3 left-3">
                <span className="bg-red-600 text-white font-semibold px-4 py-1 rounded-full shadow text-xs md:text-sm">
                  TRƯỚC
                </span>
              </div>
            </div>

            {/* Ảnh SAU */}
            <div className="relative flex-1 min-w-[45%] overflow-hidden group">
              <img
                src={p.after}
                alt="Sau"
                className="w-full h-64 sm:h-80 object-cover rounded-2xl transform group-hover:scale-105 transition-transform duration-500"
              />
              {/* Label ở góc trên trái */}
              <div className="absolute top-3 left-3">
                <span className="bg-green-600 text-white font-semibold px-4 py-1 rounded-full shadow text-xs md:text-sm">
                  SAU
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Hiệu ứng nền mờ nhẹ */}
      <div className="absolute -top-32 left-0 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-300/30 rounded-full blur-3xl" />
    </div>
  );
}
  
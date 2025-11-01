import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";

function About() {
  const images = [
    "https://i.postimg.cc/3wq9njxC/19.jpg",
    "https://i.postimg.cc/wBrF05jQ/20.jpg",
    "https://i.postimg.cc/wBrF05jn/210.jpg",
    "https://i.postimg.cc/W4ySXm17/22.jpg",
    "https://i.postimg.cc/25tT2dSw/23.jpg",
    "https://i.postimg.cc/Pq7K2b5V/24.jpg",
    "https://i.postimg.cc/W4ySXm1f/25.jpg",
    "https://i.postimg.cc/k5HwfNgp/26.jpg",
    "https://i.postimg.cc/ZqQjVP5Q/27.jpg",
    "https://i.postimg.cc/W4ySXm1C/28.jpg",
    "https://i.postimg.cc/J0YbzMHZ/18.jpg",
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white text-center px-6 overflow-hidden"
      itemScope
      itemType="https://schema.org/AboutPage"
    >
      {/* ===== Tiêu đề ===== */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-indigo-700 mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Về Chúng Tôi -{" "}
        <span className="text-yellow-500">ÉP BIỂN SỐ THỨC</span>
      </motion.h2>

      {/* ===== Mô tả ===== */}
      <motion.p
        className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <strong>ÉP BIỂN SỐ THỨC</strong> là địa chỉ uy tín chuyên{" "}
        <strong>phục hồi, ép mới và làm đẹp biển số xe máy & ô tô</strong> bằng
        công nghệ ép tiên tiến. Với <strong>hơn 7 năm kinh nghiệm</strong>, đội
        ngũ của chúng tôi mang đến dịch vụ{" "}
        <em>đẹp như mới – bền như gốc – đúng chuẩn quy định của Bộ GTVT</em>.
      </motion.p>

      {/* ===== Slider ảnh chạy vô hạn ===== */}
      <div className="relative w-full mt-12 mb-16 overflow-hidden">
        <div className="flex w-max animate-slide gap-6">
          {[...images, ...images, ...images].map((src, i) => (
            <div
              key={i}
              className="min-w-[350px] md:min-w-[450px] h-[240px] flex-shrink-0 rounded-2xl overflow-hidden shadow-lg"
            >
              <img
                src={src}
                alt={`Hình ảnh tại ÉP BIỂN SỐ THỨC ${i + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>

      {/* CSS animation */}
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-slide {
          animation: slide 25s linear infinite;
        }
      `}</style>

      {/* ===== Video YouTube Thực tế ===== */}
      <motion.div
        className="my-16 flex justify-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative w-[320px] md:w-[400px] aspect-[9/16] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/mXWFH8Qhsz4?controls=1&autoplay=0&modestbranding=1"
            title="YouTube Shorts - ÉP BIỂN SỐ THỨC"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            className="absolute top-0 left-0 w-full h-full"
          ></iframe>
        </div>
      </motion.div>

      {/* ===== Lợi thế ===== */}
      <motion.div
        className="text-left max-w-4xl mx-auto space-y-4 px-4"
        initial={{ opacity: 0, x: 40 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <p className="text-gray-800 text-lg flex items-center gap-2">
          <FaCheckCircle className="text-green-600" />
          Đội ngũ thợ lành nghề, tỉ mỉ trong từng chi tiết nhỏ.
        </p>
        <p className="text-gray-800 text-lg flex items-center gap-2">
          <FaCheckCircle className="text-green-600" />
          Vật liệu cao cấp: mica 3mm, inox sáng bóng – bền đẹp theo thời gian.
        </p>
        <p className="text-gray-800 text-lg flex items-center gap-2">
          <FaCheckCircle className="text-green-600" />
          Bảo hành 24 tháng – Ép nhanh, giao ngay, đúng hẹn & đúng tiêu chuẩn.
        </p>
        <p className="text-gray-800 text-lg flex items-center gap-2">
          <FaCheckCircle className="text-green-600" />
          Cam kết sản phẩm thẩm mỹ, sắc nét, chống oxy hóa và bong tróc.
        </p>
      </motion.div>

      {/* ===== Sứ mệnh ===== */}
      <motion.div
        className="mt-12 max-w-4xl mx-auto bg-indigo-50 rounded-2xl py-8 px-6 shadow-inner"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-2xl font-semibold text-indigo-700 mb-3">
          Sứ Mệnh Của Chúng Tôi
        </h3>
        <p className="text-gray-700 leading-relaxed">
          Mang lại giá trị thực cho khách hàng thông qua dịch vụ{" "}
          <strong>ép biển số chuyên nghiệp</strong>, đảm bảo tiêu chí{" "}
          <strong>an toàn - thẩm mỹ - bền vững</strong>.{" "}
          <strong>ÉP BIỂN SỐ THỨC</strong> không chỉ làm đẹp biển số mà còn
          khẳng định phong cách và uy tín cho mỗi chiếc xe của bạn.
        </p>
      </motion.div>
    </section>
  );
}

export default About;

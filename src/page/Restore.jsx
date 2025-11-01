import { motion } from "framer-motion";
import { FaCogs, FaBolt, FaAward, FaHammer, FaCheckCircle } from "react-icons/fa";
import { useState, useEffect } from "react";
import Contact from "../sections/Contact";
import Footer from "../sections/Footer";
export default function Restore12StepsLight() {
  const heroImages = [
    "/cuahang.jpg",
    "https://i.postimg.cc/nhpFT5Rn/48.jpg",
    "https://i.postimg.cc/vZbYXjqW/61.jpg",
    "https://i.postimg.cc/br90nWVY/30.jpg",
    "https://i.postimg.cc/dQmmT9vh/5.jpg",
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % heroImages.length);
    }, 3500);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const steps = [
    { num: 1, title: "Tiếp nhận & tư vấn", desc: "Trao đổi với khách hàng, đánh giá tình trạng biển cũ, chọn giải pháp phục hồi tối ưu phù hợp kiểu xe & ngân sách." },
    { num: 2, title: "Khò đốt biển số – Làm sạch nền", desc: "Dùng đèn khò nhiệt cao để bóc lớp phản quang cũ, loại bỏ bụi, dầu và lớp oxi hóa giúp nền kim loại sáng bóng." },
    { num: 3, title: "Loại bỏ phản quang cũ đã hư", desc: "Làm sạch toàn bộ lớp phản quang bong tróc, đảm bảo bề mặt phẳng và sẵn sàng cho lớp mới." },
    { num: 4, title: "Làm phản quang mới", desc: "Phủ lớp phản quang tiêu chuẩn ISO, tăng độ sáng gấp 3 lần, phản chiếu cực mạnh trong đêm và trời mưa." },
    { num: 5, title: "Lăn sơn cho biển số", desc: "Sơn chuyên dụng chống phai, giữ màu bền, sắc nét và chống tia UV." },
    { num: 6, title: "Vệ sinh & kiểm tra – cắt form", desc: "Cắt chuẩn CNC theo kích thước Bộ GTVT, đảm bảo góc cạnh tinh tế và cân đối." },
    { num: 7, title: "Ép thủy lực", desc: "Ép bằng máy thủy lực Titan 3mm, áp suất cao – không bọt, không cong, chuẩn tuyệt đối." },
    { num: 8, title: "Chà nhám lần 1 – Tạo độ bám", desc: "Chà nhám nhẹ tạo độ nhám giúp keo & phản quang bám chắc." },
    { num: 9, title: "Chà nhám lần 2 – Làm mịn bề mặt", desc: "Làm phẳng toàn bộ bề mặt, loại bỏ bụi và tạp chất – sẵn sàng cho lớp sơn cuối." },
    { num: 10, title: "Chà nhám lần 3 – Hoàn thiện", desc: "Kiểm tra và xử lý lần cuối, đảm bảo bề mặt sáng, mịn, không xước." },
    { num: 11, title: "Máy đánh bóng bề mặt", desc: "Đánh bóng công nghiệp, giúp bề mặt phản quang sáng bóng như gương." },
    { num: 12, title: "Hoàn thiện & bàn giao", desc: "Lắp viền inox, dán tem chống giả, kiểm tra và bàn giao cho khách – kèm bảo hành 24 tháng." },
  ];

  return (
    <section className="relative py-0 bg-gradient-to-b from-white via-gray-50 to-yellow-50 text-center text-gray-800 overflow-hidden">

      {/* 🖼 Hero Slider */}
      <div className="relative h-[500px] overflow-hidden rounded-b-[3rem] shadow-xl">
        {heroImages.map((src, i) => (
          <motion.img
            key={i}
            src={src}
            alt={`Ảnh cửa hàng ${i + 1}`}
            className="absolute w-full h-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ opacity: i === index ? 1 : 0 }}
          />
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent"></div>

        {/* Tiêu đề nổi */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white text-center">
          <motion.h1
            className="text-xl md:text-3  xl font-extrabold mb-3 drop-shadow-lg"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            QUY TRÌNH PHỤC HỒI BIỂN SỐ CAO CẤP
          </motion.h1>
          <p className="text-lg text-yellow-300 font-medium drop-shadow-md">
            Ép mới – Sáng bóng – Chuẩn quốc tế ISO Function
          </p>
        </div>
      </div>

      {/* PHẦN NỘI DUNG CHÍNH */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
        {/* Tiêu đề chính */}
        <motion.h2
          className="text-xl md:text-6xl font-extrabold text-yellow-600 mb-8"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          12 BƯỚC PHỤC HỒI CHUẨN XƯỞNG THỨC
        </motion.h2>

        <motion.p
          className="max-w-3xl mx-auto text-gray-600 text-lg leading-relaxed mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Tại <strong>ÉP BIỂN SỐ THỨC</strong>, mỗi tấm biển được phục hồi qua <strong>12 công đoạn chuẩn kỹ thuật</strong>, 
          từ khâu làm sạch, ép phản quang đến kiểm tra chi tiết. Kết quả là sản phẩm sáng bóng, bền bỉ và đẳng cấp.
        </motion.p>

        {/* Danh sách bước */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              className="relative group bg-white/90 backdrop-blur-md border border-yellow-400/40 rounded-3xl p-8 text-left shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <div className="absolute -top-6 left-6 bg-yellow-500 text-white font-bold text-xl w-12 h-12 flex items-center justify-center rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                {step.num}
              </div>
              <h3 className="text-2xl font-semibold text-yellow-600 mt-4 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed text-base">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Ảnh cửa hàng */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-2xl mb-20 relative group border border-yellow-400/30"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src="/cuahang.jpg"
            alt="Cửa hàng ÉP BIỂN SỐ THỨC"
            className="w-full h-[480px] object-cover transition-all duration-700 group-hover:brightness-110"
          />
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 bg-yellow-500/80 text-white px-5 py-2 rounded-full text-sm font-medium tracking-wide shadow-lg">
            📍 1181 Nguyễn Ái Quốc, Tân Mai, Biên Hòa – Đồng Nai
          </div>
        </motion.div>

        {/* Cam kết */}
        <motion.div
          className="bg-gradient-to-r from-yellow-100 to-white border border-yellow-300 rounded-3xl py-16 px-8 shadow-xl mb-24"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-3xl font-extrabold text-yellow-700 mb-8">
            CAM KẾT VÀNG – UY TÍN HÀNG ĐẦU BIÊN HÒA
          </h3>
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto text-lg font-medium text-gray-700">
            <p className="flex items-center gap-3 justify-center">
              <FaCheckCircle className="text-yellow-500" /> Biển ép chuẩn ISO – phản quang bền 5 năm.
            </p>
            <p className="flex items-center gap-3 justify-center">
              <FaBolt className="text-yellow-500" /> Máy ép Titan thủy lực – bề mặt phẳng tuyệt đối.
            </p>
            <p className="flex items-center gap-3 justify-center">
              <FaHammer className="text-yellow-500" /> Gia công tỉ mỉ từng chi tiết – không cong, không nứt.
            </p>
            <p className="flex items-center gap-3 justify-center">
              <FaAward className="text-yellow-500" /> Bảo hành 24 tháng – lỗi đổi mới 1 đổi 1.
            </p>
          </div>
        </motion.div>

        {/* Kết thúc */}
        <motion.p
          className="text-gray-600 text-lg italic max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          “Phục hồi không chỉ là làm mới — mà là mang lại giá trị, thẩm mỹ và đẳng cấp cho chủ xe.”
        </motion.p>
      </div>
      <Contact />
      <Footer />
    </section>
  );
}

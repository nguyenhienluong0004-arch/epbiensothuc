import { motion } from "framer-motion";

function Services() {
  const services = [
    {
      title: "Ép Biển Số Xe Máy",
      desc: "Dịch vụ ép biển số xe máy chuyên nghiệp với mica trong suốt, chống trầy, sáng bóng, bền lâu theo thời gian.",
      img: "https://i.postimg.cc/zXqmnpgt/6.jpg",
      alt: "Ép biển số xe máy - mica trong suốt, chống trầy, sáng bóng",
    },
    {
      title: "Ép Biển Số Ô Tô",
      desc: "Ép biển số ô tô bằng khung inox cao cấp, ép kính chống nước, giữ màu cực tốt và đúng chuẩn quy định.",
      img: "https://i.postimg.cc/PrdGmKwV/7.jpg",
      alt: "Ép biển số ô tô - khung inox ép kính chống nước, bền đẹp",
    },
    {
      title: "Phục Hồi Biển Số Cũ",
      desc: "Làm phẳng, sơn lại, đánh bóng và ép lại toàn bộ biển số xe cũ – đảm bảo đẹp như mới, bền và đúng chuẩn.",
      img: "https://i.postimg.cc/CLwyjJqW/8.jpg",
      alt: "Phục hồi biển số cũ - làm phẳng, sơn lại, đánh bóng biển số xe",
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-gray-100"
      itemScope
      itemType="https://schema.org/Service"
    >
      {/* Tiêu đề SEO chính */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-indigo-700 text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dịch Vụ Nổi Bật Tại <span className="text-yellow-500">ÉP BIỂN SỐ THỨC</span>
      </motion.h2>

      {/* Danh sách dịch vụ */}
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <motion.article
            key={i}
            className="bg-white rounded-xl shadow hover:shadow-2xl transition transform hover:-translate-y-1"
            itemScope
            itemType="https://schema.org/Service"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
          >
            <img
              src={s.img}
              alt={s.alt}
              loading="lazy"
              className="w-full h-56 object-cover rounded-t-xl"
              itemProp="image"
            />
            <div className="p-6 text-center">
              <h3
                className="text-2xl font-semibold text-indigo-700 mb-2"
                itemProp="name"
              >
                {s.title}
              </h3>
              <p className="text-gray-600 text-base" itemProp="description">
                {s.desc}
              </p>
            </div>
          </motion.article>
        ))}
      </div>

      {/* Đoạn CTA SEO */}
      <motion.div
        className="mt-16 text-center max-w-3xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-lg text-gray-700 leading-relaxed">
          Tất cả dịch vụ tại <strong>ÉP BIỂN SỐ THỨC</strong> đều được thực hiện bởi đội ngũ
          <strong> thợ lành nghề</strong> cùng <strong>thiết bị ép hiện đại</strong>,
          đảm bảo chất lượng, thẩm mỹ và độ bền cao nhất cho khách hàng.
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition"
        >
          Liên hệ ngay để đặt lịch
        </a>
      </motion.div>
    </section>
  );
}

export default Services;

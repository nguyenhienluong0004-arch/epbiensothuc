import { motion } from "framer-motion";
import { FaFacebook, FaTiktok, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-gradient-to-b from-white via-indigo-50 to-indigo-100 text-gray-900 overflow-hidden"
      itemScope
      itemType="https://schema.org/AutoRepair"
    >
      {/* Hình nền cửa hàng */}
      <div
        className="absolute inset-0 bg-fixed bg-cover bg-center opacity-20"
        style={{ backgroundImage: "url('/cuahang.jpg')" }}
      ></div>

      {/* Overlay sáng nhẹ */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-100/40 via-transparent to-indigo-200/40"></div>

      {/* Nội dung */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold text-indigo-800 mb-6 drop-shadow-lg"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-yellow-500 block mb-2">ÉP BIỂN SỐ THỨC</span>
          Liên Hệ & Hỗ Trợ Khách Hàng
        </motion.h1>

        <motion.p
          className="text-lg text-gray-700 max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          Chúng tôi luôn sẵn sàng phục vụ quý khách hàng tại{" "}
          <strong>Biên Hòa – Đồng Nai</strong>.  
          Đặt lịch ép biển số hoặc phục hồi biển cũ nhanh chóng – chuyên nghiệp – chuẩn quy định Bộ GTVT.
        </motion.p>

        {/* Các khối thông tin */}
        <div className="flex flex-wrap justify-center gap-8 mb-20">
          {/* Địa chỉ */}
          <motion.div
            className="flex-1 min-w-[280px] max-w-[360px] bg-white/90 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-indigo-100"
            whileHover={{ scale: 1.03 }}
          >
            <FaMapMarkerAlt className="text-red-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Địa chỉ</h3>
            <p className="text-gray-700">
              1181 Nguyễn Ái Quốc, Tân Mai, Biên Hòa, Đồng Nai  
              <br />
              <span className="text-sm text-gray-500">Google Map bên dưới</span>
            </p>
          </motion.div>

          {/* Hotline */}
          <motion.div
            className="flex-1 min-w-[280px] max-w-[360px] bg-white/90 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-indigo-100"
            whileHover={{ scale: 1.03 }}
          >
            <FaPhoneAlt className="text-green-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-2">Hotline</h3>
            <p className="text-gray-800 font-bold text-xl">0977 055 990</p>
            <p className="text-sm text-gray-500">Tư vấn & nhận ép tận nơi</p>
          </motion.div>

          {/* Mạng xã hội */}
          <motion.div
            className="flex-1 min-w-[280px] max-w-[360px] bg-white/90 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all border border-indigo-100"
            whileHover={{ scale: 1.03 }}
          >
            <FaFacebook className="text-blue-600 text-5xl mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-indigo-800 mb-4">
              Kênh Liên Hệ Nhanh
            </h3>
            <div className="flex flex-col items-center gap-4">
              <a
                href="https://www.facebook.com/share/14PvS32VEaf/"
                target="_blank"
                className="w-60 bg-blue-600 hover:bg-blue-500 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transform hover:-translate-y-1 transition"
              >
                Facebook
              </a>
              <a
                href="https://zalo.me/0977055990"
                target="_blank"
                className="w-60 bg-sky-500 hover:bg-sky-400 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transform hover:-translate-y-1 transition"
              >
                Zalo
              </a>
              <a
                href="https://www.tiktok.com/@thucepbienso"
                target="_blank"
                className="w-60 bg-black hover:bg-gray-800 text-white font-semibold px-8 py-3 rounded-full text-lg shadow-md transform hover:-translate-y-1 transition"
              >
                TikTok
              </a>
            </div>
          </motion.div>
        </div>

        {/* Google Map */}
        <motion.div
          className="rounded-3xl overflow-hidden shadow-2xl border-4 border-indigo-200"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <iframe
            title="ÉP BIỂN SỐ THỨC Biên Hòa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d35586.0980417428!2d106.81022247138903!3d10.968442132681508!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3174dd001f755b81%3A0x1d6f416cb440d810!2zVGjhu6ljIMOpcCBiaeG7g24gc-G7kSBCacOqbiBIw7Jh!5e0!3m2!1sen!2s!4v1761973806074!5m2!1sen!2s"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </motion.div>

        {/* Footer note */}
        <div className="mt-16 text-gray-600 text-sm">
          © 2025 ÉP BIỂN SỐ THỨC – Biên Hòa, Đồng Nai.  
          Dịch vụ ép & phục hồi biển số chuyên nghiệp – uy tín hàng đầu miền Nam.
        </div>
      </div>
    </section>
  );
}

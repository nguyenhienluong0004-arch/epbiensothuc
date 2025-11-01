import { motion } from "framer-motion";

function Gallery() {
  const images = [
    {
      url: "https://i.postimg.cc/gJcRVCGj/10.jpg",
      alt: "Ép biển số xe máy bằng mica trong suốt chống trầy, sáng bóng, bền đẹp theo thời gian.",
    },
    {
      url: "https://i.postimg.cc/wvxJXC93/11.jpg",
      alt: "Ép biển số ô tô khung inox ép kính cao cấp, giữ màu cực tốt.",
    },
    {
      url: "https://i.postimg.cc/LX4ftcmq/12.jpg",
      alt: "Phục hồi biển số xe cũ - làm phẳng, sơn lại, ép mới đẹp như gốc.",
    },
    {
      url: "https://i.postimg.cc/MTZR7Cz7/13.jpg",
      alt: "Biển số ô tô sau khi ép lại sáng bóng, thẩm mỹ cao.",
    },
    {
      url: "https://i.postimg.cc/rmyW1BqG/14.jpg",
      alt: "Thợ ép biển số Thức đang thao tác cẩn thận từng chi tiết.",
    },
    {
      url: "https://i.postimg.cc/nzV74ynT/15.jpg",
      alt: "So sánh biển số trước và sau khi phục hồi - đẹp như mới.",
    },
    {
      url: "https://i.postimg.cc/G23YFWbQ/16.jpg",
      alt: "Khách hàng hài lòng sau khi ép biển số ô tô mới tại ÉP BIỂN SỐ THỨC.",
    },
    {
      url: "https://i.postimg.cc/yd69mM7g/9.jpg",
      alt: "Tiệm ÉP BIỂN SỐ THỨC - chuyên phục hồi và ép biển số xe máy, ô tô uy tín.",
    },
    {
      url: "https://i.postimg.cc/cJC89Vvb/17.jpg",
      alt: "Hình ảnh thực tế tại tiệm ÉP BIỂN SỐ THỨC - khách hàng sử dụng dịch vụ ép biển số chuyên nghiệp.",
    },
  ];

  const flags = [
    {
      url: "https://i.postimg.cc/T138gq7z/co1.png",
      alt: "Cờ Việt Nam - tượng trưng cho thương hiệu trong nước uy tín.",
    },
    {
      url: "https://i.postimg.cc/L58dLBCw/co2.png",
      alt: "Cờ tổ quốc Việt Nam tung bay - niềm tự hào và uy tín thương hiệu ÉP BIỂN SỐ THỨC.",
    },
  ];

  return (
    <section
      id="gallery"
      className="py-20 bg-white text-center"
      itemScope
      itemType="https://schema.org/ImageGallery"
    >
      {/* Tiêu đề SEO */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-indigo-700 mb-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Hình Ảnh Thực Tế{" "}
        <span className="text-yellow-500">Tại ÉP BIỂN SỐ THỨC</span>
      </motion.h2>

      {/* Mô tả phụ SEO */}
      <motion.p
        className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed mb-10 px-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        Đây là bộ sưu tập hình ảnh thật được chụp tại{" "}
        <strong>ÉP BIỂN SỐ THỨC</strong> — nơi chuyên{" "}
        <strong>phục hồi, ép và làm mới biển số xe máy & ô tô</strong> với công
        nghệ hiện đại. Chúng tôi tự hào mang đến những sản phẩm{" "}
        <strong>thẩm mỹ, bền đẹp và đúng chuẩn quy định</strong>.
      </motion.p>

      {/* Masonry layout */}
      <div className="columns-2 md:columns-3 gap-4 max-w-6xl mx-auto px-4">
        {images.map((img, i) => (
          <motion.figure
            key={i}
            className="mb-4 overflow-hidden rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 break-inside-avoid bg-white"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            itemScope
            itemType="https://schema.org/ImageObject"
          >
            <img
              src={img.url}
              alt={img.alt}
              loading="lazy"
              className="w-full h-auto object-contain rounded-xl hover:scale-[1.03] transition-transform duration-500"
              itemProp="contentUrl"
            />
            <figcaption
              className="text-sm text-gray-600 mt-2 px-2"
              itemProp="caption"
            >
              {img.alt}
            </figcaption>
          </motion.figure>
        ))}
      </div>

      {/* ✳️ Mục Các Cờ */}
    {/* ✳️ Mục Các Cờ */}
<motion.div
  className="mt-20 max-w-6xl mx-auto text-center"
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.7 }}
>
  <h3 className="text-3xl font-semibold text-red-700 mb-6">
    Tinh Thần & Niềm Tự Hào Dân Tộc
  </h3>
  <p className="text-gray-700 text-lg mb-10 px-6">
    <strong>ÉP BIỂN SỐ THỨC</strong> tự hào là thương hiệu Việt Nam, mang trong
    mình tinh thần lao động sáng tạo, bền bỉ và tận tâm phục vụ khách hàng trên
    khắp cả nước.
  </p>

  <div className="flex flex-col md:flex-row items-center justify-center gap-8">
    {flags.map((flag, i) => (
      <motion.div
        key={i}
        className="w-full md:w-1/2 bg-white rounded-xl shadow-md hover:shadow-xl overflow-hidden transition-all duration-500"
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: i * 0.2 }}
      >
        <img
          src={flag.url}
          alt={flag.alt}
          loading="lazy"
          className="w-full h-auto object-contain rounded-t-xl"
        />
        <p className="text-gray-700 text-sm md:text-base mt-3 mb-4 px-4">
          {flag.alt}
        </p>
      </motion.div>
    ))}
  </div>
</motion.div>
    {/* Nút chuyển sang trang Products */}
<motion.div
  className="mt-16 text-center"
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  <a
    href="/products"
    className="inline-block px-10 py-4 bg-gradient-to-r from-indigo-700 via-indigo-500 to-yellow-400 
               text-white font-semibold text-lg rounded-full shadow-lg 
               hover:shadow-2xl hover:scale-105 transition-all duration-500"
  >
    🔍 Xem Hình Ảnh Trước & Sau Khi Làm Biển
  </a>
  <p className="mt-3 text-gray-600 text-sm">
    So sánh chất lượng thật — Trước & Sau khi ép tại <strong>ÉP BIỂN SỐ THỨC</strong>
  </p>
</motion.div>


      {/* CTA cuối trang */}
      <motion.div
        className="mt-20 text-center max-w-2xl mx-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-700 text-lg leading-relaxed">
          Mỗi hình ảnh là minh chứng cho{" "}
          <strong>chất lượng và uy tín</strong> của{" "}
          <strong>ÉP BIỂN SỐ THỨC</strong>.  
          Hãy đến với chúng tôi để trải nghiệm dịch vụ{" "}
          <strong>ép biển số xe chuyên nghiệp - đẹp như mới</strong>!
        </p>
        <a
          href="#contact"
          className="inline-block mt-6 px-8 py-3 bg-yellow-400 text-gray-900 font-semibold rounded-full hover:bg-yellow-300 transition"
        >
          Liên hệ ngay
        </a>
      </motion.div>
    </section>
  );
}

export default Gallery;

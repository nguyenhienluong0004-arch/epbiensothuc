import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function News() {
  const news = [
    {
      id: 1,
      title: "Bí quyết phục hồi biển số cũ sáng bóng như mới",
      desc: "Tìm hiểu quy trình làm mới biển số xe cũ bằng công nghệ ép nhiệt hiện đại.",
      img: "https://source.unsplash.com/random/800x600?license-plate",
    },
    {
      id: 2,
      title: "Top 5 khung biển số titan bền đẹp năm 2025",
      desc: "Cập nhật xu hướng khung biển số titan mới nhất, vừa sang trọng vừa bền bỉ.",
      img: "https://source.unsplash.com/random/800x600?titan",
    },
    {
      id: 3,
      title: "Lý do bạn nên phục hồi thay vì làm biển số mới",
      desc: "Phục hồi giúp tiết kiệm chi phí, bảo tồn số cũ và vẫn đảm bảo tính thẩm mỹ.",
      img: "https://source.unsplash.com/random/800x600?car-number",
    },
    {
      id: 4,
      title: "Cảnh báo biển số giả tràn lan trên thị trường",
      desc: "Chuyên gia khuyên người tiêu dùng nên chọn cơ sở uy tín khi ép hoặc thay biển.",
      img: "https://source.unsplash.com/random/800x600?traffic-police",
    },
    {
      id: 5,
      title: "Công nghệ ép nhiệt titan – bước tiến mới trong phục hồi biển số",
      desc: "Khám phá công nghệ titan ép biển số giúp bề mặt sáng bóng và chống trầy xước.",
      img: "https://source.unsplash.com/random/800x600?metal",
    },
    {
      id: 6,
      title: "Thực hư chuyện bị phạt khi làm lại biển số xe",
      desc: "Luật sư giải thích rõ khi nào được phép ép, phục hồi hoặc thay biển số hợp pháp.",
      img: "https://source.unsplash.com/random/800x600?law",
    },
    {
      id: 7,
      title: "Mẹo bảo quản biển số tránh bong tróc, phai màu",
      desc: "Giữ cho biển số xe luôn bền đẹp bằng vài mẹo đơn giản tại nhà.",
      img: "https://source.unsplash.com/random/800x600?cleaning",
    },
    {
      id: 8,
      title: "Khách hàng chia sẻ trải nghiệm phục hồi biển số thành công",
      desc: "Hàng nghìn khách hàng đã tin tưởng và hài lòng với dịch vụ của chúng tôi.",
      img: "https://source.unsplash.com/random/800x600?happy-customer",
    },
    {
      id: 9,
      title: "So sánh biển số ép titan và biển số nhôm truyền thống",
      desc: "Hai loại vật liệu khác nhau – ưu nhược điểm ra sao?",
      img: "https://source.unsplash.com/random/800x600?comparison",
    },
    {
      id: 10,
      title: "Xưởng phục hồi biển số lớn nhất miền Trung khai trương chi nhánh mới",
      desc: "Đáp ứng nhu cầu ngày càng tăng, chi nhánh mới chính thức hoạt động tại Đà Nẵng.",
      img: "https://source.unsplash.com/random/800x600?garage",
    },
  ];

  return (
    <div className="py-20 bg-white relative">
      <h1 className="text-5xl font-extrabold text-center text-red-700 mb-16 drop-shadow-lg">
        🔥 TIN TỨC NỔI BẬT
      </h1>

      <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-6">
        {news.map((n, i) => (
          <motion.div
            key={i}
            className="bg-gray-50 rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.05 }}
          >
            <div className="overflow-hidden">
              <img
                src={n.img}
                alt={n.title}
                className="w-full h-56 object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-bold text-indigo-700 mb-2 line-clamp-2">
                {n.title}
              </h2>
              <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                {n.desc}
              </p>
              <Link
                to={`/news/${n.id}`}
                className="text-red-600 font-semibold hover:underline text-sm"
              >
                Xem chi tiết →
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

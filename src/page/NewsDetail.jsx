import { useParams, Link } from "react-router-dom";

export default function NewsDetail() {
  const { id } = useParams();

  const news = {
    1: {
      title: "Bí quyết phục hồi biển số cũ sáng bóng như mới",
      img: "https://source.unsplash.com/random/1200x800?license-plate",
      content: `Công nghệ ép nhiệt titan đang giúp phục hồi biển số cũ hiệu quả. 
Bằng cách xử lý bề mặt kim loại, loại bỏ lớp gỉ sét, sau đó phủ lớp chống trầy xước, biển số sẽ trở lại trạng thái sáng bóng như mới.`,
    },
    2: {
      title: "Top 5 khung biển số titan bền đẹp năm 2025",
      img: "https://source.unsplash.com/random/1200x800?titan",
      content: `Titan được đánh giá là vật liệu hàng đầu cho khung biển số vì độ bền cao và khả năng chống oxy hóa tuyệt vời. 
Các mẫu titan Rainbow, Matte Silver và Gold Shine là xu hướng mới năm 2025.`,
    },
    3: {
      title: "Lý do bạn nên phục hồi thay vì làm biển số mới",
      img: "https://source.unsplash.com/random/1200x800?car-number",
      content: `Phục hồi biển số giữ nguyên số gốc, tiết kiệm chi phí và bảo vệ giá trị pháp lý của xe. 
Việc làm mới có thể khiến bạn phải đăng ký lại, tốn nhiều thời gian hơn.`,
    },
    4: {
      title: "Cảnh báo biển số giả tràn lan trên thị trường",
      img: "https://source.unsplash.com/random/1200x800?traffic-police",
      content: `Hiện nay nhiều cơ sở làm biển số giả tràn lan, gây ảnh hưởng đến người dùng. 
Chỉ nên chọn nơi có giấy phép và uy tín để đảm bảo an toàn.`,
    },
    5: {
      title: "Công nghệ ép nhiệt titan – bước tiến mới trong phục hồi biển số",
      img: "https://source.unsplash.com/random/1200x800?metal",
      content: `Công nghệ ép nhiệt titan cho phép bề mặt biển số sáng bóng hơn, chống gỉ sét tốt hơn. 
Đây là công nghệ tiên tiến nhất được nhiều xưởng phục hồi áp dụng.`,
    },
    6: {
      title: "Thực hư chuyện bị phạt khi làm lại biển số xe",
      img: "https://source.unsplash.com/random/1200x800?law",
      content: `Theo quy định, việc phục hồi biển số không vi phạm nếu không thay đổi số hoặc hình dạng gốc. 
Tuy nhiên, làm giả hoặc chỉnh sửa số sẽ bị xử phạt nghiêm.`,
    },
    7: {
      title: "Mẹo bảo quản biển số tránh bong tróc, phai màu",
      img: "https://source.unsplash.com/random/1200x800?cleaning",
      content: `Để biển số luôn sáng bóng:
- Rửa xe bằng khăn mềm.
- Hạn chế phơi nắng lâu.
- Phủ nano định kỳ 3 tháng/lần.`,
    },
    8: {
      title: "Khách hàng chia sẻ trải nghiệm phục hồi biển số thành công",
      img: "https://source.unsplash.com/random/1200x800?happy-customer",
      content: `“Tôi tưởng phải thay biển mới, nhưng sau khi phục hồi, biển sáng như gương!” — Anh Huy, Đà Nẵng.
Rất nhiều khách hàng khác cũng phản hồi tích cực về độ bền và thẩm mỹ.`,
    },
    9: {
      title: "So sánh biển số ép titan và biển số nhôm truyền thống",
      img: "https://source.unsplash.com/random/1200x800?comparison",
      content: `Biển titan: sáng bóng, chống phai màu, chịu va đập tốt.
Biển nhôm: giá rẻ hơn nhưng nhanh xỉn màu và dễ trầy.
Lựa chọn titan mang lại thẩm mỹ và độ bền vượt trội.`,
    },
    10: {
      title: "Xưởng phục hồi biển số lớn nhất miền Trung khai trương chi nhánh mới",
      img: "https://source.unsplash.com/random/1200x800?garage",
      content: `Chi nhánh mới tại Đà Nẵng được đầu tư máy móc hiện đại, phục vụ khách hàng nhanh chóng. 
Đây là bước tiến lớn trong việc mở rộng dịch vụ phục hồi biển số tại miền Trung.`,
    },
  };

  const article = news[id];

  if (!article) {
    return <div className="p-20 text-center text-gray-600 text-xl">Không tìm thấy tin tức.</div>;
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-20">
      <img
        src={article.img}
        alt={article.title}
        className="w-full h-80 object-cover rounded-2xl shadow-lg mb-10"
      />
      <h1 className="text-4xl font-extrabold text-indigo-800 mb-6">{article.title}</h1>
      <p className="text-gray-700 leading-relaxed whitespace-pre-line">{article.content}</p>
      <div className="mt-10">
        <Link
          to="/news"
          className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-full font-semibold shadow transition"
        >
          ← Quay lại danh sách tin
        </Link>
      </div>
    </div>
  );
}

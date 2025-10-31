import { FaStar } from "react-icons/fa";

function Testimonials() {
  const reviews = [
    { name: "Anh Huy (Q5)", text: "Làm nhanh, biển đẹp như mới, giá hợp lý!" },
    { name: "Chị Lan (Tân Bình)", text: "Phục vụ tận tâm, rất hài lòng với chất lượng ép biển." },
    { name: "Anh Minh (Bình Thạnh)", text: "Biển xe ô tô mình làm ở đây 2 năm rồi vẫn sáng bóng như mới!" },
  ];

  return (
    <section id="testimonials" className="py-20 bg-gray-100 text-center">
      <h2 className="text-4xl font-bold text-indigo-700 mb-12">Khách Hàng Nói Gì?</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition text-left"
          >
            <p className="text-gray-700 mb-4 italic">“{r.text}”</p>
            <div className="flex items-center justify-between">
              <span className="font-semibold text-indigo-700">{r.name}</span>
              <div className="flex text-yellow-400">
                {Array(5)
                  .fill()
                  .map((_, j) => (
                    <FaStar key={j} />
                  ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

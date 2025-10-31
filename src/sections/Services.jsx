function Services() {
  const services = [
    {
      title: "Ép Biển Số Xe Máy",
      desc: "Mica trong suốt, chống trầy, sáng bóng bền lâu.",
      img: "https://source.unsplash.com/random/400x300?motorcycle",
    },
    {
      title: "Ép Biển Số Ô Tô",
      desc: "Khung inox cao cấp, ép kính chống nước, giữ màu cực tốt.",
      img: "https://source.unsplash.com/random/400x300?car",
    },
    {
      title: "Phục Hồi Biển Số Cũ",
      desc: "Làm phẳng, sơn lại, đánh bóng – đẹp như mới.",
      img: "https://source.unsplash.com/random/400x300?license-plate",
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-100">
      <h2 className="text-4xl font-bold text-indigo-700 text-center mb-12">Dịch Vụ Nổi Bật</h2>
      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {services.map((s, i) => (
          <div key={i} className="bg-white rounded-xl shadow hover:shadow-lg transition">
            <img src={s.img} alt={s.title} className="w-full h-52 object-cover rounded-t-xl" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-semibold text-indigo-700 mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;

function About() {
  return (
    <section id="about" className="py-20 bg-white text-center px-6">
      <h2 className="text-4xl font-bold text-indigo-700 mb-6">Về Chúng Tôi</h2>
      <p className="max-w-3xl mx-auto text-gray-700 text-lg leading-relaxed">
        <strong>ÉP BIỂN SỐ THỨC</strong> là tiệm chuyên phục hồi, ép và làm mới biển số xe
        bằng công nghệ hiện đại. Với <strong>hơn 7 năm kinh nghiệm</strong> trong ngành, 
        chúng tôi mang lại sản phẩm thẩm mỹ, đúng chuẩn quy định, bền bỉ theo thời gian.
      </p>
      <div className="mt-10 flex flex-col md:flex-row justify-center gap-10 max-w-5xl mx-auto">
        <img
          src="https://source.unsplash.com/random/500x350?car"
          alt="Tiệm ép biển số"
          className="rounded-2xl shadow-md"
        />
        <div className="text-left md:w-1/2 space-y-3">
          <p className="text-gray-700">
            ✅ Đội ngũ thợ lành nghề, tỉ mỉ từng chi tiết.
          </p>
          <p className="text-gray-700">
            ✅ Sử dụng vật liệu chất lượng cao – mica, inox bền đẹp.
          </p>
          <p className="text-gray-700">
            ✅ Ép nhanh, giao ngay – đảm bảo đúng hẹn.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;

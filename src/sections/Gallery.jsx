function Gallery() {
  const images = [1, 2, 3, 4, 5, 6];

  return (
    <section id="gallery" className="py-20 bg-white text-center">
      <h2 className="text-4xl font-bold text-indigo-700 mb-12">Hình Ảnh Thực Tế</h2>
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-6">
        {images.map((n) => (
          <img
            key={n}
            src={`https://source.unsplash.com/random/400x300?car-${n}`}
            alt="Ảnh sản phẩm"
            className="rounded-xl shadow hover:scale-105 transition-transform duration-300"
          />
        ))}
      </div>
    </section>
  );
}

export default Gallery;

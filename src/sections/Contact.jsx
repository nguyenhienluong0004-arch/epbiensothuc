import { FaFacebook, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <section id="contact" className="py-20 bg-indigo-700 text-white text-center px-6">
      <h2 className="text-4xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h2>
      <p className="text-lg mb-4">
        📍 <FaMapMarkerAlt className="inline-block mb-1" /> 123 Nguyễn Trãi, Quận 5, TP.HCM
      </p>
      <p className="text-lg mb-4">
        ☎️ <FaPhoneAlt className="inline-block mb-1" /> 0352 429 477
      </p>
      <a
        href="https://facebook.com"
        className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        <FaFacebook /> Liên hệ qua Facebook
      </a>
    </section>
  );
}

export default Contact;

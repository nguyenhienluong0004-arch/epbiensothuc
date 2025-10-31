import { FaFacebook, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";

function Contact() {
  return (
    <div className="py-20 bg-indigo-700 text-white text-center">
      <h1 className="text-4xl font-bold mb-6">Liên Hệ Với Chúng Tôi</h1>
      <p className="text-lg mb-2">
        <FaMapMarkerAlt className="inline mb-1" /> 123 Nguyễn Trãi, Quận 5, TP.HCM
      </p>
      <p className="text-lg mb-2">
        <FaPhoneAlt className="inline mb-1" /> 0909 123 456
      </p>
      <a
        href="https://facebook.com"
        className="inline-flex items-center gap-2 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full font-semibold hover:bg-yellow-300 transition"
      >
        <FaFacebook /> Liên hệ qua Facebook
      </a>
    </div>
  );
}

export default Contact;

// src/pages/Home.jsx
import { useEffect, useState, useContext } from "react";
import senaLogo from "../assets/logofarmacenter.png";
import { Link, useNavigate } from "react-router-dom";
import {
  FaUserTie,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaUserPlus,
} from "react-icons/fa";
import ProductGallery from "../components/ProductGallery";
import FloatingWhatsAppButton from "../components/FloatingWhatsAppButton";
import ScrollToTopButton from "../components/ScrollToTopButton";
import FloatingCartButton from "../components/FloatingCartButton";
import CartSidebar from "../components/CartSidebar";
import { CartContext } from "../context/CartContext";

const Home = () => {
  const [user, setUser] = useState(null);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();
  const { totalItems } = useContext(CartContext);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (storedUser) setUser(storedUser);
  }, []);

  const cerrarSesion = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      {/* Header */}
      <header className="w-full bg-[#0056A6] text-white">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center py-4 px-4 sm:px-6 gap-4">
          <img src={senaLogo} alt="Logo" className="h-20" />

          <div className="flex items-center flex-wrap justify-center gap-4">
            {!user ? (
              <>
                {/* Escritorio */}
                <Link
                  to="/register"
                  className="hidden sm:flex px-4 py-2 border-2 border-white rounded-full text-sm hover:bg-white hover:text-[#F36F21] transition"
                >
                  <FaUserPlus /> Registrarse
                </Link>
                <Link
                  to="/login"
                  className="hidden sm:flex px-4 py-2 border-2 border-white rounded-full text-sm hover:bg-white hover:text-[#F36F21] transition"
                >
                  <FaUserTie /> Iniciar Sesión
                </Link>

                {/* Móvil: íconos redondos */}
                <Link
                  to="/register"
                  className="block sm:hidden p-2 rounded-full border-2 border-white hover:bg-white hover:text-[#F36F21] transition"
                  title="Registrarse"
                >
                  <FaUserPlus size={18} />
                </Link>
                <Link
                  to="/login"
                  className="block sm:hidden p-2 rounded-full border-2 border-white hover:bg-white hover:text-[#F36F21] transition"
                  title="Iniciar Sesión"
                >
                  <FaUserTie size={18} />
                </Link>
              </>
            ) : (
              <>
                <span className="hidden sm:block text-sm">
                  Bienvenido, <strong>{user.nombre}</strong>
                </span>
                {user.rol === "admin" ? (
                  <Link
                    to="/admin"
                    className="px-4 py-2 border-2 border-white rounded-full text-sm hover:bg-white hover:text-[#F36F21] transition"
                  >
                    Panel Admin
                  </Link>
                ) : (
                  <Link
                    to="/dashboard"
                    className="px-4 py-2 border-2 border-white rounded-full text-sm hover:bg-white hover:text-[#F36F21] transition"
                  >
                    Mi Panel
                  </Link>
                )}
                <button
                  onClick={cerrarSesion}
                  className="px-4 py-2 border-2 border-white rounded-full text-sm hover:bg-white hover:text-[#F36F21] transition"
                >
                  Cerrar sesión
                </button>
              </>
            )}

            {/* Redes sociales */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/FarmacenterCo/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} className="hover:text-[#fd873a]" />
              </a>
              <a
                href="https://www.instagram.com/farmacenterco/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} className="hover:text-[#fd873a]" />
              </a>
              <a
                href="https://wa.me/573115193968"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} className="hover:text-[#fd873a]" />
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Product Gallery + Cart */}
      <ProductGallery openSidebar={() => setSidebarOpen(true)} />
      <FloatingCartButton
        onClick={() => setSidebarOpen(true)}
        totalItems={totalItems}
      />
      <CartSidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {/* Other Floating Buttons */}
      <FloatingWhatsAppButton />
      <ScrollToTopButton />

      {/* Footer */}
      <footer className="w-full bg-[#0056A6] text-white py-8 px-4 mt-auto">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="space-y-6">
            <h4 className="text-2xl font-semibold mb-1 inline-block">
              Contacto
              <span className="block h-0.5 bg-white mt-1 w-[50vw] max-w-[300px]" />
            </h4>
            <p>📍 Cra 4 # 5-23, El Agrado, Huila</p>
            <p>📞 311 519 3968</p>

            <h4 className="text-2xl font-semibold mb-1 inline-block mt-6">
              Síguenos
              <span className="block h-0.5 bg-white mt-1 w-[50vw] max-w-[300px]" />
            </h4>
            <div className="flex items-center space-x-5 mt-4">
              <a
                href="https://www.facebook.com/FarmacenterCo/?locale=es_LA"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebook size={24} className="hover:text-[#fd873a]" />
              </a>
              <a
                href="https://www.instagram.com/farmacenterco/?hl=es"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram size={24} className="hover:text-[#fd873a]" />
              </a>
              <a
                href="https://wa.me/573115193968"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp size={24} className="hover:text-[#fd873a]" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-2xl font-semibold mb-1 inline-block">
              Ubicación
              <span className="block h-0.5 bg-white mt-1 w-[50vw] max-w-[300px]" />
            </h4>
            <iframe
              title="Ubicación Farmacenter"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.7210452742476!2d-75.77935!3d2.25862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e246ef17b4b3c6f%3A0xa307f9f44f4e1bcb!2sEl%20Agrado%2C%20Huila!5e0!3m2!1ses!2sco!4v1614806249863!5m2!1ses!2sco"
              width="100%"
              height="200"
              allowFullScreen=""
              loading="lazy"
              className="rounded-xl border-2 border-white shadow-lg mt-4"
            />
          </div>
        </div>
        <div className="mt-8 text-center text-sm text-gray-200 border-t border-white pt-4">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">Farmacenter</span>. Todos los derechos
          reservados.
        </div>
      </footer>
    </div>
  );
};

export default Home;

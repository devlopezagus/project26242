import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import { ItemDetailContainer } from "./components/ItemDetailContainer/ItemDetailContainer"
import { Error404 } from "./components/Error404/Error404"
import { Routes, Route } from "react-router-dom";
import './App.css'

function App() {
  return (
    <div className="app">

      <Header />

      <main className="main">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetailContainer />} />
          <Route path="/services" element={<h2>Servicio</h2>} />
          <Route path="/gallery" element={<h2>Galeria</h2>} />
          <Route path="/contact" element={<h2>Contacto</h2>} />
          <Route path="/login" element={<h2>Iniciar Sesión</h2>} />
          <Route path="/register" element={<h2>Registrarse</h2>} />
          <Route path="/cart" element={<h2>Carrito</h2>} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </main>

      <Footer />

    </div>
  );
}

export default App

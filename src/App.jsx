import { Header } from "./components/Header/Header"
import { Footer } from "./components/Footer/Footer"
import { ItemListContainer } from "./components/ItemListContainer/ItemListContainer"
import './App.css'

function App() {
  return (
    <div className="app">

      <Header />

      <main className="main">
        <ItemListContainer />
      </main>

      <Footer />

    </div>
  );
}

export default App

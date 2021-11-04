import "./App.css";
import ApiFetch from "./components/ApiFetch";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Grass from "./components/Grass";
import Header from "./components/Header";
import Home from "./components/Home";
// import PokemonFetch from "./components/PokemonFetch";
// import MenuIcon from " ../@mui/icons-material/Menu";

function App() {
  return (
    <div className="app">
      <h3>App</h3>
      <Header />
      <Home />
      <ApiFetch />
      {/* <PokemonFetch /> */}
      <Grass />
      <Contact />
      {/* <MenuIcon /> */}

      <Footer />
    </div>
  );
}

export default App;

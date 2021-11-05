import "./App.css";

import Contact from "./components/Contact";

import Footer from "./components/Footer";
import Grass from "./components/Grass";
import Header from "./components/Header";
import Home from "./components/Home";
import LastTry from "./components/LastTry";

function App() {
  return (
    <div className="app">
      <h3>App</h3>
      <Header />
      <Home />
      <Grass />
      <LastTry />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

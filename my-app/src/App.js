import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Presentation from "./components/Presentation";
import Portfolio from "./components/Portfolio";
import Competences from "./components/Competences";
import Experiences from "./components/Experiences";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Presentation />
      <Portfolio />
      <Competences />
      <Experiences />
      <Contact />
    </div>
  );
}

export default App;

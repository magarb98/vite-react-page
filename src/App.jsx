import "./App.css";
import Image from "./components/Image";
import Main from "./components/Main";
import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Image />
      <Main />
      <About />
      <Footer />
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./Components/Static/Header";
import Footer from "./Components/Static/Footer";
import Hero from "./Components/Hero";
import Team from "./Components/Team";
import Contact from "./Components/Contact";


function App() {
  return (
    <>
      <Header />
      <div class="mt-10"></div>
      <Hero />
      <Team />
      <Contact />
      <Footer />
    </>
    // <>
    //   <Container />
    //   <Footer />
    // </>
  );
}

export default App;

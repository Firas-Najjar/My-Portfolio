import Card from "./components/card";
import Header from "./components/Header";
import ImageSlider from "./components/ImageSlider";
import Projects from "./components/projects";
import ScrollBody from "./components/ScrollBody";
import Footer from "./components/footer";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Contact from "./Contact/contact";

function App() {
  return (
    <Router>
      <div className="Main">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Header />
                <ImageSlider />
                <ScrollBody />
                <Card />
                <Projects />
                <Footer />
              </div>
            }
          />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

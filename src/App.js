import AboutPage from "./Components/AboutPage.js";
import ContactPage from "./Components/ContactPage.js";
import HomePage from "./Components/HomePage.js";
import ProjectsPage from "./Components/ProjectsPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" Component={HomePage} />
          <Route path="/about" Component={AboutPage} />
          <Route path="/contact" Component={ContactPage} />
          <Route path="/project" Component={ProjectsPage} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

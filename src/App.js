import AboutPage from "./Components/AboutPage.js";
import ContactPage from "./Components/ContactPage.js";
import HomePage from "./Components/HomePage.js";
import ProjectsPage from "./Components/ProjectsPage.js";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar.js";
import Projects from "./Components/Projects.js";
import UserLogin from "./images/UserLogin.png";
import RApp from "./images/SimpleReactApp.png";
import Todo from "./images/TodoApp.png";

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
          <Route
            path="/project/userauth"
            element={
              <Projects
                heading="Simple User Authentication in C++"
                img={UserLogin}
                alt="User Login"
                gitlink="https://github.com/Sahid-m/SimpleUserAuth"
                desc="This is a simple User Authentication System in C++. It uses file stream and it can register a new user in a text file with his/her Username and Password . multiple users detials can be saved in a same text file and a user can also login with their username and password and a user can also change their password by searching up their username. Its a Simple Application though it teaches you basics of filestream library in C++."
              />
            }
          />
          <Route
            path="/project/todoapp"
            element={
              <Projects
                heading="To-do App in react JS"
                img={Todo}
                alt="To-do Appp"
                gitlink="https://github.com/Sahid-m/todoapp"
                desc="Create and manage your daily tasks with the intuitive To-do app built using React.js. Stay organized and on top of your to-do list with this user-friendly application. Add, delete and mark tasks as completed with just a few clicks. The app provides a clean and responsive interface, making it easy to view and prioritize your tasks.. Say goodbye to scattered notes and embrace productivity with our feature-rich Todo app in React.js"
              />
            }
          />
          <Route
            path="/project/simplereactapp"
            element={
              <Projects
                heading="Simple React App for Text Manipulation"
                img={RApp}
                alt="Simple React App"
                gitlink="https://github.com/Sahid-m/SimpleReactApp/"
                desc="This is a simple react application that I made when starting to learn React it is just a simple text manipulation tool that can do multiple things like remove white spaces transform the text to uppercase or lower case or just find the words or character in texts . It uses mostly Javascript and a little react things like UseState hook and some basics routing."
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

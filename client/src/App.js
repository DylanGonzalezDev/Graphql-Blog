import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { Navigation } from "./components/Navbar";
import "bootswatch/dist/lux/bootstrap.min.css";

function App() {
  //const token = localStorage.getItem("token");
  return (
    <Router>
      <Navigation />
      <div className="container p-4">
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route path="/" element={<MessageList />} />
          <Route exact path="/new-message" element={<MessageForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
/*<Route path="/login" element={<Login />} />  token ? <Navigate to="/login" /> :*/

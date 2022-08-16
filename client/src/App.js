import MessageForm from "./components/MessageForm";
import MessageList from "./components/MessageList";
import Login from "./components/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Navigation } from "./components/Navbar";
import "bootswatch/dist/lux/bootstrap.min.css";
import UserState from "./context/UserState";

function App() {
  return (
    <UserState>
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
    </UserState>
  );
}

export default App;

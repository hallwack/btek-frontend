import { Link, useNavigate } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    window.localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div>
      <h1>Home</h1>
      <Link to="/characters">Characters</Link>
      <button
        type="submit"
        onClick={handleLogout}
        className="px-3 py-2 bg-sky-300 rounded-md"
      >
        Logout
      </button>
    </div>
  );
};

export default App;

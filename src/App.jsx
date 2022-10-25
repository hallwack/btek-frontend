import { Link } from "react-router-dom";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/characters">Characters</Link>
    </div>
  );
};

export default App;

import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

const Home = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/checkout");
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Home - This project is to support in my learning of React</h1>
        <button type="button" onClick={handleClick}>Register</button>
      </header>
    </div>
  );
}

export default Home;

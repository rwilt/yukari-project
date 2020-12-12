import './App.css';
// import video from './paintbg.mp4';
import video from './paintvidsmall.mp4';

function App() {
  return (
    <div className="App">

        <video autoPlay loop muted>
          <source src={video} type="video/mp4"/>
        </video>
        <h1>Yukari Levine</h1>
        <ul>
          <li>Services</li>
          <li>Clients</li>
          <li>Contact</li>
        </ul>
    </div>
  );
}

export default App;

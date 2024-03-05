
import './App.css';
import Weather from './Weather';

export default function App() {
  return (
    <div className="App">
      <div className='container'>
      
      <Weather defaultCity="New York"/>
      <footer>
        This project is coded by 
        <a href="https://github.com/Joey199-sudo" target='_blank' rel="noreferrer" >
          Johannah Makgato
        </a> 
        and is{" "}

      <a href="https://github.com/Joey199-sudo/react-weather-app"
        target='_blank'
        rel="noreferrer">
          open-sourced on GitHub
        </a>{" "}
      can also be found on {" "}
      <a href="https://silly-fairy-ddc531.netlify.app/" target='_blank' rel="noreferrer" >
          netlify
      </a>
      </footer>
      </div>
    </div>
  );
}



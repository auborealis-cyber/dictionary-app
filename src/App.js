import logo from "./Au-logo.png";
import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary/>
        </main>
        <footer className="App-footer text-center">
          Coded with ❤️ by Aurora Thomas, open-sourced on GitHub and hosted by{" "}
          <a href="https://audictionary-app.netlify.app/">Netlify</a>
        </footer>
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';

function App() {
  
  const isStudentMode=process.env.REACT_APP_KEY_USE_MODE.toString()==="student";
  
  return (
    <div className="App">
      <header className="App-header">

        <h1>{isStudentMode ? "Student Portal":"Faculty Portal"}</h1>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          modify <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          {process.env.REACT_APP_KEY_APPNAME}
        </a>
        <h1>{process.env.REACT_APP_KEY_VERSION}</h1>
        <h1>{process.env.REACT_APP_KEY_SECRETV}</h1>
      </header>
    </div>
  );
}

export default App;

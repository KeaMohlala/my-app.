import "./App.css";
import "./index.css";

import Weather from "./weather";

export default function App() {
  return (
    <div className="App">
      <Weather defaultCity="Johannesburg" />
      <small>
        <a
          href="https://github.com/KeaMohlala/react-weatherapp.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        ,by Keamogetse Mohlala
      </small>
    </div>
  );
}

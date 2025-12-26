import './App.css'
import MainNavbar from './Components/MainNavbar'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/Home";
import RoomList from "./Components/RoomList";

function App() {
  return (
    <div className="flex flex-col min-h-screen"> {/* Establecemos flexbox y altura mínima */}
      <MainNavbar />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* Otros routes */}
        </Routes>
      </Router>
      <RoomList />
      <footer className="bg-gray-800 text-white text-center py-4 mt-auto"> {/* mt-auto empuja el pie al final */}
        <p>
          Powered by <span className="font-bold"><a href='https://github.com/guillerhv'>Guillermo Rodríguez</a></span> 🔧​
        </p>
      </footer>
    </div>
  );
}

export default App;

import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from './Home';
import { Profile } from './Profile';

function App() {
  return (
    <div className="components">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

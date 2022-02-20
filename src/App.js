import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { Home } from './Home';
import { Profile } from './Profile';
import { AddUser } from './AddUser/AddUser';

function App() {
  return (
    <div className="components">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/createuser" element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

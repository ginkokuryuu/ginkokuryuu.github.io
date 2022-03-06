import Profile from './components/Profile'
import IibAndIfa from './routes/IibAndIfa';
import './App.css'
import ProjectShowcase from './components/ProjectShowcase';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
          <Routes>
            <Route path='/' exact element={
              <div>
                <Profile/>
                <ProjectShowcase/>
              </div>
            }/>
            <Route path="IibAndIfa" element={<IibAndIfa/>}/>
          </Routes>
      </div>
    </Router>
  );
}

export default App;

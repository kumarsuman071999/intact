
import './App.css';
import WorkItem from './pages/WorkItem';
import Home from './pages/Home';
import Automation from './pages/Automation';

import Sidebar from './componenets/Sidebar';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Repoting from './pages/Repoting';
import Policies from './pages/Policies';
import Catalog from './pages/Catalog';
import Administration from './pages/Administration';
import Service from './pages/Service';
import TopBar from './componenets/TopBar';

function App() {
  return (
    <Router>
      <div className="app">
        <TopBar/>
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/service" element={<Service/>} />
            <Route path="/work" element={<WorkItem/>} />
            <Route path="/automation" element={<Automation/>} />
            <Route path="/reporting" element={<Repoting/>} />
            <Route path="/policies" element={<Policies/>} />
            <Route path="/catalog" element={<Catalog/>} />
            <Route path="/administration" element={<Administration/>} />
          </Routes>
        </div>
      </div>
    </Router>
    
  );
}

export default App;

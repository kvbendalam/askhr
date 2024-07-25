import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Dashboard from './Dashboard';

function App() {
  return (
    <Router>
      <div className="App"  data-testid="app-container">
        <Navbar/>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* <Route path="/office-entry-pass" exact element={<OfficeEntryPass />} /> */}
          {/* <Route path="/chat" exact element={<ChatComponent />} /> */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;

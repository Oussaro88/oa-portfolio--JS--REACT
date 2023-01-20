import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/navBar';
import Main from './Main';
import Projects from './Projects';
import Contact from './Contact';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="pageContent">
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Contacts" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

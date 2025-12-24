
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter,Routes, Route, Link} from 'react-router-dom';
import About from'./pages/About';
import User_details from './pages/User_details';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>|{" "}
        <Link to="/about">About</Link>|{"  "}
      </nav>
      <Routes>
        <Route path="/" element={<Main />} />
         <Route path="/about" element={<About />} />
         <Route path="/User_details/:id" element={<User_details />} />
      </Routes>
      </BrowserRouter> 
       <Footer />
    </div>
  );
}

export default App;

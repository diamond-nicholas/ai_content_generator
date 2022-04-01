import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tweets from './components/Tweets';
import Coldemails from './components/Coldemails';
import Product from './components/Product';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/tweets' element={<Tweets />} />
        <Route path='/coldemails' element={<Coldemails />} />
        <Route path='/products' element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;

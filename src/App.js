import Navigation from './components/Navigation';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Tweets from './components/Tweets';
import Coldemails from './components/Coldemails';
import Product from './components/Product';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Navigation />} />
        <Route path='/tweets' element={<Tweets />} />
        <Route path='/coldemails' element={<Coldemails />} />
        <Route path='/products' element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;

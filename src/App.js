import './index.css';
import './App.css';
import data from './data';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import ProductScreen from './screens/ProductScreen'
import HomeScreen from './screens/HomeScreen';

function App() {

  return (
    <BrowserRouter>
    <div>
      <header>
        <Link to='/'> React E-commerce </Link> 
      </header>
      <main>
        <Routes>
          <Route path="/product/:slug" element={<ProductScreen />} />
          <Route path='/' element={<HomeScreen />}/>
          
        </Routes>
      </main>
    </div>
    </BrowserRouter>
    
  );
}

export default App;

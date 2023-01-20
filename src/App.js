import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Header from './containers/Header';
import ProductListing from './containers/ProductListing';
import ProductComponent from './containers/ProductComponent';
import ProductDetails from './containers/ProductDetails';
import NotFound from './containers/NotFound';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" exact element={<ProductListing />}/>
              <Route path="/product/:productID" exact element={<ProductDetails />}/>
            <Route path="/*" element={<NotFound />}/>
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;


// <Route path="/" element={<ProductListing/>}></Route>

// <Route path="/" exact element = {<ProductListing />} />
//   <Route path="/product/:productId" exact element = {<ProductDetail />} />
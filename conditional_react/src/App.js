//import { useState } from 'react';
import ProductEvents from './ProductEvents';
//import Products from './Products';
//import Products2 from './Products2';
//import Products3 from './Products3';
//import Products4 from './Products4';
//import "./styles.css";
function App() {

  //const [isAdmin, setIsAdmin] = useState(false);
  /*
  const inputChangeHandler = (e) => {
    setIsAdmin(e.target.checked);
  }*/

  return (
    <div className="App">
      {/*<input type="checkbox" onChange={inputChangeHandler} />Is Admin
      <hr />*/}
      {/*<h1>Inline if else or ternary operator</h1>*/}
      { /*<Products4 isAdmin={isAdmin} />*/}
      <ProductEvents/>
    </div>
  );
}

export default App;

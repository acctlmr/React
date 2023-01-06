

import FirstComponent from './FirstComponent';
function App() {
  return (
    <div>
      <FirstComponent/>
      <FirstComponent values="String Literal" quantity={1} />
      <FirstComponent values="Number Literal" quantity={2} />
      <FirstComponent values="Boolean Literal" quantity={3} />
      
    </div>
  );
}

export default App;

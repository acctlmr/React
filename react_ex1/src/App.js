
import Heading from './Heading';


function App() {
       // let paragraph = <p>Calculation</p>;
      //  let additionHeading = <h3>Addition</h3>;
       // let subtractionHeading = <h3>Subtraction</h3>;
       // let multiplicationHeading = <h3>Multiplication</h3>;
        let x = 35;
        let y = 25;
  return (
    <div>
            <Heading/>
            <SubHeading/>
            <AdditionHeading/>={x + y}
            <SubtractionHeading/>={x - y}
            <MultiplicationHeading/>={x * y}
    </div>
  );
}

const SubHeading = () => {
  
  return (
    
    <div>
      <h3>Calculation</h3>
    </div>
  )
}

const AdditionHeading = () => {
  return (
    <h4>Addition</h4>
  )
}

const SubtractionHeading = () => {
  return (
    <div>
      <h4>Subtraction</h4>
    </div>
  )
}

const MultiplicationHeading = () => {
  return (
    <div>
      <h4>Multiplication</h4>
  </div>
)}
export default App;

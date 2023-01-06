import Vegetables from './Vegetables';
import Fruits from './Fruits';
function App() {
  return (
    <div>
      <h1 className={{ textAlign: "center", fontSize: "35" }}>🥕List of Vegetables🧅</h1>
      
      <Vegetables itemName="Potato" itemPrice={35} />
      <Vegetables itemName="Onion" itemPrice={15} />
      <Vegetables itemName="Ginger" itemPrice={15} />
      <Vegetables itemName="Cabbage" itemPrice={55} />
      <Vegetables itemName="Brinjal" itemPrice={45} />
      <hr></hr>
      <hr></hr>
      <h1 className={{ textAlign: "center",fontSize:"35"}}>List of Fruits</h1>
      <Fruits itemName="Apple" itemPrice={75} />
      <Fruits itemName="Banana" itemPrice={65} />
      <Fruits itemName="Orange" itemPrice={85} />
      <Fruits itemName="Watermelon" itemPrice={45} />
      <Fruits itemName="Pineapple" itemPrice={35}/>
    </div>
  );
}

export default App;

import './App.css';
import Form from "./Component/Form"
import CreditCard from "./Component/CreditCard"
function App() {
  return (
    <div className="App">
      <h1>React Credit Card Form</h1>
      <div style={{display:"flex",padding:"10px",justifyContent:"center"}}>
      <div style={{marginRight:"100px",marginTop:"70px"}}><CreditCard /></div>
      <div> <Form /></div>
      </div>
     
    </div>
  );
}

export default App;

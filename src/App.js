import "./App.css";
import Navbar from "./components/Navbar";
import TextField from "./components/TextField";

function App() {
  return (
    <>
      {/* <Navbar title ="ConvUtils" about = "About"/> */}
      <Navbar title = "ConvUtils"/>
      <TextField heading ="Enter your text here"/>
    </>
  );
}

export default App;

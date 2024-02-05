import "bootstrap/dist/css/bootstrap.min.css";
import SaludoOriginal from "./components/SaludoOriginal";

function App(){
  const saludo = "My Friend!";
  return (
    <>
      <SaludoOriginal saludo={saludo}></SaludoOriginal>
    </>
  );
}

export default App;

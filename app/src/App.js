import HeaderApp from "./Componentes/HeaderApp";
import BarraNavApp from "./Componentes/BarraNavApp";
import FooterApp from "./Componentes/FooterApp";

function App() {
  return (
    <>
      <HeaderApp nombreApp="Empresa ppp"></HeaderApp>
      <BarraNavApp isLogueado="N"></BarraNavApp>
      <FooterApp></FooterApp>
    </>
  );
}

export default App;

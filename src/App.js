// API https://api.orhanaydogdu.com.tr/deprem/live.php
//COMPONENTS
import Earthquakes from "./Components/Earthquakes";
import Header from "./Components/Header";
import Footer from "./Components/Footer";


function App() {
  return (
    <>
      <Header />
      <Earthquakes/>
      <Footer/>
    </>
  );
}

export default App;

import react from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Sections from "./components/Sections";
import GlobalStyle from "./GlobalStyle";

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Sections />
      <Footer/>
    </>
  );
}

export default App;

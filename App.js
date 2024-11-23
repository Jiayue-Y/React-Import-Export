import logo from './logo.svg';
import './App.css';
import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ContentA } from "./components/ContentA";
import { ContentB } from "./components/ContentB";
import { Button } from "./components/SharedComponents";

function App() {
  return (
    <div className="App">
      <Header />
        <img src={logo} className="App-logo" alt="logo" />
        <main>

<div>
        <ContentA />
          <Button onClick={() => alert("ButtonA clicked!")}>ButtonA</Button>
</div>

<div>
        <ContentB />
          <Button onClick={() => alert("ButtonB clicked!")}>ButtonB</Button>
</div>
      </main>

      <Footer />
    </div>
  );
}

export default App;

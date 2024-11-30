import React from "react";
import Bouton from "./components/Bouton/Bouton";

const App = () => {
  const handleClick = () => {
    alert("Bouton clicked!");
  };

  return (
    <div style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>React Vanilla Bouton</h1>

      <h2>Primary Bouton</h2>
      <Bouton variant="primary" onClick={handleClick}>
        Primary
      </Bouton>

      <h2>Secondary Bouton</h2>
      <Bouton variant="secondary" onClick={handleClick}>
        Secondary
      </Bouton>

      <h2>Disabled Bouton</h2>
      <Bouton variant="primary" disabled>
        Disabled
      </Bouton>
    </div>
  );
};

export default App;

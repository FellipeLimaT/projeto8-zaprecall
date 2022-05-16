import React from "react";
import '../assets/css/reset.css'
import '../assets/css/style.css'
import HomePage from "./HomePage/HomePage";
import Deck from "./Deck/Deck";

export default function App() {

  const [screen, setScreen] = React.useState('HomePage');

  return (
    <div>
      {
        screen === 'HomePage' ? <HomePage setScreen={setScreen} /> : <Deck />
      }
    </div>
  );
}





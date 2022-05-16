import React from "react";
import './homePage.css';
import logo from '../../assets/img/logo.png';

export default function HomePage({setScreen}) {
    return (
        <div class="home">
            <img src={logo} />
                <p class="logoName">ZapRecall</p>
                <div class="homeButton" onClick={() => setScreen('Deck')}>
                    <p>Iniciar Recall!</p>
                </div>
        </div>
    );
}
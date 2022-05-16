import React from "react";
import './deck.css'
import logo from '../../assets/img/logo-pequeno.png'
import Cards from "./Cards";
import Footer from "../Footer/Footer";

export default function Deck() {    
    
    const cardsInfo = [
        {
            question: 'O que é JSX?',
            answer: 'Uma extensão de linguagem do JavaScript',
        },
        {
            question: 'O React é ... ',
            answer: 'uma biblioteca JavaScript para construção de interfaces',
        },
        {
            question: 'Componentes devem iniciar com ...',
            answer: 'letra maiúscula',
        },
        {
            question: 'O ReactDOM nos ajuda ...',
            answer: 'interagindo com a DOM para colocar componentes React na mesma',
        },
        {
            question: 'Usamos o npm para ...',
            answer: 'gerenciar os pacotes necessários e suas dependências',
        },
        {
            question: 'Usamos props para ...',
            answer: 'passar diferentes informações para componentes',
        },
        {
            question: 'Usamos estado (state) para ...',
            answer: 'dizer para o React quais informações quando atualizadas devem renderizar a tela novamente',
        },
        {
            question: 'Podemos colocar __ dentro do JSX',
            answer: 'expressões',
        }
    ];

    const questions = [];
    let ind;
    let aux = [];
    let magicNumber = 7;

    for(let i=0; i < cardsInfo.length + magicNumber; i++) {
        ind = parseInt(Math.random() * cardsInfo.length);
        aux = cardsInfo.splice(ind, 1);
        questions.push(aux[0]);
    }

    const [clicked, setClicked] = React.useState(0);
    const [icons, setIcons] = React.useState([]);
    const [rememberNum, setRememberNum] = React.useState(0);


    return (
        <div className="gamePage">
            <header>
                <img src={logo} />
                <p className="logoName">ZapRecall</p>
            </header>

            <main>
            {questions.map((info, index) => {
                return <Cards 
                        textInfo={info} 
                        questionIndex={index + 1}
                        answerCount={setClicked}
                        answerNum={clicked}
                        iconsChange={setIcons}
                        iconsPresent={icons}
                        rememberNumChange={setRememberNum}
                        rememberNumPresent={rememberNum}
                        />
            })}
            </main>

            <Footer 
                clickedNum={clicked} icons={icons} questions={questions} rememberNum={rememberNum}
            />

        </div>
    );
}
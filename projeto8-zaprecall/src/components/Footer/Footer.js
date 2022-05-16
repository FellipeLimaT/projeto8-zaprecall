import React from "react";
import './footer.css'
import imgSad from '../../assets/img/sad.png'
import imgParty from '../../assets/img/party.png'

export default function Footer(props) {

    const comments = {
        imgParty: imgParty,
        titleParty: 'Parabéns!',
        textParty: 'Você não esqueceu de nenhum flashcard!',
        imgSad: imgSad,
        titleSad: 'Putz...',
        textSad: 'Ainda faltam alguns... Mas não desanime!',
    };

    function Result(props) {
        return (
            <div className="resultView">
                <div className="resultBox">
                    <img src={props.imgResult} alt="image" />
                    <h2>{props.titleResult}</h2>
                </div>
                <p>{props.textResult}</p>
            </div>
        );
    }

    function AnswerCount() {
        return (
            <div>
                {props.clickedNum}/{props.questions.length} concluídos
            </div>
        );
    }

    return (

        <footer>
            <div>
                {props.rememberNum === props.questions.length ? (
                    <Result imgResult={comments.imgParty} titleResult={comments.titleParty} textResult={comments.textParty} />
                ) : ("")}
                
                {props.clickedNum === props.questions.length && props.rememberNum !== props.questions.length ? (
                    <Result imgResult={comments.imgSad} titleResult={comments.titleSad} textResult={comments.textSad} />
                ) : ("")}

                <AnswerCount />

                {props.icons.map((name) => (<ion-icon name={name}></ion-icon>))}
            </div>
        </footer>
    );


}
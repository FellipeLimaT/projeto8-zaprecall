import React from "react";
import './deck.css'
import setinha from '../../assets/img/setinha.png'


export default function Cards(props) {

    const [cardStatus, setcardStatus] = React.useState('beforeAnswered');
    const [cardAnswer, setCardAnswer] = React.useState(false);
    const [answer, setAnswer] = React.useState('card');
    const [icon, setIcon] = React.useState('play-outline');
    const [text, setText] = React.useState(props.textInfo.question);

    function Answered(answerValue, iconValue) {
        setcardStatus('aswered');
        setAnswer(answerValue);
        setIcon(iconValue);
        props.iconsChange([...props.iconsPresent, iconValue]);
        props.answerCount(props.answerNum + 1);

        if (answerValue === 'great' || answerValue === 'ok') {
            props.rememberNumChange(props.rememberNumPresent + 1)
        }
    }

    function Answer() {

        function Options() {
            return (
                                    
                    <div className="boxOptions">
                        <div className="Option backRed" onClick={() => Answered("bad", "close-circle-sharp")}>
                            <p>Não lembrei!</p>
                        </div>
                        <div className="Option backYellow" onClick={() => Answered("ok", "help-circle-sharp")}>
                            <p>Quase não lembrei!</p>
                        </div>
                        <div className="Option backGreen" onClick={() => Answered("great", "checkmark-circle-sharp")}>
                            <p>Zap!</p>
                        </div>
                    </div>
            );
        }

        return <Options />;
    }


    function BeforeAnswer() {
        return (
            <div className="boxCard">
                <div className={answer} >
                    <h2>Pergunta {props.questionIndex}</h2>
                </div>
                <ion-icon name={icon} onClick={() => setcardStatus("question")}></ion-icon>
            </div>
        );
    }

    function Question() {

        function answerSee() {
            setText(props.textInfo.answer);
            setCardAnswer(true);
        }

        return (
            <div className="boxCardQuestion">
                <p>{text}</p>
                {cardAnswer ? (<Answer />) : <img src={setinha} onClick={() => answerSee()} />}
            </div>
        );
    }


    return (
        <div>
            {cardStatus === "beforeAnswered" ? <BeforeAnswer /> : ""}
            {cardStatus === "aswered" ? <BeforeAnswer /> : ""}
            {cardStatus === "question" && (answer === "great" || answer === "ok" || answer === "bad") ? (<BeforeAnswer />) : ("")}
            {cardStatus === "question" && answer === "card" ? <Question /> : ""}
        </div>
    );
}




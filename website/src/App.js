import React, { useState } from "react";
import Question from "./Question";
import Finish from "./Finish";
import questions from "./questions.json";
import "./App.css";
import Typed from "react-typed";
import PasswordComponent from "./PasswordComponent";

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showFinish, setShowFinish] = useState(false);
    const [showOpeningSitePassword, setShowOpeningSitePassword] =
        useState(true);
    const [doneTyping, setDoneTyping] = useState(false);
    const [instructions, setInstructions] = useState(
        "Hello user. To confirm that you are Olivia Kathleen Wirsching, " +
        "please answer these 25 security questions. You must also kiss " +
        "Zane every 10 questions so that he will enter the password and " +
        "allow you to continue (two factor authentication, you know how " +
        "it is). You may also (optionally) remove an item of clothing " +
        "every 10 questions."
    )

    const anyoneButLivvyString = "Hello user. To confirm that you are Olivia Kathleen Wirsching, " +
    "please answer these 25 security questions.";

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowFinish(true);
            }
        } else {
            setCurrentQuestion(Math.max(0, currentQuestion - 10)); // Go back to the first question on a wrong answer
        }
    };

    const handlePasswordSubmit = () => {
        setShowOpeningSitePassword(false);
    };

    const handleSecondaryPasswordSubmit = () => {
        setInstructions(anyoneButLivvyString);
        setShowOpeningSitePassword(false);
    };

    return (
        <div className="App">
            <h1 className="site-title">The Adventures of Livvy and Zaney</h1>
            {showOpeningSitePassword && (
                <PasswordComponent
                    handlePasswordSubmit={handlePasswordSubmit}
                    correctPassword={"hi"}
                    otherPasswordSubmit={handleSecondaryPasswordSubmit}
                    otherCorrectPassword={"hi1"}
                />
            )}
            {!showOpeningSitePassword && (
                <>
                    {!currentQuestion &&  (
                        <Typed
                            strings={[
                                instructions,
                            ]}
                            element="h1"
                            className="opening-message"
                            typeSpeed={20}
                            onComplete={(instance) => {
                                setDoneTyping(true);
                                setTimeout(() => {
                                    instance.cursor.remove();
                                }, 1000);
                            }}
                        />
                    )}
                    {showFinish ? (
                        <Finish />
                    ) : (
                        <>
                            {doneTyping && (
                                <Question
                                    questionNumber={currentQuestion}
                                    question={questions[currentQuestion]}
                                    onAnswerClick={handleAnswerClick}
                                />
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default App;

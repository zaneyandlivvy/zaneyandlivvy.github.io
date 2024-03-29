import React, { useState } from "react";
import Question from "./Question";
import MainSite from "./MainSiteComponents/MainSite";
import questions from "./questions.json";
import "./App.css";
import Typed from "react-typed";
import PasswordComponent from "./PasswordComponent";

const App = () => {
    const TEST_MODE = false;
    const passwordQuestions = [0, 10, 20, 30];
    const livvyPasswords = ["benji", "iloveyou","seanbarker","10freakygirls"];
    const otherPasswords = ["password", "password", "password", "password"];
    const skipToSitePassword = "f3b4e2c1a0d9e8b7a6c5d4e3f2g1h0i9j8k7l6m5n4o3p";

    const [currentQuestion, setCurrentQuestion] = useState(TEST_MODE ? questions.length-1: 0);
    const [showFinish, setShowFinish] = useState(TEST_MODE);
    const [showPassword, setShowPassword] = useState(!TEST_MODE);
    const [doneTyping, setDoneTyping] = useState(TEST_MODE);
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
        if (passwordQuestions.includes(currentQuestion + 1)) {
            setShowPassword(true);
        }

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
        setShowPassword(false);
    };

    const handleSecondaryPasswordSubmit = () => {
        setInstructions(anyoneButLivvyString);
        setShowPassword(false);
    };

    const handleSkipToSitePasswordSubmit = () => {
        setShowFinish(true);
        setShowPassword(false);
    }

    return (
        <div className="blurred-background">
            <div className="App">
                <h1 className="site-title">The Adventures of Livvy and Zaney</h1>
                {(showPassword && passwordQuestions.includes(currentQuestion)) && (
                    <PasswordComponent
                        handlePasswordSubmit={handlePasswordSubmit}
                        correctPassword={livvyPasswords[passwordQuestions.indexOf(currentQuestion)]}
                        otherPasswordSubmit={handleSecondaryPasswordSubmit}
                        otherCorrectPassword={otherPasswords[passwordQuestions.indexOf(currentQuestion)]}
                        skipToSitePassword={skipToSitePassword}
                        skipToSitePasswordSubmit={handleSkipToSitePasswordSubmit}
                    />
                )}
                {!showPassword && (
                    <>
                        {(!currentQuestion && !showFinish) &&  (
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
                            <MainSite questionLength={questions.length}/>
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
        </div>
    );
};

export default App;

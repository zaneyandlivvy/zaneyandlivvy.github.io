import React, { useState } from "react";
import Question from "./Question";
import Finish from "./Finish";
import questions from "./questions.json";
import "./App.css";
import Typed from "react-typed";

const App = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showFinish, setShowFinish] = useState(false);

    const handleAnswerClick = (isCorrect) => {
        if (isCorrect) {
            if (currentQuestion < questions.length - 1) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowFinish(true);
            }
        } else {
            setCurrentQuestion(Math.max(0, currentQuestion-10)); // Go back to the first question on a wrong answer
        }
    };

    return (
        <div className="App">
            <h1>The Adventures of Livvy and Zaney</h1>
            {!currentQuestion && (
                <Typed
                    strings={[
                        "Hello user. To confirm that you are Olivia Kathleen Wirsching, " +
                        "please answer these 40 security questions. You must also kiss " +
                        "Zane every 10 questions so that he will enter the password and " +
                        "allow you to continue (two factor authentication, you know how " +
                        "it is). You may also (optionally) remove an item of clothing " +
                        "every 10 questions."
                    ]}
                    element="h1"
                    className="opening-message"
                    typeSpeed={40}
                    onComplete={(instance) => {
                        setTimeout(() => {
                            instance.cursor.remove();
                        }, 1000);
                    }}
                />
            )}
            {showFinish ? (
                <Finish />
            ) : (
                <Question
                    questionNumber={currentQuestion}
                    question={questions[currentQuestion]}
                    onAnswerClick={handleAnswerClick}
                />
            )}
        </div>
    );
};

export default App;

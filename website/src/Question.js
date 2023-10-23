import React from "react";

function Question ({ questionNumber, question, onAnswerClick }) {
    
	let sortedChoices = [...question.choices];
	sortedChoices.sort((a, b) => a.text.localeCompare(b.text));

    return (
        <div className="Question">
            <h2>
                {questionNumber + 1}. {question.question}
            </h2>
            <ul>
                {sortedChoices.map((choice, index) => (
                    <li
                        key={index}
                        onClick={() => onAnswerClick(choice.isCorrect)}
                    >
                        {choice.text}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;

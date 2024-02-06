import React, { useState } from "react";
import "react-calendar/dist/Calendar.css";
import DateSelector from "./DateSelector";
import dailyUpdates from "../formatted_updates.json";

const ComingSoon = () => {
    const SHOW_COMING_SOON = true;
    const [selectedDate, setSelectedDate] = useState(new Date(2023, 1, 14));

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const getEntryForDate = () => {
        if (!selectedDate) return null;

        const formattedDate = selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });

        console.log(formattedDate);

        const entry = dailyUpdates.find((item) => item.date === formattedDate);

        return entry ? entry.text : "No entry available for this date.";
    };

    const getReadableDate = () => {
        return selectedDate.toLocaleDateString("en-US", {
            weekday: "long",
            month: "long",
            day: "numeric",
            year: "numeric",
        });
    };

    const nextDay = () => {
        const next = new Date(selectedDate);
        next.setDate(selectedDate.getDate() + 1);
        handleDateChange(next);
    };

    const prevDay = () => {
        const prev = new Date(selectedDate);
        prev.setDate(selectedDate.getDate() - 1);
        handleDateChange(prev);
    };

    const dontShowComingSoon = (
      <div>
        <h2>Coming Soon...</h2>
      </div>
    );

    return (
      <>
        {!SHOW_COMING_SOON && (dontShowComingSoon)}
        {SHOW_COMING_SOON && (
        <div className="coming-soon">
            <DateSelector onDateChange={handleDateChange} />
            <div className="daily-updates-right-side">
                <div className="daily-update-text">
                    <h3 style={{ marginBlock: "10px" }}>{getReadableDate()}</h3>
                    <p className="daily-update-text-entry">
                        {getEntryForDate()}
                    </p>
                </div>
                <div className="daily-update-buttons">
                    <button className="daily-update-button" onClick={prevDay}>
                        Previous Day
                    </button>
                    <button className="daily-update-button" onClick={nextDay}>
                        Next Day
                    </button>
                </div>
            </div>
        </div>
        )}
    </>
    );
};

export default ComingSoon;

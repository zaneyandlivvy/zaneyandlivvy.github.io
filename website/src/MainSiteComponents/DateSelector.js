import React, { useState } from "react";
import Calendar from "react-calendar";
import "./calendar.css";

const DateSelector = ({ selectedDate, onDateChange }) => {
    const [date, setDate] = useState(selectedDate);

    const onChange = (newDate) => {
        // Check if the selected date is within the allowed range
        const startDate = new Date(2023, 1, 14); // February 14, 2023
        const endDate = new Date(2024, 1, 14); // February 13, 2024

        if (newDate >= startDate && newDate <= endDate) {
            setDate(newDate);
            onDateChange(newDate); // Pass the selected date back to the parent component
        } else {
            // Alert the user or handle invalid selection
            alert(
                "Please select a date between February 14, 2023, and February 14, 2024"
            );
        }
    };

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={date}
                minDate={new Date(2023, 1, 14)} // February 14, 2023
                maxDate={new Date(2024, 1, 14)} // February 13, 2024
            />
        </div>
    );
};

export default DateSelector;

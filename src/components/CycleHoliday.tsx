import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): JSX.Element {
    type Holiday =
        | "Christmas"
        | "NewYear"
        | "Easter"
        | "Diwali"
        | "ThanksgivingDay";

    const [Holiday, setHoliday] = useState<Holiday>("Christmas");

    function switchingYear() {
        const newYear = yearHoliday[Holiday];
        setHoliday(newYear);
    }

    function switchingAlpha() {
        const newAlpha = alphabetHoliday[Holiday];
        setHoliday(newAlpha);
    }

    const alphabetHoliday: Record<Holiday, Holiday> = {
        NewYear: "ThanksgivingDay",
        Christmas: "NewYear",
        Easter: "Christmas",
        ThanksgivingDay: "Diwali",
        Diwali: "Easter"
    };

    const yearHoliday: Record<Holiday, Holiday> = {
        NewYear: "Christmas",
        Christmas: "Easter",
        Easter: "ThanksgivingDay",
        ThanksgivingDay: "Diwali",
        Diwali: "NewYear"
    };

    return (
        <div>
            <div>Cycle Holiday</div>
            <Button onClick={switchingAlpha}>Alphabet</Button>
            <Button onClick={switchingYear}>Year</Button>
            <div>
                {Holiday === "Christmas" ? (
                    <span>Holiday: 🎁</span>
                ) : Holiday === "NewYear" ? (
                    <span>Holiday: 🎄</span>
                ) : Holiday === "Easter" ? (
                    <span>Holiday: 🐇</span>
                ) : Holiday === "Diwali" ? (
                    <span>Holiday: 🎆</span>
                ) : Holiday === "ThanksgivingDay" ? (
                    <span>Holiday: 🦃</span>
                ) : (
                    <span>Holiday: </span>
                )}
            </div>
        </div>
    );
}

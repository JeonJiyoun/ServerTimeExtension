// TimerContainer.tsx
import * as React from "react";

interface DateTimeProps {
    year : number;
    month : number;
    date : number;
    hours : string;
    minutes : string;
    seconds : string;
}

function TimerPresenter (props: DateTimeProps) {
    return (
        <>
            <h1>{props.year}-{props.month < 10 ? "0" + (props.month + 1) : props.month + 1}-{props.date < 10 ? "0" + props.date + 1 : props.date}</h1>
            <span>{props.hours}:{props.minutes}:{props.seconds}</span>
        </>
    );
}

export default TimerPresenter;
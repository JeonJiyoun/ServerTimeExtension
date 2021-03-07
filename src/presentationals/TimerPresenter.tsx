// TimerContainer.tsx
import * as React from "react";
import { TimerLayout, DateContainer, DateLayout, TimeLayout } from "../layouts/ContentLayout";

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
        <TimerLayout>
            <DateContainer>
                <DateLayout>
                    {props.month < 10 ? "0" + (props.month + 1) : props.month + 1}
                </DateLayout>
                <DateLayout>
                    {props.date < 10 ? "0" + props.date + 1 : props.date}
                </DateLayout>
            </DateContainer>
            <TimeLayout>{props.hours}:{props.minutes}:{props.seconds}</TimeLayout>            
        </TimerLayout>
    );
}

export default TimerPresenter;
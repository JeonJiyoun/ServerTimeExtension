// TimerContainer.tsx
import * as React from "react";
import { useState, useRef, useEffect } from 'react';
import TimerPresenter from '../presentationals/TimerPresenter';

interface TimerProps {
    url : string;
}

interface ServerTime {
    year: number;
    month: number;
    date: number;
    hours : string;
    minutes : string;
    seconds : string;
}

function TimerContainer ( { url } : TimerProps) {
    const [ ServerTimeObject, setServerTimeObject ] = useState<ServerTime>({
        year: 0,
        month: 0,
        date: 0,
        hours : '',
        minutes : '',
        seconds : ''
    });

    const interverId = useRef<any>();
    const setTime = () => {
        chrome.runtime.sendMessage(
            { message: "requestServerTime", url: url },
            function (response) {
              const serverTime = new Date(response.time);
           
              let hour: number = serverTime.getHours();
              let minutes: number = serverTime.getMinutes();
              let seconds: number = serverTime.getSeconds();
              setServerTimeObject({
                  year : serverTime.getFullYear(),
                  month: serverTime.getMonth(),
                  date: serverTime.getDate(),
                  hours : hour < 10 ? "0" + hour : hour.toString(),
                  minutes : minutes < 10 ? "0" + minutes : minutes.toString(),
                  seconds : seconds < 10 ? "0" + seconds : seconds.toString()
              });
            }
          );

    }

    useEffect( () => {
        interverId.current = setInterval(setTime, 500);
        return () => clearInterval(interverId.current);
    });

    return (
        <TimerPresenter 
            year = {ServerTimeObject.year}
            month = {ServerTimeObject.month}
            date = {ServerTimeObject.date}
            hours = {ServerTimeObject.hours}
            minutes = {ServerTimeObject.minutes}
            seconds = {ServerTimeObject.seconds}
        />
    );
}

export default TimerContainer;
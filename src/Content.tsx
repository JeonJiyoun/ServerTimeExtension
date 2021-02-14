// Content.tsx
import * as React from "react";
import { useState } from 'react';
import Draggable from "react-draggable";
import useInterval from 'react-useinterval';

interface ContentProps {
  //name: string;
  contentdiv: string;
  current : Date;
}

interface ServerTime {
  hours : string;
  minutes : string;
  seconds : string;
}

const Content: React.FC<ContentProps> = (props) => {
  const { contentdiv, current } = props;
  const [ serverTime, setServerTime ] = useState<ServerTime>({
    hours : '',
    minutes : '',
    seconds : ''
  });
  const style = {
    textAlign: "center" as const,
  };

  useInterval(()=>{
      current.setSeconds(current.getSeconds() + 1);

      var nowHours = current.getHours();
      var nowMinutes = current.getMinutes();
      var nowSeconds = current.getSeconds();

      const nowTime : ServerTime = {
        hours : nowHours < 10 ? "0" + nowHours : nowHours.toString(),
        minutes : nowMinutes < 10 ? "0" + nowMinutes : nowMinutes.toString(),
        seconds : nowSeconds < 10 ? "0" + nowSeconds : nowSeconds.toString()
      }

      setServerTime(serverTime => nowTime);
  }, 1000);

  return (
    <Draggable defaultPosition={{ x: 0, y: -100 }}>
      <div style={style} className={contentdiv}>
        <h1>{current.getFullYear()}-{current.getMonth() < 10 ? "0" + (current.getMonth() + 1) : current.getMonth() + 1}-{current.getDate() < 10 ? "0" + current.getDate() + 1 : current.getDate()}</h1>
        <span>{serverTime.hours}:{serverTime.minutes}:{serverTime.seconds}</span>
      </div>
    </Draggable>
  );
};

export default Content;

// Content.tsx
import * as React from "react";
import { useState } from 'react';
import Draggable from "react-draggable";
import useInterval from 'react-useinterval';
import { ContentDiv } from './ContentDiv';

interface ContentProps {
  DivType: string;
  current : Date;
}

interface ServerTime {
  hours : string;
  minutes : string;
  seconds : string;
}

const Content: React.FC<ContentProps> = (props) => {
  const { DivType, current } = props;
  const [ ServerTime, setServerTime ] = useState<ServerTime>({
    hours : '',
    minutes : '',
    seconds : ''
  });

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
      <ContentDiv className={DivType}>
        <h1>{current.getFullYear()}-{current.getMonth() < 10 ? "0" + (current.getMonth() + 1) : current.getMonth() + 1}-{current.getDate() < 10 ? "0" + current.getDate() + 1 : current.getDate()}</h1>
        <span>{ServerTime.hours}:{ServerTime.minutes}:{ServerTime.seconds}</span>
      </ContentDiv>
    </Draggable>
  );
};

export default Content;

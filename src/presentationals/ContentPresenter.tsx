// Content.tsx
import * as React from "react";
import Draggable from "react-draggable";
import { ContentLayout } from '../layouts/ContentLayout';
import TimerContainer from '../containers/TimerContainer';

interface ContentProps {
  divType: string;
  current: Date;
}

function ContentPresenter (props: ContentProps) {
  const { divType, current } = props;

  return (
    <Draggable defaultPosition={{ x: 0, y: -100 }}>
      <ContentLayout className={divType}>
        <TimerContainer current={current}/>
      </ContentLayout>
    </Draggable>
  );
};

export default ContentPresenter;

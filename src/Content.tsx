// Content.tsx
import * as React from "react";
import Draggable from "react-draggable";

interface ContentProps {
  name: string;
  contentdiv: string;
}

const Content: React.FC<ContentProps> = (props) => {
  const { name, contentdiv } = props;
  const style = {
    textAlign: "center" as const,
  };
  return (
    <Draggable defaultPosition={{ x: 0, y: -100 }}>
      <div style={style} className={contentdiv}>
          <h1>{name}의 확장 프로그램</h1>
          <span>확장 프로그램을 연동해보는 프로젝트 입니다.</span>
      </div>
    </Draggable>
  );
};

export default Content;
